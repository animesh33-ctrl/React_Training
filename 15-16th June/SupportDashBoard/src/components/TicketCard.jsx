import { memo } from "react";

const TicketCard = ({ item }) => {
  console.log("Ticket Card: ", item.title);
  return (
    <div className={`${item.bgColor} p-4 px-8 rounded-2xl w-45 min-h-20`}>
      <h3 className="font-mono">{item.title}</h3>
      <p
        className={`${item.bgColor.includes("green") ? "text-green-700" : "text-blue-700"} font-bold`}
      >
        {item.number}
      </p>
    </div>
  );
};

export default memo(TicketCard);
