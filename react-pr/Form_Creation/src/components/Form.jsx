import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [data, setData] = useState([]);

  const handleOnChange = (event) => {
    console.log(event);
    let newData = { ...formData, [event.target.name]: event.target.value };
    setFormData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirm) {
      setData([
        ...data,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      ]);
      alert("Form Submiited Successfully");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm: "",
      });
    } else {
      alert("Password Mismatch!!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[linear-gradient(135deg,#312e81,#6d28d9,#db2777)] flex justify-center items-center flex-wrap">
      <div
        className="w-[90%] sm:w-[75%] md:w-[55%] xl:w-[28%] min-h-[60vh] bg-white/10 border border-white/20 rounded-3xl 
      flex flex-col items-center p-6 md:p-8 backdrop-blur-xl shadow-2xl"
      >
        <form id="myForm" className="space-y-3 w-full " onSubmit={handleSubmit}>
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold tracking-wide mt-7">
            Registration
          </h2>
          <div className="w-full      flex flex-col gap-2">
            <label
              className="text-base md:text-lg text-gray-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3
                text-white placeholder:text-gray-300 outline-none"
            />
          </div>
          <div className="w-full      flex flex-col gap-2">
            <label
              className="text-base md:text-lg text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3
                text-white placeholder:text-gray-300 outline-none"
            />
          </div>
          <div className="w-full      flex flex-col gap-2">
            <label
              className="text-base md:text-lg text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter your Password"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3
                text-white placeholder:text-gray-300 outline-none"
            />
          </div>
          <div className="w-full      flex flex-col gap-2">
            <label
              className="text-base md:text-lg text-gray-200"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={formData.confirm}
              onChange={handleOnChange}
              placeholder="Confirm your Password"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3
                text-white placeholder:text-gray-300 outline-none"
            />
          </div>
          <button
            className="w-full bg-indigo-500 py-3 rounded-xl hover:bg-indigo-700 hover:text-white transition duration-300 hover:-translate-y-1
                cursor-pointer hover:scale-[1.02] text-gray-100 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
