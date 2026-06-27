import { FaIndianRupeeSign } from "react-icons/fa6";
import img from "../assests/image.png";

const getColor = (progress) => {
  switch (progress) {
    case "Not Started":
      return "bg-red-500/20 text-red-400 border border-red-500/40";
    case "In Progress":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/40";
    case "Completed":
      return "bg-green-500/20 text-green-400 border border-green-500/40";
    default:
      return "bg-slate-500/20 text-slate-400 border border-slate-500/40";
  }
};

const getColorCategory = (category) => {
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

const AssignedCourseCard = ({ course, handleMarking }) => {
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
            className={`px-2 py-0.5 text-sm rounded-lg ${getColorCategory(course.category)}`}
          >
            {course.category}
          </p>
        </div>
        <p className="mt-1">
          <span
            className={`${getColor(course.progress)} rounded-lg px-2 py-0.5 text-sm`}
          >
            {course.progress}
          </span>
        </p>
        <div className="flex gap-2 mt-3">
          <button
            disabled={
              course.progress === "Completed" ||
              course.progress === "In Progress"
            }
            className={`${getColor("In Progress")} rounded-lg px-2 py-0.5 text-sm disabled:opacity-40`}
            onClick={() => {
              handleMarking(course, "In Progress");
            }}
          >
            Mark In Progress
          </button>
          <button
            disabled={course.progress === "Completed"}
            className={`${getColor("Completed")} rounded-lg px-2 py-0.5 text-sm disabled:opacity-40`}
            onClick={() => {
              handleMarking(course, "Completed");
            }}
          >
            Mark Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignedCourseCard;
