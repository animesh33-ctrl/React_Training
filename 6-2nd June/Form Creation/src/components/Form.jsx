import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirm) {
      const newData = [
        ...data,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      ];

      setData(newData);

      alert("Submitted Data Successfully");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirm: "",
      });
    } else {
      alert("Mismatch between password and confirm password!!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(135deg,#312e81,#6d28d9,#db2777)] px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
        <form id="myForm" onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-3xl font-bold text-center text-white tracking-wide mb-6">
            Register
          </h2>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-gray-300
                outline-none
                focus:ring-2
                focus:ring-indigo-400
                transition
              "
            />
          </div>

          {/* Email  */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-gray-300
                outline-none
                focus:ring-2
                focus:ring-indigo-400
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-gray-300
                outline-none
                focus:ring-2
                focus:ring-indigo-400
                transition
              "
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              value={formData.confirm}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder:text-gray-300
                outline-none
                focus:ring-2
                focus:ring-indigo-400
                transition
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              font-semibold
              py-3
              rounded-xl
              shadow-lg
              transition
              duration-300
              hover:scale-[1.02]
              mt-4
              cursor-pointer
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
