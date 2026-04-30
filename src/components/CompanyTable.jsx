export default function CompanyTable({ companies }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead className="bg-slate-900 text-white text-left">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Industry</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Employees</th>
            <th className="px-4 py-3">Founded</th>
            <th className="px-4 py-3">Website</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className="border-b hover:bg-slate-50">
              <td className="px-4 py-3 font-medium">{company.name}</td>
              <td className="px-4 py-3">{company.industry}</td>
              <td className="px-4 py-3">{company.location}</td>
              <td className="px-4 py-3">{company.employees}</td>
              <td className="px-4 py-3">{company.founded}</td>
              <td className="px-4 py-3">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-medium"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
