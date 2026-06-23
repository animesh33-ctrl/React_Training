import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RequestContext } from "./store/RequestContextObject";
import { AuthContext } from "./store/AuthContextObject";
import RequestList from "./RequestList";

const StudentDashboard = () => {
  const { requests } = useContext(RequestContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const myRequests = useMemo(
    () => requests.filter((r) => String(r.studentId) === String(user.id)),
    [requests, user.id],
  );

  const open = myRequests.filter((r) => r.status === "Open").length;
  const resolved = myRequests.filter((r) => r.status === "Resolved").length;

  const cards = [
    { title: "My Requests", value: myRequests.length, accent: "#3B82F6" },
    { title: "Open", value: open, accent: "#EF4444" },
    { title: "Resolved", value: resolved, accent: "#22C55E" },
  ];

  return (
    <div className="px-6 pt-7 pb-8">
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: "#F1F5F9" }}>
            Student Dashboard
          </h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>
            Room{" "}
            <span style={{ color: "#F59E0B", fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>
              {user.roomNumber || "—"}
            </span>{" "}
            · {user.name}
          </p>
        </div>
        <button
          onClick={() => navigate("/create-request")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
          style={{ background: "#F59E0B", color: "#0F172A", border: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#D97706")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F59E0B")}
        >
          + New Request
        </button>
      </div>

      <div className="flex gap-4 flex-wrap mb-8">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-xl flex overflow-hidden"
            style={{ background: "#1E293B", border: "1px solid #334155", minWidth: "160px" }}
          >
            <div style={{ width: "3px", background: c.accent, flexShrink: 0 }} />
            <div className="p-4 flex flex-col justify-center">
              <h5 className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#64748B" }}>
                {c.title}
              </h5>
              <p className="text-3xl font-black mt-1" style={{ color: c.accent, fontFamily: "JetBrains Mono, monospace" }}>
                {c.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <RequestList requestsOverride={myRequests} />
    </div>
  );
};

export default StudentDashboard;
