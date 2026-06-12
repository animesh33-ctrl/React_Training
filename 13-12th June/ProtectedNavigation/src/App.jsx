import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ValidateUser from "./components/ValidateUser";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import NotFound from "./components/NotFound";

export const r = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin",
        element: (
          <ValidateUser>
            <AdminDashboard />
          </ValidateUser>
        ),
      },
      { path: "user", element: <UserDashboard /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchusers();
  }, []);

  async function fetchusers() {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  }
  return (
    <div>
      <NavLink to="/home">Home</NavLink> <br />
      <NavLink to="/about">About</NavLink> <br />
      {/* <NavLink to="/contact">Contact</NavLink> <br /> */}
      <NavLink to="/dashboard">Dashboard</NavLink> <br />
      <NavLink to="/login">Login</NavLink> <br />
      {users &&
        users.map((u) => {
          return (
            <ul key={u.id}>
              <li>{u.name}</li>
              <li>{u.username}</li>
              <li>{u.email}</li>
              <li>{u.address.street}</li>
            </ul>
          );
        })}
    </div>
  );
}
