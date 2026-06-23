import { memo, useContext } from "react";
import Card from "./Card";
import { RequestContext } from "./store/RequestContextObject";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import { useMemo } from "react";

const RequestList = memo(({ requestsOverride }) => {
  const {
    filteredRequests = [],
    filters,
    loading,
  } = useContext(RequestContext);
  const list = useMemo(() => {
    if (!requestsOverride) return filteredRequests;
    return requestsOverride.filter((r) => {
      const mTitle = filters.title
        ? r.title.toLowerCase().includes(filters.title.toLowerCase())
        : true;
      const mCat = filters.category
        ? r.category.toLowerCase().includes(filters.category.toLowerCase())
        : true;
      const mStatus = filters.status
        ? r.status.toLowerCase().includes(filters.status.toLowerCase())
        : true;
      return mTitle && mCat && mStatus;
    });
  }, [requestsOverride, filteredRequests, filters]);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-blue-200 text-blue-700 border-blue-200";
      case "Medium":
        return "bg-sky-200 text-sky-700 border-sky-200";
      case "Low":
        return "bg-gray-200 text-gray-700 border-gray-200";
      default:
        return "";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-200 text-red-700 border-red-200";
      case "In Progress":
        return "bg-yellow-200 text-yellow-700 border-yellow-200";
      case "Resolved":
        return "bg-green-200 text-green-700 border-green-200";
      default:
        return "";
    }
  };

  // console.log("Request List Rendered");

  return (
    <div className="p-5 m-3 bg-white/20 rounded-2xl border border-gray-300 shadow-sm max-w-[90%]">
      <SearchBar />
      <h2 className="text-2xl font-bold mb-5">Request List</h2>

      {loading ? (
        <Spinner />
      ) : list.length === 0 ? (
        <h4>Nothing to Show</h4>
      ) : (
        <div className="space-y-4">
          {list &&
            list.map((request) => (
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
