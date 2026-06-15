import React, { useMemo } from "react";

function SummaryCards({ requests }) {
  console.log("SummaryCards re-rendered");

  // // TODO: Students should optimize these repeated calculations using useMemo.
  // const total = requests.length;
  // const openCount = requests.filter((r) => r.status === "Open").length;
  // const resolvedCount = requests.filter((r) => r.status === "Resolved").length;
  // const highPriority = requests.filter((r) => r.priority === "High").length;

  const { total, openCount, resolvedCount, highPriority } = useMemo(() => {
    return requests.reduce(
      (acc, curr) => {
        acc.total++;
        if (curr.status === "Open") acc.openCount++;
        if (curr.status === "Resolved") acc.resolvedCount++;
        if (curr.priority === "High") acc.highPriority++;
        return acc;
      },
      { total: 0, openCount: 0, resolvedCount: 0, highPriority: 0 },
    );
  }, [requests]);

  return (
    <div className="summary-grid">
      <div className="summary-card">Total Requests: {total}</div>
      <div className="summary-card">Open: {openCount}</div>
      <div className="summary-card">Resolved: {resolvedCount}</div>
      <div className="summary-card">High Priority: {highPriority}</div>
    </div>
  );
}

export default React.memo(SummaryCards);
