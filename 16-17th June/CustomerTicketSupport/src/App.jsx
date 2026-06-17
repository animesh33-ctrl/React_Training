import FilterPanel from "./components/FilterPanel";
import SummaryHeader from "./components/SummaryHeader";
import TicketDetails from "./components/TicketDetails";
import TicketList from "./components/TicketList";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <header className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 pt-5">
          <h1 className="text-xl font-semibold text-white">
            Customer Support Ticket Workspace
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Triage, track, and resolve customer issues
          </p>
        </div>

        <SummaryHeader />
      </header>

      <FilterPanel />

      <main className="mx-auto flex w-full max-w-7xl flex-1 gap-4 px-4 pb-6">
        <section className="w-full md:w-105 md:shrink-0 bg-white border border-slate-200 rounded-xl overflow-hidden">
          <TicketList />
        </section>

        <section className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden">
          <TicketDetails />
        </section>
      </main>
    </div>
  );
};

export default App;
