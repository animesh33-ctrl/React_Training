const SuccessMessage = () => (
  <div className="w-full max-w-xl flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 mb-10">
    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white text-xs">
      ✓
    </div>
    <div>
      <p className="font-semibold text-green-800 text-sm">
        Appointment Request Submitted Successfully!
      </p>
      <p className="text-green-700 text-sm">
        We have received your request. Our team will contact you soon.
      </p>
    </div>
  </div>
);

export default SuccessMessage;
