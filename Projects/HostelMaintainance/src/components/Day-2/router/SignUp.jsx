import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
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
  };

  return (
    <div>
      <h1>SignUp Page</h1>

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
        {({ isValid }) => (
          <Form>
            <div>
              <label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                placeholder="Enter name..."
                name="name"
                id="name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm italic"
              />
            </div>
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
              <label htmlFor="roomNumber">
                Room Number<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                placeholder="Enter room number..."
                name="roomNumber"
                id="roomNumber"
              ></Field>
              <ErrorMessage
                name="roomNumber"
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
            <div>
              <label htmlFor="confirm">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <Field
                type="password"
                placeholder="Enter same password..."
                name="confirm"
                id="confirm"
              ></Field>
              <ErrorMessage
                name="confirm"
                component="p"
                className="text-red-500 text-sm italic"
              />
            </div>
            <button
              type="submit"
              disabled={!isValid}
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

export default SignUp;
