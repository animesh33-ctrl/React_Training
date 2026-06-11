import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Admin from "./components/Admin";
import Tests from "./components/Tests";
import NotFound from "./components/NotFound";
import Axios from "./components/Axios";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: (
          <div>
            <Courses />
          </div>
        ),
      },
      {
        path: "admin",
        element: (
          <div>
            <Admin />
          </div>
        ),
      },
      {
        path: "tests",
        element: (
          <div>
            <Tests />
          </div>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <NotFound />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <Axios />
    </div>
  );
};

export default App;
export { route };
