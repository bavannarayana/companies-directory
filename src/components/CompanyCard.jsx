export default function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:-translate-y-1 hover:shadow-xl transition">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold">{company.name}</h2>
          <p className="text-sm text-slate-500 mt-1">{company.industry}</p>
        </div>

        <span className="text-xs bg-slate-100 px-2 py-1 rounded">
          {company.location}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>Employees: {company.employees}</p>
        <p>Founded: {company.founded}</p>
      </div>

      <a
        href={company.website}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-slate-900 text-white px-4 py-2 rounded-lg"
      >
        Visit Website
      </a>
    </div>
  );
}
