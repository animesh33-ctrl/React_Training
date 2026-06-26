import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../store/AuthContextObject";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is needed"),
    password: Yup.string()
      .min(6, "Password Must be at least 6 characters")
      .required("Password is needed"),
  });

  const handleOnSubmit = async (values, { resetForm, setFieldError }) => {
    const res = await axios.get(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`,
    );
    if (res.data.length === 0) {
      setFieldError("password", "Invalid email or password");
      return;
    }
    const userData = res.data[0];
    login(userData);
    navigate(
      userData.role === "admin" ? "/admin-dashboard" : "/student-dashboard",
    );
    resetForm();
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Sign in to access your dashboard</p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Email<span className="text-red-500 ml-0.5">*</span>
                </label>
                <Field
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  id="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200
                    placeholder:text-gray-400"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm italic"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password<span className="text-red-500 ml-0.5">*</span>
                </label>
                <Field
                  type="password"
                  placeholder="Enter your password..."
                  name="password"
                  id="password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200
                    placeholder:text-gray-400"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm italic"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg
                  hover:bg-blue-700 active:scale-[0.98] transition-all duration-200
                  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-center text-sm text-gray-500 mt-2">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
