import React, { memo, useMemo } from "react";

const AnalyticsPanel = ({ requests }) => {
  console.log("Analytics Panel Rendered!!");
  const categoryCounts = useMemo(() => {
    return requests.reduce((acc, req) => {
      acc[req.category] = (acc[req.category] || 0) + 1;
      return acc;
    }, {});
  }, [requests]);

  return (
    <div className="card">
      <h3>Analytics Panel</h3>
      <p>This component is intentionally heavy.</p>
      <p>
        Students must later lazy load this component and optimize the expensive
        calculation.
      </p>
      <ul>
        {Object.keys(categoryCounts).map((key) => (
          <li key={key}>
            {key}: {categoryCounts[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(AnalyticsPanel);
