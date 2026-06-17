import { FILTERS, PRIORITY } from "../data/ticketMeta";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedTicketNow,
  updateTicketStatus,
  updatePriority,
  toggleStar,
} from "../store/ticketSlice";

const TicketDetails = () => {
  const dispatch = useDispatch();

  const selectedTicket = useSelector((state) =>
    selectedTicketNow(state.ticket),
  );

  if (!selectedTicket) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-600">
            No Ticket Selected
          </h2>

          <p className="mt-2 text-slate-400">
            Select a ticket from the left panel to view details.
          </p>
        </div>
      </div>
    );
  }

  const priorityStyles = {
    High: "bg-red-100 text-red-700 border-red-200",
    Medium: "bg-amber-100 text-amber-700 border-amber-200",
    Low: "bg-green-100 text-green-700 border-green-200",
  };

  const statusStyles = {
    Open: "bg-orange-100 text-orange-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Resolved: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="border-b border-slate-200 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              {selectedTicket.id}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-800">
              {selectedTicket.issueTitle}
            </h1>
          </div>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              statusStyles[selectedTicket.status]
            }`}
          >
            {selectedTicket.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Customer
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {selectedTicket.customerName}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Assigned To
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {selectedTicket.assignedTo}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Priority
            </p>

            <span
              className={`mt-2 inline-block rounded-md border px-3 py-1 text-sm font-semibold ${
                priorityStyles[selectedTicket.priority]
              }`}
            >
              {selectedTicket.priority}
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Starred
            </p>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {selectedTicket.starred ? "⭐ Starred" : "Not Starred"}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 p-5">
          <p className="mb-3 text-xs uppercase tracking-wider text-slate-400">
            Description
          </p>

          <p className="leading-7 text-slate-700">
            {selectedTicket.description}
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 p-5">
          <h3 className="mb-5 text-lg font-semibold text-slate-800">
            Ticket Actions
          </h3>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Status
              </label>

              <select
                value={selectedTicket.status}
                onChange={(e) =>
                  dispatch(
                    updateTicketStatus({
                      id: selectedTicket.id,
                      status: e.target.value,
                    }),
                  )
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none cursor-pointer"
              >
                {FILTERS.map((f) => {
                  if (f !== "All") {
                    return (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    );
                  }
                })}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Priority
              </label>

              <select
                value={selectedTicket.priority}
                onChange={(e) =>
                  dispatch(
                    updatePriority({
                      id: selectedTicket.id,
                      priority: e.target.value,
                    }),
                  )
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none cursor-pointer"
              >
                {PRIORITY.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => dispatch(toggleStar(selectedTicket.id))}
              className="w-full rounded-lg border border-slate-300 py-3 font-medium transition hover:bg-slate-50"
            >
              {selectedTicket.starred ? "★ Remove Star" : "☆ Star This Ticket"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
