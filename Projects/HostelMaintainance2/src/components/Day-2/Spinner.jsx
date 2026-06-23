import { PiSpinnerGapBold } from "react-icons/pi";
const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <PiSpinnerGapBold
        className="animate-spin"
        style={{ color: "#F59E0B", fontSize: "2rem" }}
      />
    </div>
  );
};

export default Spinner;
