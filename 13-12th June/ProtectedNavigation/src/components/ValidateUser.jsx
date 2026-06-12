import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ValidateUser({ children }) {
  const navigate = useNavigate();
  const status = localStorage.getItem("loginstatus");
  if (status === null || status === "false") {
    return navigate("/login");
  } else {
    return children;
  }
}
