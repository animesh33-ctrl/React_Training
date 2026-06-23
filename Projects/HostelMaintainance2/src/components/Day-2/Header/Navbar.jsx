import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContextObject";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const linkBase = {
    padding: "6px 16px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: 500,
    transition: "all 0.2s",
    border: "1px solid transparent",
    color: "#94A3B8",
    textDecoration: "none",
    display: "inline-block",
  };

  const activeStyle = {
    ...linkBase,
    background: "#F59E0B18",
    color: "#F59E0B",
    border: "1px solid #F59E0B44",
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-2">
      {isAuthenticated ? (
        <>
          <NavLink
            to={user.role === "admin" ? "/admin-dashboard" : "/student-dashboard"}
            style={({ isActive }) => (isActive ? activeStyle : linkBase)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/create-request"
            style={({ isActive }) => (isActive ? activeStyle : linkBase)}
          >
            New Request
          </NavLink>
          <button
            onClick={handleLogout}
            className="cursor-pointer"
            style={{
              ...linkBase,
              background: "#EF444418",
              color: "#EF4444",
              border: "1px solid #EF444433",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/signup"
            style={({ isActive }) => (isActive ? activeStyle : linkBase)}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : linkBase)}
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
