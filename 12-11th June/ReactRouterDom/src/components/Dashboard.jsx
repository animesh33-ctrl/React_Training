import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      <ul>
        <li>
          <NavLink to="/dashboard/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tests">Tests</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
