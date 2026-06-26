import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContextObject";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const design = `relative inline-block p-2 px-5 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition duration-300 hover:scale-[1.05]
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-2 after:h-[2px] after:w-full after:bg-white after:scale-x-0
  after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-70 `;

  const active = `relative inline-block p-2 px-5 bg-green-600 rounded-xl transition duration-300 hover:bg-green-700 hover:scale-[1.05]
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-2 after:h-[2px] after:w-full after:bg-black/80 after:scale-x-70 text-black/80`;

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
