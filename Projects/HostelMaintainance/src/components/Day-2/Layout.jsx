import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import RequestContextProvider from "./store/RequestContext";
import AuthContextProvider from "./store/AuthContext";

const Layout = () => {
  console.log("Layout");
  return (
    <AuthContextProvider>
      <RequestContextProvider>
        <div className="min-h-screen w-screen bg-gray-500 overflow-hidden">
          <Header />
          <Outlet />
        </div>
      </RequestContextProvider>
    </AuthContextProvider>
  );
};

export default Layout;
