import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout"; 
import Login from "./Login";
import SignUp from "./SignUp";
import MForm from "../MForm";
import StudentDashboard from "../StudentDashboard";
import AdminDashboard from "../AdminDashboard";
import RequestDetails from "../RequestDetails";
import ProtectedRoute from "../ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "student-dashboard",
        element: <ProtectedRoute allowedRole="student"><StudentDashboard /></ProtectedRoute>,
      },
      {
        path: "admin-dashboard",
        element: <ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>,
      },
      {
        path: "create-request",
        element: <ProtectedRoute><MForm /></ProtectedRoute>,
      },
      {
        path: "request/:id",
        element: <ProtectedRoute><RequestDetails /></ProtectedRoute>,
      },
    ],
  },
]);

export { routes };