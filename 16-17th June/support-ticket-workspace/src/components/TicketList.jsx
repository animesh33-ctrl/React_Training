import { useSelector } from "react-redux";
import {
  selectFilteredTickets,
  selectSelectedTicketId,
} from "../features/ticketsSlice";
import TicketItem from "./TicketItem";

export default function TicketList() {
  const tickets = useSelector(selectFilteredTickets);
  const selectedTicketId = useSelector(selectSelectedTicketId);

  if (tickets.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-sm font-medium text-ink-2">
          No tickets match this filter
        </p>
        <p className="mt-1 text-xs text-ink-4">
          Try a different status filter to see more tickets.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2 overflow-y-auto px-4 py-4">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isSelected={ticket.id === selectedTicketId}
        />
      ))}
    </ul>
  );
}
