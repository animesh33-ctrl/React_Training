import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { RequestContext } from "./store/RequestContextObject";
import { AuthContext } from "./store/AuthContextObject";
import { useNavigate } from "react-router-dom";

const MForm = () => {
  const { addRequest } = useContext(RequestContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: "Electrical" },
    { id: 2, name: "Plumbing" },
    { id: 3, name: "Cleaning" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Internet" },
  ];

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters")
      .required("Title is required"),

    category: Yup.string().required("Category is required"),

    roomNumber: Yup.string().required("Room number is required"),

    priority: Yup.string().required("Priority is required"),

    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
  });

  const handleOnSubmit = async (values, { resetForm }) => {
    const newValue = {
      ...values,
      id: String(Date.now()),
      studentName: user?.name || "Unknown",
      studentId: user?.id || 0,
      status: "Open",
      createdAt: new Date().toISOString().split(".")[0] + "Z",
    };

    const response = await axios.post(
      "http://localhost:3000/requests",
      newValue,
    );
    addRequest(response.data); // push server response into context
    alert("Request Submitted Successfully");
    resetForm();
    navigate("/student-dashboard");
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg outline-none " +
    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 " +
    "placeholder:text-gray-400 bg-white";

  // console.log("Form Rendered");

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-8">
        <h4 className="text-2xl font-bold text-gray-800 mb-1">
          Create Maintenance Request
        </h4>
        <p className="text-gray-500 text-sm mb-6">
          Fill out the form below to submit a new maintenance request
        </p>

        <Formik
          initialValues={{
            title: "",
            category: "",
            roomNumber: "",
            priority: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-gray-700"
                >
                  Title<span className="text-red-500 ml-0.5">*</span>
                </label>

                <Field
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  className={inputClass}
                />

                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-gray-700"
                >
                  Category<span className="text-red-500 ml-0.5">*</span>
                </label>

                <Field as="select" name="category" className={inputClass}>
                  <option value="">Select Category</option>

                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-red-500 text-sm"
                />
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
                  name="roomNumber"
                  placeholder="Enter room number"
                  className={inputClass}
                />

                <ErrorMessage
                  name="roomNumber"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="priority"
                  className="text-sm font-semibold text-gray-700"
                >
                  Priority<span className="text-red-500 ml-0.5">*</span>
                </label>

                <Field as="select" name="priority" className={inputClass}>
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Field>

                <ErrorMessage
                  name="priority"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5 col-span-1 sm:col-span-2">
                <label
                  htmlFor="description"
                  className="text-sm font-semibold text-gray-700"
                >
                  Description<span className="text-red-500 ml-0.5">*</span>
                </label>

                <Field
                  as="textarea"
                  name="description"
                  placeholder="Describe the issue in detail..."
                  rows="4"
                  className={`${inputClass} resize-none`}
                />

                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg
                    hover:bg-blue-700 active:scale-[0.98] transition-all duration-200
                    cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MForm;
