import { useState } from "react";

import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ViewToggle from "./components/ViewToggle";
import Loader from "./components/Loader";
import CompanyCard from "./components/CompanyCard";
import CompanyTable from "./components/CompanyTable";
import EmptyState from "./components/EmptyState";
import Pagination from "./components/Pagination";

import useCompanies from "./hooks/useCompanies";
import useDebounce from "./hooks/useDebounce";
import useFilteredCompanies from "./hooks/useFilteredCompanies";

export default function App() {
  const { companies, loading, error, refetch } = useCompanies();

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    industry: "",
    sort: "",
  });

  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setPage(1);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      location: "",
      industry: "",
      sort: "",
    });
    setPage(1);
  };

  const debouncedSearch = useDebounce(filters.search);

  const filtered = useFilteredCompanies(
    companies,
    debouncedSearch,
    filters.location,
    filters.industry,
    filters.sort,
  );

  const perPage = 6;
  const totalPages = Math.ceil(filtered.length / perPage);

  const paginatedData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-5 sm:px-6 space-y-6">
        <Stats total={companies.length} />

        <div className="grid md:grid-cols-2 gap-4">
          <SearchBar
            search={filters.search}
            setSearch={(value) => updateFilter("search", value)}
          />

          <ViewToggle view={view} setView={setView} />
        </div>

        <Filters
          location={filters.location}
          setLocation={(value) => updateFilter("location", value)}
          industry={filters.industry}
          setIndustry={(value) => updateFilter("industry", value)}
          sort={filters.sort}
          setSort={(value) => updateFilter("sort", value)}
        />
        <button
          onClick={resetFilters}
          className="bg-white border border-slate-200 px-4 py-3 rounded-xl hover:bg-slate-50"
        >
          Reset Filters
        </button>

        {loading && <Loader />}

        {error && (
          <div className="bg-red-100 p-5 rounded-xl">
            <p>{error}</p>

            <button
              onClick={refetch}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && <EmptyState />}

        {!loading && !error && filtered.length > 0 && view === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedData.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}

        {!loading && !error && filtered.length > 0 && view === "table" && (
          <CompanyTable companies={paginatedData} />
        )}

        {!loading && filtered.length > 0 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </main>
    </div>
  );
}
