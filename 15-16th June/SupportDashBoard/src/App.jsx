import { useState } from "react";
import { tickets } from "./components/store/tickets";
import Header from "./components/Header/Header";
import TicketCard from "./components/TicketCard";
import Card from "./components/Card";
import { useCallback } from "react";
const App = () => {
  const [requests, setRequests] = useState(tickets);
  const resolvedCount = requests.filter(
    (ticket) => ticket.status === "resolved",
  ).length;
  const ticketItem = [
    {
      title: "Total Tickets",
      number: requests.length,
      bgColor: "bg-white/60",
    },
    {
      title: "Resolved",
      number: resolvedCount,
      bgColor: "bg-green-100",
    },
  ];

  const handleResolve = useCallback((id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
              status: "resolved",
            }
          : req,
      ),
    );
  }, []);

  console.log("App re-rendered!!");
  return (
    <div className="bg-linear-to-br from-violet-300 via-pink-300 to-amber-300 min-h-screen min-w-screen">
      <Header />
      <div className="flex flex-col flex-wrap items-center">
        <div className="mt-6 flex justify-center items-center gap-x-15 w-[40vw] h-28 bg-white/40 rounded-2xl mb-5">
          {ticketItem.map((item) => (
            <TicketCard key={item.title} item={item} />
          ))}
        </div>
        <div className="space-y-6 mb-9">
          {requests.map((item) => (
            <Card key={item.id} item={item} handleResolve={handleResolve} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
