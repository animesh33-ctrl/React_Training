import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import {
  selectTicket,
  toggleStar,
  selectedTicketId,
} from "../store/ticketSlice";

import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch();

  const activeTicketId = useSelector((state) => selectedTicketId(state.ticket));

  const isActive = activeTicketId === ticket.id;

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

  const priorityBorder = {
    High: "border-l-red-500",
    Medium: "border-l-amber-500",
    Low: "border-l-green-500",
  };

  return (
    <div
      onClick={() => dispatch(selectTicket(ticket.id))}
      className={`
        cursor-pointer border-l-4 px-5 py-4 transition-all duration-200
        ${priorityBorder[ticket.priority]}
        ${
          isActive
            ? "bg-blue-50 border-r-4 border-r-blue-500"
            : "hover:bg-slate-100 hover:scale-[1.05]"
        }
        border-slate-300 border
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {ticket.id}
            </span>

            <span
              className={`rounded-md border px-2 py-1 text-xs font-semibold ${
                priorityStyles[ticket.priority]
              }`}
            >
              {ticket.priority}
            </span>
          </div>

          <h3 className="line-clamp-1 text-base font-semibold text-slate-800">
            {ticket.issueTitle}
          </h3>

          <p className="mt-1 text-sm text-slate-500">{ticket.customerName}</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleStar(ticket.id));
            }}
            className="text-xl text-amber-500 transition hover:scale-110"
          >
            {ticket.starred ? <IoIosStar /> : <IoIosStarOutline />}
          </button>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusStyles[ticket.status]
            }`}
          >
            {ticket.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(TicketItem);
