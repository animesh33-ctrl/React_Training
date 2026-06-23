import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

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
    const newValue = { id: String(nextId), ...userData, role: "student" };
    await axios.post("http://localhost:3000/users", newValue);
    resetForm();
    navigate("/login");
  };

  const Field_ = ({ name, label, type = "text", placeholder }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
        {label} <span style={{ color: "#EF4444" }}>*</span>
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = "#F59E0B")}
        onBlur={(e) => (e.target.style.borderColor = "#334155")}
      />
      <ErrorMessage name={name} component="p" className="text-xs" style={{ color: "#EF4444" }} />
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      <div
        className="w-full max-w-lg p-8 rounded-2xl"
        style={{ background: "#1E293B", border: "1px solid #334155", boxShadow: "0 0 40px #F59E0B08" }}
      >
        <div className="mb-8">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black mb-4"
            style={{ background: "#F59E0B", color: "#0F172A" }}
          >
            H
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "#F1F5F9" }}>
            Create account
          </h1>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>
            Register to raise maintenance requests
          </p>
        </div>

        <Formik
          initialValues={{ name: "", email: "", roomNumber: "", password: "", confirm: "" }}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field_ name="name" label="Full Name" placeholder="John Doe" />
                <Field_ name="email" label="Email" type="email" placeholder="you@hostel.edu" />
              </div>
              <Field_ name="roomNumber" label="Room Number" placeholder="A-204" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field_ name="password" label="Password" type="password" placeholder="••••••••" />
                <Field_ name="confirm" label="Confirm Password" type="password" placeholder="••••••••" />
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full py-3 font-semibold rounded-lg transition-all duration-200"
                style={{
                  background: isValid && !isSubmitting ? "#F59E0B" : "#334155",
                  color: isValid && !isSubmitting ? "#0F172A" : "#64748B",
                  border: "none",
                  marginTop: "4px",
                  cursor: !isValid || isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Creating…" : "Create Account"}
              </button>

              <p className="text-center text-sm" style={{ color: "#64748B" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#F59E0B", fontWeight: 600 }}>
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
