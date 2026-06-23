import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../store/AuthContextObject";

const Header = () => {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <div
      className="w-full h-16 flex items-center justify-between px-6"
      style={{
        background: "#0F172A",
        borderBottom: "1px solid #1E293B",
        boxShadow: "0 1px 0 #F59E0B22",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-black"
          style={{ background: "#F59E0B", color: "#0F172A" }}
        >
          H
        </div>
        <div>
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: "#F1F5F9" }}
          >
            Hostel
          </span>
          <span
            className="text-base font-bold tracking-tight ml-1"
            style={{ color: "#F59E0B" }}
          >
            Maintenance
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Navbar />
        {isAuthenticated && user && (
          <span
            className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
            style={{
              background: user.role === "admin" ? "#F59E0B22" : "#3B82F622",
              color: user.role === "admin" ? "#F59E0B" : "#60A5FA",
              border: `1px solid ${user.role === "admin" ? "#F59E0B44" : "#3B82F644"}`,
            }}
          >
            {user.role}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
