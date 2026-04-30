export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow p-10 text-center">
      <h2 className="text-xl font-bold">No matching companies found.</h2>
      <p className="text-slate-500 mt-2">Try adjusting your filters.</p>
    </div>
  );
}
