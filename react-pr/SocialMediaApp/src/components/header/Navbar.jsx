import { IoHome } from "react-icons/io5";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <IoHome size={28} />
      <BsCameraReelsFill size={28} />
      <FaUserFriends size={28} />
      <MdGroups size={28} />
      <FaStore size={28} />
      <MdOutlineOndemandVideo size={28} />
      <IoGameController size={28} />
    </>
  );
};

export default Navbar;
