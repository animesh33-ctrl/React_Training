import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../store/AuthContextObject";

const Header = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="w-full h-15 bg-blue-900 rounded-b-lg flex items-center justify-between px-6">
      <div className="flex items-center ">
        <h4 className=" text-xl font-bold font-mono text-white">
          Smart Hostel Management System
        </h4>
      </div>

      <div className="flex items-center gap-x-4">
        <Navbar />
        {isAuthenticated && user && (
          <span className="bg-white text-white font-semibold px-4 py-1 rounded-full text-sm max-w-2xl shadow-sm">
            {user.role === "admin" ? "ADMIN" : "STUDENT"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
