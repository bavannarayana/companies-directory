export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center gap-2 flex-wrap mt-6">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          disabled={page === index + 1}
          onClick={() => setPage(index + 1)}
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            page === index + 1 ? "bg-slate-900 text-white" : "bg-white border"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
