import EmployeeRow from "./EmployeeRow";

export default function EmployeeList({ employees, onStatusChange }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <h2 className="border-b border-slate-200 p-5 text-xl font-bold text-indigo-700">
        Employee List
      </h2>
      <div className="overflow-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3">Employee</th>
              <th className="px-5 py-3">Team</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                index={index}
                onStatusChange={onStatusChange}
              />
            ))}
          </tbody>
        </table>
        {employees.length === 0 && (
          <p
            data-testid="empty-state"
            className="p-8 text-center text-slate-500"
          >
            No employees match this filter.
          </p>
        )}
      </div>
    </section>
  );
}
