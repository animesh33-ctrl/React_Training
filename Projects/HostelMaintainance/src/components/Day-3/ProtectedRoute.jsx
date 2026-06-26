import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./store/AuthContextObject";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedRole && user.role !== allowedRole)
    return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
