import { useContext, useState } from "react";
import { RequestContext } from "./store/RequestContextObject";

const statusOptions = ["Open", "In Progress", "Resolved"];

const AdminDashboard = () => {
  const { requests, updateStatus } = useContext(RequestContext);
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const handleUpdate = async (id) => {
    if (!newStatus) return;
    await updateStatus(id, newStatus);
    setEditingId(null);
    setNewStatus("");
  };

  return (
    <div className="w-full m-3 pl-9 pt-7 bg-white/20 rounded-2xl backdrop-blur-3xl pb-8">
      <h1 className="text-4xl font-bold mb-5">Admin Dashboard</h1>

      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Complaint</th>
              <th className="p-3">Room</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-t border-gray-200">
                <td className="p-3">{r.title}</td>
                <td className="p-3">{r.roomNumber}</td>
                <td className="p-3">{r.priority}</td>
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
                    r.status
                  )}
                </td>
                <td className="p-3">
                  {editingId === r.id ? (
                    <button
                      onClick={() => handleUpdate(r.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingId(r.id);
                        setNewStatus(r.status);
                      }}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer"
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
