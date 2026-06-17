import { useDispatch } from "react-redux";
import { selectTicket, toggleStarred } from "../features/ticketsSlice";
import { statusStyles, priorityStyles } from "../lib/ticketMeta";

export default function TicketItem({ ticket, isSelected }) {
  const dispatch = useDispatch();
  const status = statusStyles[ticket.status];

  return (
    <li>
      <div
        role="button"
        tabIndex={0}
        onClick={() => dispatch(selectTicket(ticket.id))}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            dispatch(selectTicket(ticket.id));
          }
        }}
        aria-pressed={isSelected}
        className={`group relative flex cursor-pointer items-start gap-3 overflow-hidden rounded-lg border pl-4 pr-3 py-3 transition-colors ${
          isSelected
            ? "border-ink bg-ink/4"
            : "border-slate-line bg-paper hover:border-ink-3"
        }`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-1 ${status.rail}`}
          aria-hidden="true"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-ink-4">{ticket.id}</span>
            <span
              className={`rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${priorityStyles[ticket.priority]}`}
            >
              {ticket.priority}
            </span>
          </div>
          <p className="mt-1 truncate text-sm font-semibold text-ink">
            {ticket.issueTitle}
          </p>
          <p className="truncate text-xs text-ink-3">{ticket.customerName}</p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleStarred(ticket.id));
            }}
            aria-pressed={ticket.starred}
            aria-label={ticket.starred ? "Unstar ticket" : "Star ticket"}
            className="rounded p-0.5 text-lg leading-none transition-transform hover:scale-110"
          >
            <span
              className={`
                ${ticket.starred ? "text-signal-gold" : "text-slate-line"} cursor-pointer
              `}
            >
              ★
            </span>
          </button>
          <span
            className={`whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium ${status.badge}`}
          >
            {ticket.status}
          </span>
        </div>
      </div>
    </li>
  );
}
