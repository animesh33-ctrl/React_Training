import React, { useState } from "react";

const Form = ({ handleData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleData(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={formData.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            required
            value={formData.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            required
            value={formData.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your password again"
            name="confirm"
            required
            value={formData.confirm}
            onChange={handleInput}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
