import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RequestContext } from "./store/RequestContextObject";

const RequestDetails = () => {
  const { id } = useParams();
  const { requests } = useContext(RequestContext);
  const request = requests.find((r) => String(r.id) === id);

  if (!request) {
    return (
      <div className="p-7">
        <h2 className="text-2xl font-bold">Request not found</h2>
        <Link to="/admin-dashboard" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  const rows = [
    ["Title", request.title],
    ["Description", request.description],
    ["Category", request.category],
    ["Room Number", request.roomNumber],
    ["Priority", request.priority],
    ["Status", request.status],
    ["Student", request.studentName],
    ["Created At", request.createdAt],
  ];

  return (
    <div className="w-full m-3 pl-9 pt-7 bg-white/20 rounded-2xl backdrop-blur-3xl pb-8">
      <h1 className="text-3xl font-bold mb-5">Request Details</h1>
      <div className="bg-white rounded-2xl border border-gray-200 max-w-xl p-5 space-y-2">
        {rows.map(([label, value]) => (
          <p key={label}>
            <span className="font-semibold">{label}:</span> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RequestDetails;
