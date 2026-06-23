import { useContext, useState } from "react";
import { RequestContext } from "./store/RequestContextObject";
import SearchBar from "./SearchBar";
import AdminSummary from "./AdminSummary";
import { useMemo } from "react";
import AdminChart from "./AdminChart";

const statusOptions = ["Open", "In Progress", "Resolved"];

const AdminDashboard = () => {
  const { filteredRequests: requests, updateStatus } = useContext(RequestContext);
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const metrics = useMemo(() => {
    return requests.reduce(
      (acc, req) => {
        acc.total++;
        if (req.status === "Open") acc.open++;
        if (req.status === "In Progress") acc.inProgress++;
        if (req.status === "Resolved") acc.resolved++;
        return acc;
      },
      { total: 0, open: 0, inProgress: 0, resolved: 0 },
    );
  }, [requests]);

  const groupByCategory = useMemo(() => {
    return requests.reduce((acc, req) => {
      const found = acc.find((a) => a.name === req.category);
      if (found) found.value++;
      else acc.push({ name: req.category, value: 1 });
      return acc;
    }, []);
  }, [requests]);

  const handleUpdate = async (id) => {
    if (!newStatus) return;
    await updateStatus(id, newStatus);
    setEditingId(null);
    setNewStatus("");
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High": return { background: "#EF444420", color: "#EF4444", border: "1px solid #EF444440" };
      case "Medium": return { background: "#EAB30820", color: "#EAB308", border: "1px solid #EAB30840" };
      case "Low": return { background: "#64748B20", color: "#94A3B8", border: "1px solid #64748B40" };
      default: return {};
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open": return { background: "#EF444420", color: "#EF4444", border: "1px solid #EF444440" };
      case "In Progress": return { background: "#EAB30820", color: "#EAB308", border: "1px solid #EAB30840" };
      case "Resolved": return { background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E40" };
      default: return {};
    }
  };

  return (
    <div className="px-3 pt-7 pb-8">
      <div className="mb-6 px-3">
        <h1 className="text-3xl font-bold" style={{ color: "#F1F5F9" }}>Admin Dashboard</h1>
        <p className="text-sm mt-1" style={{ color: "#64748B" }}>Manage and update maintenance requests</p>
      </div>

      <AdminSummary metrics={metrics} />

      <div className="flex justify-center flex-wrap gap-x-4 px-3">
        <div className="sm:min-w-[45vw] min-w-full mb-3">
          <SearchBar />
        </div>
        <AdminChart categories={groupByCategory} />
      </div>

      <div
        className="rounded-xl overflow-hidden mx-3"
        style={{ background: "#1E293B", border: "1px solid #334155" }}
      >
        <div
          className="px-4 py-3 flex items-center"
          style={{ borderBottom: "1px solid #334155", background: "#0F172A" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
            All Requests
          </p>
          <span
            className="ml-2 text-xs px-2 py-0.5 rounded-full"
            style={{ background: "#334155", color: "#94A3B8" }}
          >
            {requests.length}
          </span>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr style={{ borderBottom: "1px solid #334155" }}>
              {["Complaint", "Category", "Room", "Priority", "Status", "Action"].map((h) => (
                <th
                  key={h}
                  className="p-3 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#64748B" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((r, i) => (
              <tr
                key={r.id}
                style={{
                  borderBottom: i < requests.length - 1 ? "1px solid #334155" : "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#263449")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td className="p-3 text-sm" style={{ color: "#F1F5F9", fontWeight: 500 }}>{r.title}</td>
                <td className="p-3 text-sm" style={{ color: "#94A3B8" }}>{r.category}</td>
                <td className="p-3 text-xs" style={{ color: "#94A3B8", fontFamily: "JetBrains Mono, monospace" }}>
                  {r.roomNumber}
                </td>
                <td className="p-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={getPriorityStyle(r.priority)}
                  >
                    {r.priority}
                  </span>
                </td>
                <td className="p-3">
                  {editingId === r.id ? (
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      style={{
                        background: "#0F172A",
                        border: "1px solid #F59E0B",
                        borderRadius: "6px",
                        color: "#F1F5F9",
                        padding: "4px 8px",
                        fontSize: "0.8rem",
                        outline: "none",
                      }}
                    >
                      <option value="">Select</option>
                      {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  ) : (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={getStatusStyle(r.status)}
                    >
                      {r.status}
                    </span>
                  )}
                </td>
                <td className="p-3">
                  {editingId === r.id ? (
                    <button
                      onClick={() => handleUpdate(r.id)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer"
                      style={{ background: "#22C55E20", color: "#22C55E", border: "1px solid #22C55E40" }}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => { setEditingId(r.id); setNewStatus(r.status); }}
                      className="px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all"
                      style={{ background: "#F59E0B18", color: "#F59E0B", border: "1px solid #F59E0B44" }}
                    >
                      Update
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
