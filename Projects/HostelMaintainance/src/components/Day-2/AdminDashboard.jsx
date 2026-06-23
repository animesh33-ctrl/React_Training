import { useContext, useState } from "react";
import { RequestContext } from "./store/RequestContextObject";
import SearchBar from "./SearchBar";
import AdminSummary from "./AdminSummary";
import { useMemo } from "react";
import AdminChart from "./AdminChart";

const statusOptions = ["Open", "In Progress", "Resolved"];

const AdminDashboard = () => {
  const { filteredRequests: requests, updateStatus } =
    useContext(RequestContext);
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const nothing = () => <h4 className="pl-4">No Data to Show</h4>;
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

  // console.log(requests);

  const handleUpdate = async (id) => {
    if (!newStatus) return;
    await updateStatus(id, newStatus);
    setEditingId(null);
    setNewStatus("");
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500 text-white border-blue-200";
      case "Medium":
        return "bg-amber-300 text-black/80 border-sky-200";
      case "Low":
        return "bg-green-500 text-indigo-700 border-gray-200";
      default:
        return "";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-500 text-red-50 border-red-200";
      case "In Progress":
        return "bg-yellow-200 text-yellow-700 border-yellow-200";
      case "Resolved":
        return "bg-green-700 text-green-200 border-green-200";
      default:
        return "";
    }
  };

  return (
    <div className="w-full m-3 pl-3 pt-7 bg-white/30 rounded-2xl backdrop-blur-3xl pb-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 underline font-serif">
        Admin Dashboard
      </h1>

      <AdminSummary metrics={metrics} />

      <div className="flex justify-center flex-wrap gap-x-7">
        <SearchBar />
        <AdminChart categories={groupByCategory} />
      </div>

      <div className="w-[90%] bg-white/40 rounded-2xl overflow-hidden border border-indigo-500 mx-auto my-5 ">
        <table className="w-full text-center table-fixed">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="p-3">Complaint</th>
              <th className="p-3">Category</th>
              <th className="p-3">Room</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-blue-100">
            {requests.length === 0 ? (
              <tr>
                <td colSpan={6}>{nothing()}</td>
              </tr>
            ) : (
              requests.map((r) => (
                <tr key={r.id} className="border-t border-indigo-500">
                  <td className="p-3">{r.title}</td>
                  <td className="p-3">{r.category}</td>

                  <td className="p-3">{r.roomNumber}</td>
                  <td>
                    <span
                      className={`${getPriorityStyle(r.priority)} inline-block h-9 w-20 pt-1 rounded-lg`}
                    >
                      {r.priority}
                    </span>
                  </td>
                  <td className="p-3">
                    {editingId === r.id ? (
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="border border-gray-400 rounded p-1"
                      >
                        <option value="">Select</option>
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className={`${getStatusStyle(r.status)} inline-block h-9 w-23 pt-1 rounded-lg`}
                      >
                        {r.status}
                      </span>
                    )}
                  </td>
                  <td className="p-3">
                    {editingId === r.id ? (
                      <button
                        onClick={() => handleUpdate(r.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-700"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingId(r.id);
                          setNewStatus(r.status);
                        }}
                        className="px-3 py-1 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-500 hover:scale-[1.05] transition duration-300"
                      >
                        Update
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
