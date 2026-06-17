import { memo } from "react";

const Card = ({ item, handleResolve }) => {
  console.log("Card: ", item.id);
  const isResolved = item.status === "resolved";
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white/40 p-6 shadow-sm hover:scale-[1.05] transition duration-300">
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <span className="text-2xl font-bold text-blue-600">#{item.id}</span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-1 text-lg text-slate-500">{item.description}</p>

          <div className="mt-4 flex items-center gap-3 text-base text-slate-400">
            <span>{item.date}</span>
            <span>•</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>

      <div className="ml-2">
        {isResolved ? (
          <button
            className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-6 py-3 font-semibold text-green-700"
            disabled
          >
            <span>✅</span>
            Resolved
          </button>
        ) : (
          <button
            className="bg-blue-600 rounded-xl  px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-900 hover:text-green-500 cursor-pointer"
            onClick={() => {
              handleResolve(item.id);
            }}
          >
            Mark as Resolved
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
