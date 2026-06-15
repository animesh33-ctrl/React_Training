import React from "react";
import RequestCard from "./RequestCard";

function RequestList({ requests, onViewDetails, onResolve }) {
  console.log("RequestList re-rendered");

  return (
    <div className="card">
      <h3>Request List ({requests.length})</h3>

      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onViewDetails={onViewDetails}
            onResolve={onResolve}
          />
        ))
      )}

      <div className="todo-box">
        <strong>TODO:</strong> Analyze whether this component itself should be
        memoized.
      </div>
    </div>
  );
}

export default React.memo(RequestList);
