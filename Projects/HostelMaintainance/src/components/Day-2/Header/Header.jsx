import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../store/AuthContextObject";

const Header = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  console.log(user);
  console.log(isAuthenticated);

  return (
    <div className="relative w-full h-15 bg-blue-900 rounded-b-lg flex items-center">
      <div className="w-[25vw] h-full text-white flex items-center justify-center">
        <h4 className="text-2xl pb-2 font-bold font-mono">
          Smart Hostel Management System
        </h4>
      </div>

      <Navbar />

      {isAuthenticated && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-blue-900 font-semibold px-4 py-1 rounded-full text-sm">
          {user.role === "admin" ? "Admin" : "Student"}
        </span>
      )}
    </div>
  );
};

export default Header;
