import CourseCard from "../components/CourseCard";
import { courseStore, myCourses } from "../store/courseStore";
import "../App.css";

const Home = () => {
  const { courses, assignCourse, removeCourse } = courseStore();
  const { addCourses } = myCourses();

  const handleClick = (course, mode) => {
    switch (mode) {
      case "buy":
        assignCourse(course);
        addCourses({ ...course, progress: "Not Started" });
        break;
      case "remove":
        removeCourse(course);
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-[90vw] bg-slate-900/60 border border-slate-700/50 rounded-2xl flex justify-center overflow-hidden backdrop-blur-sm">
      {courses.length === 0 ? (
        <h2 className="text-slate-400 p-8">No Courses Available</h2>
      ) : (
        <div className="w-[90vw]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl p-4 text-slate-300 font-medium tracking-wide">
              Total Courses Available:{" "}
              <span className="text-violet-400 font-bold">
                {courses.length}
              </span>
            </h3>
            <h3 className="self-start pl-4 text-white text-2xl ">
              Courses {">"}
            </h3>
            <div className="course-slider flex gap-4 overflow-x-auto overflow-y-hidden w-full px-4 py-4 scroll-smooth">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
