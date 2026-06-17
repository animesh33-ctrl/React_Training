import { useDispatch, useSelector } from "react-redux";
import { selectSelectedTicket, selectTicket } from "../features/ticketsSlice";
import { statusStyles, priorityStyles } from "../lib/ticketMeta";
import ActionPanel from "./ActionPanel";

export default function TicketDetailPanel() {
  const dispatch = useDispatch();
  const ticket = useSelector(selectSelectedTicket);

  if (!ticket) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-line text-ink-4">
          <span aria-hidden="true">→</span>
        </div>
        <p className="text-sm font-medium text-ink-2">Select a ticket</p>
        <p className="mt-1 max-w-55 text-xs text-ink-4">
          Choose a ticket from the list to view full details and take action.
        </p>
      </div>
    );
  }

  const status = statusStyles[ticket.status];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
      <button
        type="button"
        onClick={() => dispatch(selectTicket(null))}
        className="mb-4 flex items-center gap-1.5 text-sm font-medium text-ink-3 md:hidden"
      >
        <span aria-hidden="true">←</span> Back to list
      </button>

      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-xs text-ink-4">{ticket.id}</span>
          <h2 className="mt-1 text-lg font-semibold leading-snug text-ink">
            {ticket.issueTitle}
          </h2>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${status.badge}`}
        >
          {ticket.status}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-slate-line py-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-4">
            Customer
          </dt>
          <dd className="mt-0.5 font-medium text-ink">{ticket.customerName}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-4">
            Assigned to
          </dt>
          <dd className="mt-0.5 font-medium text-ink">{ticket.assignedTo}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-4">
            Priority
          </dt>
          <dd
            className={`mt-0.5 inline-block rounded border px-1.5 py-0.5 text-xs font-semibold uppercase ${priorityStyles[ticket.priority]}`}
          >
            {ticket.priority}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-4">
            Starred
          </dt>
          <dd className="mt-0.5 font-medium text-ink">
            {ticket.starred ? (
              <span className="text-signal-gold">★ Yes</span>
            ) : (
              <span className="text-ink-3">☆ No</span>
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-4">
        <dt className="text-xs uppercase tracking-wider text-ink-4">
          Description
        </dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">
          {ticket.description}
        </dd>
      </div>

      <ActionPanel ticket={ticket} />
    </div>
  );
}
