export default function Filters({
  location,
  setLocation,
  industry,
  setIndustry,
  sort,
  setSort,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <input
        placeholder="Filter by location"
        className="bg-white border border-slate-200 rounded-xl px-4 py-3"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        placeholder="Filter by industry"
        className="bg-white border border-slate-200 rounded-xl px-4 py-3"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />

      <select
        className="bg-white border border-slate-200 rounded-xl px-4 py-3"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="name">Name A-Z</option>
        <option value="employees">Employees High-Low</option>
      </select>
    </div>
  );
}
