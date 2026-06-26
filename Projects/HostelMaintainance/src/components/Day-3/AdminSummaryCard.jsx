import { memo } from "react";

const AdminSummaryCard = ({ label, value, bg, border }) => {
  //   console.log(label, value, bg, border);
  return (
    <div
      className={`bg-gray-200 shadow-xl border-2 ${border} min-w-45 min-h-18 rounded-r-2xl flex`}
    >
      <div className={`${bg} w-2`}></div>
      <div className="flex flex-col gap-y-2 pl-3">
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default memo(AdminSummaryCard);
