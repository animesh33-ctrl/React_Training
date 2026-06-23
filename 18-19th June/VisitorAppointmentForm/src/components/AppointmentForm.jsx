import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const inputCls = (touched, errors, name) =>
  `w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ${
    touched[name] && errors[name]
      ? "border-red-400 focus:ring-red-200"
      : "border-gray-300 focus:ring-green-200"
  }`;

/*
touch={
name:true,
email:false
}
touch={
name:true,
email:true
}
*/

const AppointmentForm = ({ submitted, setSubmitted }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be atleast 3 characters")
      .required("Name is needed"),
    email: Yup.string()
      .matches(emailRegex, "Enter a valid email address")
      .required("Email is needed"),
    mobile: Yup.string()
      .length(10, "Mobile Number must be exactly 10 digits")
      .required("Mobile Number is needed"),
    dept: Yup.string().required("Select a department"),
    date: Yup.string().required("Please select a visit date"),
    purpose: Yup.string()
      .min(10, "Purpose must be atleast 10 characters")
      .required("Purpose of Visit is needed"),
    visitorType: Yup.string().required("Please select visitor type"),
    parking: Yup.boolean(),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    dept: "",
    date: "",
    purpose: "",
    visitorType: "",
    parking: false,
    terms: false,
  };

  const handleSubmit = (value, { resetForm }) => {
    setSubmitted(true);
    console.log(value);
    resetForm();
  };

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl mt-10 mb-10">
      <h1 className="text-center text-2xl font-bold text-gray-900 pb-4 mb-6 border-b border-gray-200">
        Visitor Appointment Form
      </h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ isValid, isSubmitting, errors, touched }) => (
          <Form className="flex flex-col gap-5">
            {/* {console.log(touched, errors)} */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Visitor Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                placeholder="Enter your name..."
                name="name"
                id="name"
                className={inputCls(touched, errors, "name")}
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                placeholder="Enter your email..."
                name="email"
                id="email"
                className={inputCls(touched, errors, "email")}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <Field
                type="number"
                placeholder="Enter your mobile number..."
                name="mobile"
                id="mobile"
                className={inputCls(touched, errors, "mobile")}
              />
              <ErrorMessage
                name="mobile"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="dept"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Department to Visit <span className="text-red-500">*</span>
              </label>
              <Field
                as="select"
                name="dept"
                id="dept"
                className={
                  inputCls(touched, errors, "dept") + " bg-white cursor-pointer"
                }
              >
                <option value="">Select Department</option>
                <option value="ENT">ENT</option>
                <option value="MEDICINE">MEDICINE</option>
              </Field>
              <ErrorMessage
                name="dept"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Visit Date <span className="text-red-500">*</span>
              </label>
              <Field
                type="date"
                name="date"
                id="date"
                className={inputCls(touched, errors, "date") + "cursor-pointer"}
              />
              <ErrorMessage
                name="date"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="purpose"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Purpose of Visit <span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                name="purpose"
                id="purpose"
                rows={3}
                placeholder="Enter Purpose of Visit..."
                className={inputCls(touched, errors, "purpose")}
              />
              <ErrorMessage
                name="purpose"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Visitor Type <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-2">
                {["Interview Candidate", "Vendor", "Guest"].map((v) => (
                  <label
                    key={v}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                  >
                    <Field
                      type="radio"
                      name="visitorType"
                      value={v}
                      className="accent-green-600 "
                    />
                    {v}
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="visitorType"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Need Parking?
              </label>
              <label
                htmlFor="parking"
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
              >
                <Field
                  type="checkbox"
                  name="parking"
                  id="parking"
                  className="accent-green-600"
                />
                Yes, I need Parking
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Accept Terms <span className="text-red-500">*</span>
              </label>
              <label
                htmlFor="terms"
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
              >
                <Field
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="accent-green-600"
                />
                I accept the terms and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="text-red-600 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting || submitted}
              className="cursor-pointer mt-2 w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting
                ? "Submitting..."
                : submitted
                  ? "Submitted"
                  : "Submit Request"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AppointmentForm;
