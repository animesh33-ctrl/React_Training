import { useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import SuccessMessage from "./components/SuccessMessage";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-gray-100 px-4">
      <AppointmentForm submitted={submitted} setSubmitted={setSubmitted} />
      {submitted && <SuccessMessage />}
    </div>
  );
};
export default App;
