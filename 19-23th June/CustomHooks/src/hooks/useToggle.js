import { useState } from "react";
 
function useToggle(initialValue = false) {
  const [status, setStatus] = useState(initialValue);
 
  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };
 
  return [status, toggleStatus];
}
 
export default useToggle;