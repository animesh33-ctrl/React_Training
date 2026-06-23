import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { RequestContext } from "./store/RequestContextObject";

const MForm = () => {

  const { addRequest } = useContext(RequestContext);

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
      studentName: "Animesh",
      studentId: 6,
      status: "Open",
      createdAt: new Date().toISOString().split(".")[0] + "Z",
      color: "bg-red-500", // default color for new Open request
    };

    const response = await axios.post("http://localhost:3000/requests", newValue);
    addRequest(response.data); // push server response into context
    alert("Request Submitted Successfully");
    resetForm();
  };
  
  // console.log("Form Rendered");

  return (
    <div className="w-[35vw] max-h-120 border-2 border-gray-300 p-4 bg-white/20 rounded-2xl">
      <h4 className="text-2xl font-bold">Create Maintenance Report</h4>

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
        {() => (
          <Form className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">
                Title<span className="text-red-500">*</span>
              </label>

              <Field
                type="text"
                name="title"
                placeholder="Enter title"
                className="outline-none border border-gray-600 rounded-lg max-w-[75%] p-2"
              />

              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="category">
                Category<span className="text-red-500">*</span>
              </label>

              <Field
                as="select"
                name="category"
                className="outline-none border border-gray-600 rounded-lg max-w-[75%] p-2"
              >
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

            <div className="flex flex-col gap-1">
              <label htmlFor="roomNumber">
                Room Number<span className="text-red-500">*</span>
              </label>

              <Field
                type="number"
                name="roomNumber"
                placeholder="Enter room number"
                className="outline-none border border-gray-600 rounded-lg max-w-[75%] p-2"
              />

              <ErrorMessage
                name="roomNumber"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="priority">
                Priority<span className="text-red-500">*</span>
              </label>

              <Field
                as="select"
                name="priority"
                className="outline-none border border-gray-600 rounded-lg max-w-[75%] p-2"
              >
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

            <div className="flex flex-col gap-1 col-span-2">
              <label htmlFor="description">
                Description<span className="text-red-500">*</span>
              </label>

              <Field
                as="textarea"
                name="description"
                placeholder="Enter description"
                rows="4"
                className="outline-none border border-gray-600 rounded-lg p-2 resize-none max-w-[90%]"
              />

              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[30%] col-span-2 mx-auto cursor-pointer"
            >
              Submit Request
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MForm;
