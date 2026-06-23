import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { RequestContext } from "./store/RequestContextObject";
import { AuthContext } from "./store/AuthContextObject";
import { useNavigate } from "react-router-dom";

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
    title: Yup.string().min(3, "Title must be at least 3 characters").required("Title is required"),
    category: Yup.string().required("Category is required"),
    roomNumber: Yup.string().required("Room number is required"),
    priority: Yup.string().required("Priority is required"),
    description: Yup.string().min(10, "Description must be at least 10 characters").required("Description is required"),
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
    const response = await axios.post("http://localhost:3000/requests", newValue);
    addRequest(response.data);
    alert("Request Submitted Successfully");
    resetForm();
    navigate("/student-dashboard");
  };

  const focusIn = (e) => (e.target.style.borderColor = "#F59E0B");
  const focusOut = (e) => (e.target.style.borderColor = "#334155");

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      <div
        className="w-full max-w-2xl p-8 rounded-2xl"
        style={{ background: "#1E293B", border: "1px solid #334155", boxShadow: "0 0 40px #F59E0B08" }}
      >
        <div className="mb-7">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black mb-4"
            style={{ background: "#F59E0B22", color: "#F59E0B", border: "1px solid #F59E0B44" }}
          >
            ✦
          </div>
          <h4 className="text-2xl font-bold" style={{ color: "#F1F5F9" }}>
            New Maintenance Request
          </h4>
          <p className="text-sm mt-1" style={{ color: "#64748B" }}>
            Describe the issue and we'll get it resolved
          </p>
        </div>

        <Formik
          initialValues={{ title: "", category: "", roomNumber: "", priority: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Title <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  type="text"
                  name="title"
                  placeholder="e.g. Broken light switch"
                  style={inputStyle}
                  onFocus={focusIn}
                  onBlur={focusOut}
                />
                <ErrorMessage name="title" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Category <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  as="select"
                  name="category"
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={focusIn}
                  onBlur={focusOut}
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="category" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              {/* Room Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Room Number <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  type="text"
                  name="roomNumber"
                  placeholder="e.g. A-204"
                  style={inputStyle}
                  onFocus={focusIn}
                  onBlur={focusOut}
                />
                <ErrorMessage name="roomNumber" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              {/* Priority */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Priority <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  as="select"
                  name="priority"
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={focusIn}
                  onBlur={focusOut}
                >
                  <option value="">Select priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Field>
                <ErrorMessage name="priority" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 col-span-1 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
                  Description <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Describe the issue in detail…"
                  rows="4"
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={focusIn}
                  onBlur={focusOut}
                />
                <ErrorMessage name="description" component="p" className="text-xs" style={{ color: "#EF4444" }} />
              </div>

              {/* Submit */}
              <div className="col-span-1 sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="px-8 py-3 font-semibold rounded-lg transition-all duration-200"
                  style={{
                    background: isValid ? "#F59E0B" : "#334155",
                    color: isValid ? "#0F172A" : "#64748B",
                    border: "none",
                    cursor: !isValid ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Submitting…" : "Submit Request"}
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
