import { useSelector } from "react-redux";
import {
  inProgress,
  open,
  resolved,
  starred,
  totalTickets,
} from "../store/ticketSlice";

const SummaryHeader = () => {
  const total = useSelector((state) => totalTickets(state.ticket));
  const openCount = useSelector((state) => open(state.ticket));
  const inProgressCount = useSelector((state) => inProgress(state.ticket));
  const resolvedCount = useSelector((state) => resolved(state.ticket));
  const starredCount = useSelector((state) => starred(state.ticket));

  const stats = [
    {
      label: "Total Tickets",
      value: total,
      dot: "bg-slate-400",
    },
    {
      label: "Open",
      value: openCount,
      dot: "bg-amber-500",
    },
    {
      label: "In Progress",
      value: inProgressCount,
      dot: "bg-blue-500",
    },
    {
      label: "Resolved",
      value: resolvedCount,
      dot: "bg-emerald-500",
    },
    {
      label: "Starred",
      value: starredCount,
      dot: "bg-yellow-500",
    },
  ];

  return (
    <div className="mt-5 border-t border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-4">
        {stats.map((item, index) => (
          <div key={item.label} className="flex items-center gap-6">
            {index !== 0 && (
              <span
                className="hidden h-8 w-px bg-slate-700 md:block"
                aria-hidden="true"
              />
            )}

            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`}></span>

              <span className="text-2xl font-semibold text-white">
                {item.value}
              </span>

              <span className="text-xs uppercase tracking-wider text-slate-400">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryHeader;
