import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <h1>Login Page</h1>
      <p>Only Authenticated Users can access dashboards</p>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                placeholder="Enter email..."
                name="email"
                id="email"
              ></Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm italic"
              />
            </div>
            <div>
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <Field
                type="password"
                placeholder="Enter password..."
                name="password"
                id="password"
              ></Field>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm italic"
              />
            </div>
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-auto cursor-pointer"
            >
              Submit Request
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
