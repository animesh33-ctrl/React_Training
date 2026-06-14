import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is needed"),
    email: Yup.string().required("Email is needed"),
    roomNumber: Yup.string().required("Room Number is needed"),
    password: Yup.string()
      .min(6, "Password Must be at least 6 characters")
      .required("Password is needed"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Should be same as Password"),
  });

  const getNextId = async () => {
    const response = await axios.get("http://localhost:3000/users");
    const maxId = Math.max(...response.data.map((user) => Number(user.id)));
    return maxId + 1;
  };

  const handleOnSubmit = async (values, { resetForm }) => {
    const nextId = await getNextId();

    const { confirm, ...userData } = values;

    const newValue = {
      id: String(nextId),
      ...userData,
      role: "student",
    };

    await axios.post("http://localhost:3000/users", newValue);

    resetForm();
    navigate("/login");
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none " +
    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 " +
    "placeholder:text-gray-400";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-1">
            Register to raise maintenance requests
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            roomNumber: "",
            password: "",
            confirm: "",
          }}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter name..."
                    name="name"
                    id="name"
                    className={inputClass}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm italic"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <Field
                    type="email"
                    placeholder="Enter email..."
                    name="email"
                    id="email"
                    className={inputClass}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm italic"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="roomNumber"
                  className="text-sm font-semibold text-gray-700"
                >
                  Room Number<span className="text-red-500 ml-0.5">*</span>
                </label>
                <Field
                  type="text"
                  placeholder="Enter room number..."
                  name="roomNumber"
                  id="roomNumber"
                  className={inputClass}
                />
                <ErrorMessage
                  name="roomNumber"
                  component="p"
                  className="text-red-500 text-sm italic"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <Field
                    type="password"
                    placeholder="Enter password..."
                    name="password"
                    id="password"
                    className={inputClass}
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm italic"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="confirm"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Confirm Password
                    <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <Field
                    type="password"
                    placeholder="Confirm password..."
                    name="confirm"
                    id="confirm"
                    className={inputClass}
                  />
                  <ErrorMessage
                    name="confirm"
                    component="p"
                    className="text-red-500 text-sm italic"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg
                  hover:bg-blue-700 active:scale-[0.98] transition-all duration-200
                  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-500 mt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
