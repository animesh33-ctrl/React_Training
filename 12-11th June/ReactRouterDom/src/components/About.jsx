import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      About Page
      <button onClick={handleClick}>Move to DashBoard</button>
    </div>
  );
};

export default About;
