import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Login from "./Login";
import SignUp from "./SignUp";
import MForm from "../MForm";
import StudentDashboard from "../StudentDashboard";
import AdminDashboard from "../AdminDashboard";
import ProtectedRoute from "../ProtectedRoute";
import RequestList from "../RequestList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "student-dashboard",
        element: (
          <ProtectedRoute allowedRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin-dashboard",
        element: (
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-request",
        element: (
          <ProtectedRoute>
            <MForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "request/:id",
        element: (
          <ProtectedRoute>
            <RequestList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export { routes };
