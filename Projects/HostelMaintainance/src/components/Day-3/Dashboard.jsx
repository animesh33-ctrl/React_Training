import { useContext } from "react";
import { RequestContext } from "./store/RequestContextObject";

const Dashboard = () => {
  const { requests } = useContext(RequestContext);

  const total = requests.length;

  const open = requests.filter(
    (r) => r.status.toLowerCase() === "Open".toLowerCase(),
  ).length;

  const inProgress = requests.filter(
    (r) => r.status.toLowerCase() === "In Progress".toLowerCase(),
  ).length;

  const resolved = requests.filter(
    (r) => r.status.toLowerCase() === "Resolved".toLowerCase(),
  ).length;

  const trackingData = [
    { title: "Total Requests", value: total, color: "bg-blue-600" },
    { title: "Open", value: open, color: "bg-red-500" },
    { title: "In Progress", value: inProgress, color: "bg-yellow-500" },
    { title: "Resolved", value: resolved, color: "bg-green-600" },
  ];

  console.log("DashBoard");

  return (
    <div className="w-full m-3 pl-9 pt-7 bg-white/20 rounded-2xl backdrop-blur-3xl pb-8 ">
      <h1 className="text-4xl font-bold">Hostel Maintenance Dashboard</h1>
      <p className="text-lg italic mb-7">
        Raise Complaints,track status and filter requests
      </p>
      <div className="flex gap-6 flex-wrap gap-x-9">
        {trackingData.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-md border border-gray-200 w-60 flex overflow-hidden"
          >
            <div className={`w-2 ${item.color}`}></div>

            <div className="p-4 flex flex-col justify-center">
              <h5 className="text-gray-500 text-sm">{item.title}</h5>

              <p className="text-3xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
