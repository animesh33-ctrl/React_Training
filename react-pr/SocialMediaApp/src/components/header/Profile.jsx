import { BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import ProfileSummary from "./ProfileSummary";

const Profile = () => {
  return (
    <>
      <BsMessenger size={28} />
      <IoNotifications size={28} />
      <ProfileSummary />
    </>
  );
};

export default Profile;
