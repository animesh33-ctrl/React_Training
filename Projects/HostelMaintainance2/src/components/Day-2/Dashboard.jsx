import { useContext } from "react";
import { RequestContext } from "./store/RequestContextObject";

const Dashboard = () => {
  const { requests } = useContext(RequestContext);

  const total = requests.length;
  const open = requests.filter((r) => r.status.toLowerCase() === "open").length;
  const inProgress = requests.filter((r) => r.status.toLowerCase() === "in progress").length;
  const resolved = requests.filter((r) => r.status.toLowerCase() === "resolved").length;

  const trackingData = [
    { title: "Total", value: total, accent: "#3B82F6", bg: "#3B82F610" },
    { title: "Open", value: open, accent: "#EF4444", bg: "#EF444410" },
    { title: "In Progress", value: inProgress, accent: "#EAB308", bg: "#EAB30810" },
    { title: "Resolved", value: resolved, accent: "#22C55E", bg: "#22C55E10" },
  ];

  console.log("DashBoard");

  return (
    <div className="w-full px-6 pt-7 pb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold" style={{ color: "#F1F5F9" }}>
          Maintenance Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: "#64748B" }}>
          Raise complaints, track status and filter requests
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {trackingData.map((item) => (
          <div
            key={item.title}
            className="rounded-xl flex overflow-hidden"
            style={{
              background: "#1E293B",
              border: `1px solid #334155`,
              minWidth: "180px",
              boxShadow: `0 0 20px ${item.accent}10`,
            }}
          >
            <div style={{ width: "3px", background: item.accent, flexShrink: 0 }} />
            <div className="p-4 flex flex-col justify-center">
              <h5 className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#64748B" }}>
                {item.title}
              </h5>
              <p className="text-3xl font-black mt-1" style={{ color: item.accent, fontFamily: "JetBrains Mono, monospace" }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
