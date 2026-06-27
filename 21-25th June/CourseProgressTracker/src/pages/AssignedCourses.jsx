import { myCourses } from "../store/courseStore";
import "../App.css";
import AssignedCourseCard from "../components/AssignedCourseCard";

const progressOrder = { "Not Started": 0, "In Progress": 1, Completed: 2 };

const AssignedCourses = () => {
  const { coursesAssigned: courses, toggleProgress } = myCourses();
  courses.sort((a, b) => progressOrder[a.progress] - progressOrder[b.progress]);
  const handleMarking = (course, curr) => {
    toggleProgress(course, curr);
  };
  console.log(courses);
  return (
    <div className="w-[90vw] bg-slate-900/60 border border-slate-700/50 rounded-2xl flex justify-center  backdrop-blur-sm mt-12 mb-12">
      {courses.length === 0 ? (
        <h2 className="text-slate-400 p-8">No Courses Available</h2>
      ) : (
        <div className="w-[90vw]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl p-4 text-slate-300 font-medium tracking-wide">
              Total Assigned Courses:{" "}
              <span className="text-violet-400 font-bold">
                {courses.length}
              </span>
            </h3>
            <h3 className="self-start pl-4 text-white text-2xl ">
              Assigned Courses {">"}
            </h3>
            <div className="course-slider flex gap-4 overflow-x-auto w-full px-4 py-4 scroll-smooth">
              {courses.map((course) => (
                <AssignedCourseCard
                  key={course.id}
                  course={course}
                  handleMarking={handleMarking}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedCourses;
