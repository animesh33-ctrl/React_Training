import { useSelector } from "react-redux";
import { showTicketList } from "../store/ticketSlice";
import TicketItem from "./TicketItem";

const TicketList = () => {
  const tickets = useSelector((state) => showTicketList(state.ticket));

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Support Tickets
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {tickets.length} ticket{tickets.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {tickets.length > 0 ? (
          <div className="divide-y divide-slate-200">
            {tickets.map((ticket) => (
              <TicketItem key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ) : (
          <div className="flex h-40 items-center justify-center">
            <p className="text-sm text-slate-500">No tickets found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketList;
