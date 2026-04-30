export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      autoFocus
      placeholder="Search company name..."
      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
