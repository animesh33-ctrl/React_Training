import { useSelector } from "react-redux";
import { selectSelectedTicketId } from "./features/ticketsSlice";
import SummaryHeader from "./components/SummaryHeader";
import FilterPanel from "./components/FilterPanel";
import TicketList from "./components/TicketList";
import TicketDetailPanel from "./components/TicketDetailPanel";

export default function App() {
  const selectedTicketId = useSelector(selectSelectedTicketId);

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <header className="bg-ink">
        <div className="mx-auto max-w-350 px-6 pt-5">
          <h1 className="font-display text-xl font-semibold text-paper">
            Customer Support Ticket Workspace
          </h1>
          <p className="mt-0.5 text-xs text-ink-4">
            Triage, track, and resolve customer issues
          </p>
        </div>
        <SummaryHeader />
      </header>

      <FilterPanel />

      <main className="relative mx-auto flex w-full max-w-350 flex-1 gap-4 overflow-hidden px-4 pb-4 sm:px-6 sm:pb-6">
        <section
          aria-label="Ticket list"
          className="flex w-full flex-col rounded-xl border border-slate-line bg-paper md:w-105 md:shrink-0"
        >
          <TicketList />
        </section>

        <section
          aria-label="Ticket details"
          className={`fixed inset-0 z-40 flex flex-col bg-paper transition-transform duration-200 md:static md:z-auto md:flex-1 md:translate-x-0 md:rounded-xl md:border md:border-slate-line ${
            selectedTicketId ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <TicketDetailPanel />
        </section>
      </main>
    </div>
  );
}
