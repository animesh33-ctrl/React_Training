import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContextObject";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const design =
    "p-2 bg-indigo-400 rounded-xl px-5 hover:bg-indigo-600 transition duration-300 hover:underline hover:scale-[1.05]";
  const active =
    "p-2 bg-green-300 rounded-xl px-5 hover:bg-green-600 transition duration-300 underline hover:scale-[1.05]";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-[70vw] h-full text-white flex justify-end items-center gap-x-6 ml-auto mr-5">
      {isAuthenticated ? (
        <>
          <NavLink
            to={
              user.role === "admin" ? "/admin-dashboard" : "/student-dashboard"
            }
            className={({ isActive }) => (isActive ? active : design)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/create-request"
            className={({ isActive }) => (isActive ? active : design)}
          >
            Create Request
          </NavLink>

          <button onClick={handleLogout} className={`${design} cursor-pointer`}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/signup"
            className={`({ isActive }) => (isActive ? active : design)`}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? active : design)}
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
