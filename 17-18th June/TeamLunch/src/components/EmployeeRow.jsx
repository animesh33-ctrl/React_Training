const AVATAR_COLORS = [
  "bg-blue-100 text-blue-600",
  "bg-orange-100 text-orange-600",
  "bg-purple-100 text-purple-600",
  "bg-green-100 text-green-600",
]

const STATUS_BADGE = {
  Going: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Not Going": "bg-rose-50 text-rose-600 border-rose-200",
  Pending: "bg-amber-50 text-amber-600 border-amber-200",
}

export default function EmployeeRow({ employee, index, onStatusChange }) {
  const { id, name, team, status } = employee
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length]
  const isGoing = status === "Going"
  const isNotGoing = status === "Not Going"

  return (
    <tr data-testid={`employee-row-${id}`} className="border-b border-slate-100 last:border-0">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${avatarColor}`}
          >
            {name.charAt(0)}
          </span>
          <span className="font-medium text-slate-900">{name}</span>
        </div>
      </td>
      <td className="px-5 py-4 text-slate-600">{team}</td>
      <td className="px-5 py-4">
        <span
          data-testid={`status-badge-${id}`}
          className={`rounded-md border px-3 py-1 text-xs font-semibold ${STATUS_BADGE[status]}`}
        >
          {status}
        </span>
      </td>
      <td className="px-5 py-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onStatusChange(id, "Going")}
            aria-label={`Mark ${name} as Going`}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              isGoing
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            Going
          </button>
          <button
            type="button"
            onClick={() => onStatusChange(id, "Not Going")}
            aria-label={`Mark ${name} as Not Going`}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              isNotGoing
                ? "border-rose-600 bg-rose-600 text-white"
                : "border-rose-200 text-rose-600 hover:bg-rose-50"
            }`}
          >
            Not Going
          </button>
        </div>
      </td>
    </tr>
  )
}
