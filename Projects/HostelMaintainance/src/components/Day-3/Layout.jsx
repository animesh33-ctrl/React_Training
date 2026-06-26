import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import RequestContextProvider from "./store/RequestContext";
import AuthContextProvider from "./store/AuthContext";

const Layout = () => {
  return (
    <AuthContextProvider>
      <RequestContextProvider>
        <div className="min-h-screen w-screen  overflow-hidden">
          <Header />
          <Outlet />
        </div>
      </RequestContextProvider>
    </AuthContextProvider>
  );
};

export default Layout;
