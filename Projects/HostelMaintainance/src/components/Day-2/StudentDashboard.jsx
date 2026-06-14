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
  const latest = myRequests[myRequests.length - 1];

  const cards = [
    { title: "My Requests", value: myRequests.length, color: "bg-blue-600" },
    { title: "Open", value: open, color: "bg-red-500" },
    { title: "Resolved", value: resolved, color: "bg-green-600" },
  ];

  return (
    <div className="w-full m-3 pl-9 pt-7 bg-white/20 rounded-2xl backdrop-blur-3xl pb-8">
      <h1 className="text-4xl font-bold">Student Dashboard</h1>

      <div className="flex gap-6 flex-wrap gap-x-9 mt-5">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-xl shadow-md border border-gray-200 w-60 flex overflow-hidden"
          >
            <div className={`w-2 ${c.color}`}></div>
            <div className="p-4 flex flex-col justify-center">
              <h5 className="text-gray-500 text-sm">{c.title}</h5>
              <p className="text-3xl font-bold text-gray-800">{c.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/create-request")}
        className="mt-5 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
      >
        + Create Request
      </button>

      {latest && (
        <div className="mt-5 p-4 bg-white rounded-xl border border-gray-200 max-w-md">
          <p className="font-semibold">Latest Request: {latest.title}</p>
          <p className="text-sm text-gray-500">
            {latest.category} • Status: {latest.status}
          </p>
        </div>
      )}

      <div className="mt-7">
        <RequestList requestsOverride={myRequests} />
      </div>
    </div>
  );
};

export default StudentDashboard;
