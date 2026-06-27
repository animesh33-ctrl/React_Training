import Home from "./pages/Home";
import "./App.css";
import AssignedCourses from "./pages/AssignedCourses";

const App = () => {
  return (
    <div className="text-white flex flex-col items-center overflow-x-hidden">
      <h1 className="text-4xl font-bold font-mono pt-8 mb-10 bg-linear-to-r from-violet-400 to-indigo-600 bg-clip-text text-transparent">
        Welcome to Learning Courses
      </h1>
      <Home />
      <AssignedCourses />
    </div>
  );
};

export default App;
