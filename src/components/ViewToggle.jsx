export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setView("grid")}
        className={`px-4 py-2 rounded-lg cursor-pointer ${
          view === "grid" ? "bg-slate-900 text-white" : "bg-white border"
        }`}
      >
        Grid
      </button>

      <button
        onClick={() => setView("table")}
        className={`px-4 py-2 rounded-lg cursor-pointer ${
          view === "table" ? "bg-slate-900 text-white" : "bg-white border"
        }`}
      >
        Table
      </button>
    </div>
  );
}
