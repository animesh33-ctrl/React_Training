import { useState, useRef, useEffect } from "react";
import photo from "../../assets/photo.jpg";
import { FaChevronDown } from "react-icons/fa";

const ProfileSummary = () => {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={profileRef} className="relative">
      <img
        src={photo}
        alt="Profile"
        onClick={() => setOpen(!open)}
        className={`h-10 w-10 rounded-full object-cover cursor-pointer ${
          open ? "ring-2 ring-blue-500" : ""
        }`}
      />
      <div className="absolute bottom-0 -right-1 h-4 w-4 rounded-full bg-gray-700 flex items-center justify-center border border-white">
        <FaChevronDown size={10} className="text-white pl-px" />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-2 flex flex-col text-black">
          <button className="text-left p-2 hover:bg-gray-300 rounded">
            Profile Details
          </button>

          <button className="text-left p-2 hover:bg-gray-300 rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileSummary;
