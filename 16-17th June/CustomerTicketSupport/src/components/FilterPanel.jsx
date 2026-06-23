import { FILTERS } from "../data/ticketMeta";
import { useDispatch, useSelector } from "react-redux";
import { activeFilter, filterTicket } from "../store/ticketSlice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const isActiveFilter = useSelector((state) => activeFilter(state.ticket));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">
            Filter Tickets
          </span>

          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => dispatch(filterTicket(filter))}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition
                ${
                  isActiveFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
