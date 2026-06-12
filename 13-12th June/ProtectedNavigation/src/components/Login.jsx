import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginstatus, setLoginStatus] = React.useState(false);

  function HandleLogin() {
    if (username === "admin" && password === "admin123") {
      alert("Login successful");
      localStorage.setItem("loginstatus", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
      localStorage.setItem("loginstatus", "false");
      setUsername("");
      setPassword("");
    }
  }
  return (
    <div>
      User Name
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      Password
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={HandleLogin}>Login</button>
    </div>
  );
}
