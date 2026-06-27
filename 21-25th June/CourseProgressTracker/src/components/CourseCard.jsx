import { FaIndianRupeeSign } from "react-icons/fa6";
import img from "../assests/image.png";

const getColor = (category) => {
  switch (category) {
    case "Frontend":
      return "bg-sky-500/20 text-sky-400 border border-sky-500/40";
    case "Backend":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
    case "Database":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/40";
    case "Programming":
      return "bg-rose-500/20 text-rose-400 border border-rose-500/40";
    case "DevOps":
      return "bg-orange-500/20 text-orange-400 border border-orange-500/40";
    case "Mobile":
      return "bg-purple-500/20 text-purple-400 border border-purple-500/40";
    case "AI/ML":
      return "bg-pink-500/20 text-pink-400 border border-pink-500/40";
    case "Security":
      return "bg-red-500/20 text-red-400 border border-red-500/40";
    default:
      return "bg-slate-500/20 text-slate-400 border border-slate-500/40";
  }
};

const CourseCard = ({ course, onClick }) => {
  return (
    <div
      className="w-64 shrink-0 border border-violet-500/60 rounded-2xl
             bg-slate-800/70 backdrop-blur-sm hover:scale-105 hover:-translate-y-1
             hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/20
             transition duration-300"
    >
      <div className="w-full">
        <img className="rounded-2xl w-full object-cover p-1" src={img} alt="" />
      </div>
      <h2 className="italic ml-2 font-bold text-slate-100 text-xl">
        {course.name}
      </h2>
      <div className="ml-2 mr-2 mt-1 mb-3">
        <div className="flex justify-between items-center">
          <p className="flex items-center text-amber-400 font-semibold">
            <FaIndianRupeeSign />
            {course.price.toLocaleString("en-IN")}
          </p>
          <p
            className={`px-2 py-0.5 text-sm rounded-lg ${getColor(course.category)}`}
          >
            {course.category}
          </p>
        </div>
        <p className="mt-1">
          <span
            className={`${
              course.isAssigned
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
            } rounded-lg px-2 py-0.5 text-sm`}
          >
            {course.isAssigned ? "Assigned" : "Not Assigned"}
          </span>
        </p>
        <div className="flex gap-2 mt-3">
          <button
            disabled={course.isAssigned}
            onClick={() => onClick(course, "buy")}
            className="outline-none bg-violet-600 hover:bg-violet-500 active:bg-violet-700
                disabled:bg-violet-900 disabled:text-violet-600 disabled:opacity-50 
                px-4 py-2 rounded-xl text-white font-medium transition-colors duration-150"
          >
            Buy Course
          </button>
          <button
            disabled={!course.isAssigned}
            onClick={() => onClick(course, "remove")}
            className="outline-none bg-rose-600/20 hover:bg-rose-600/40 active:bg-rose-700/50
                disabled:bg-transparent disabled:text-rose-900 disabled:border-rose-900/40 disabled:opacity-50
                border border-rose-500/40 px-4 py-2 rounded-xl text-rose-400 font-medium transition-colors duration-150"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
