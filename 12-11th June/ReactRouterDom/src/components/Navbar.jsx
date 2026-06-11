import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
const Navbar = () => {
  const getClassnames = ({ isActive }) => {
    return isActive ? "curr-active" : "";
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink
            caseSensitive
            to="/"
            className={getClassnames}
            // writing the active as a function because Navlink internally calls the function to pass the values
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            caseSensitive
            to="/dashboard"
            className={({ isActive }) => (isActive ? "curr-active" : "")}
          >
            {" "}
            Dashboard Page
          </NavLink>
        </li>
        <li>
          <NavLink
            caseSensitive
            to="/about"
            className={({ isActive }) => (isActive ? "curr-active" : "")}
          >
            {" "}
            About Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
