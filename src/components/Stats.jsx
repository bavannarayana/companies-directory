export default function Stats({ total }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow px-4 py-2 md:p-4">
        <p className="text-sm text-slate-500">Total Companies</p>

        <h2 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">{total}</h2>
      </div>

      <div className="bg-white rounded-xl shadow px-4 py-2 md:p-4">
        <p className="text-sm text-slate-500">Status</p>

        <h2 className="text-xl md:text-2xl font-bold mt-1 md:mt-2 text-green-600">
          Active
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow px-4 py-2 md:p-4">
        <p className="text-sm text-slate-500">Directory Type</p>

        <h2 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">Public</h2>
      </div>
    </div>
  );
}
