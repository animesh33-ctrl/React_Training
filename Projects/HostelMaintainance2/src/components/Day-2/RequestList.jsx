import { memo, useContext } from "react";
import Card from "./Card";
import { RequestContext } from "./store/RequestContextObject";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import { useMemo } from "react";

const RequestList = memo(({ requestsOverride }) => {
  const { filteredRequests = [], filters, loading } = useContext(RequestContext);

  const list = useMemo(() => {
    if (!requestsOverride) return filteredRequests;
    return requestsOverride.filter((r) => {
      const mTitle = filters.title ? r.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
      const mCat = filters.category ? r.category.toLowerCase().includes(filters.category.toLowerCase()) : true;
      const mStatus = filters.status ? r.status.toLowerCase().includes(filters.status.toLowerCase()) : true;
      return mTitle && mCat && mStatus;
    });
  }, [requestsOverride, filteredRequests, filters]);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High": return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "Low": return "bg-slate-500/20 text-slate-400 border border-slate-500/30";
      default: return "";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open": return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "Resolved": return "bg-green-500/20 text-green-400 border border-green-500/30";
      default: return "";
    }
  };

  return (
    <div
      className="p-5 rounded-2xl"
      style={{ background: "#1E293B", border: "1px solid #334155" }}
    >
      <SearchBar />
      <h2 className="text-lg font-bold mt-4 mb-4" style={{ color: "#F1F5F9" }}>
        Request List
        <span
          className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full"
          style={{ background: "#334155", color: "#94A3B8" }}
        >
          {list.length}
        </span>
      </h2>

      {loading ? (
        <Spinner />
      ) : list.length === 0 ? (
        <div className="py-10 text-center" style={{ color: "#64748B" }}>
          <p className="text-2xl mb-2">—</p>
          <p className="text-sm">No requests found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {list.map((request) => (
            <Card
              key={request.id}
              request={request}
              getPriorityStyle={getPriorityStyle}
              getStatusStyle={getStatusStyle}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default RequestList;
