import { useMemo } from "react";

export default function useFilteredCompanies(
  companies,
  search,
  location,
  industry,
  sort,
) {
  return useMemo(() => {
    let data = [...companies];

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (location) {
      data = data.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase()),
      );
    }

    if (industry) {
      data = data.filter((item) =>
        item.industry.toLowerCase().includes(industry.toLowerCase()),
      );
    }

    if (sort === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "employees") {
      data.sort((a, b) => b.employees - a.employees);
    }

    return data;
  }, [companies, search, location, industry, sort]);
}
