import { useDispatch } from "react-redux";
import {
  changeTicketStatus,
  changeTicketPriority,
  toggleStarred,
} from "../features/ticketsSlice";
import { STATUSES, PRIORITIES } from "../lib/ticketMeta";

export default function ActionPanel({ ticket }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5 border-t border-slate-line pt-5">
      <div>
        <label
          htmlFor="status-select"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-4"
        >
          Status
        </label>
        <select
          id="status-select"
          value={ticket.status}
          onChange={(e) =>
            dispatch(
              changeTicketStatus({ id: ticket.id, status: e.target.value }),
            )
          }
          className="w-full rounded-md border border-slate-line bg-paper px-3 py-2 text-sm font-medium text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="priority-select"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-4"
        >
          Priority
        </label>
        <select
          id="priority-select"
          value={ticket.priority}
          onChange={(e) =>
            dispatch(
              changeTicketPriority({ id: ticket.id, priority: e.target.value }),
            )
          }
          className="w-full rounded-md border border-slate-line bg-paper px-3 py-2 text-sm font-medium text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
        >
          {PRIORITIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={() => dispatch(toggleStarred(ticket.id))}
        aria-pressed={ticket.starred}
        className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
          ticket.starred
            ? "border-signal-gold/40 bg-signal-gold/10 text-signal-gold"
            : "border-slate-line text-ink-2 hover:border-ink-3"
        } cursor-pointer`}
      >
        <span aria-hidden="true">{ticket.starred ? "★" : "☆"}</span>
        {ticket.starred ? "Starred" : "Star this ticket"}
      </button>
    </div>
  );
}
