import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../store/AuthContextObject";

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  background: "#0F172A",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#F1F5F9",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

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
    navigate(userData.role === "admin" ? "/admin-dashboard" : "/student-dashboard");
    resetForm();
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div
        className="w-full max-w-md p-8 rounded-2xl"
        style={{
          background: "#1E293B",
          border: "1px solid #334155",
          boxShadow: "0 0 40px #F59E0B08",
        }}
      >
        <div className="mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black mb-4"
            style={{ background: "#F59E0B", color: "#0F172A" }}
          >
            H
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "#F1F5F9" }}>
            Welcome back
          </h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>
            Sign in to access your dashboard
          </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Email <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="you@hostel.edu"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#F59E0B")}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                />
                <ErrorMessage name="email" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Password <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#F59E0B")}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                />
                <ErrorMessage name="password" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-3 font-semibold rounded-lg cursor-pointer transition-all duration-200"
                style={{
                  background: isValid ? "#F59E0B" : "#334155",
                  color: isValid ? "#0F172A" : "#64748B",
                  border: "none",
                  marginTop: "4px",
                  opacity: 1,
                  cursor: !isValid ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Signing in…" : "Sign In"}
              </button>

              <p className="text-center text-sm" style={{ color: "#64748B" }}>
                No account?{" "}
                <Link to="/signup" style={{ color: "#F59E0B", fontWeight: 600 }}>
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
