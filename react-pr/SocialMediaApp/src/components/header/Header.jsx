import logo from "../../assets/iem.png";
import Navbar from "./Navbar";
import Profile from "./Profile";
const Header = () => {
  return (
    <div className="w-full h-16 bg-black/80 flex">
      <div className="flex gap-x-5 w-20 p-2 items-center">
        <img
          src={logo}
          alt="Brand Logo"
          className="object-cover h-full w-full rounded-full"
        />

        <input
          type="text"
          name="search-bar"
          id="search"
          className="outline-none border-2 border-indigo-400 bg-gray-500 rounded-2xl p-2 pl-3 placeholder:text-black"
          placeholder="Search Facebook"
        />
      </div>
      <div className="flex-1 flex justify-center items-center w-40 gap-x-9 text-white/80">
        <Navbar />
      </div>
      <div className="flex justify-end items-center gap-x-3 text-white/80 mr-7">
        <Profile />
      </div>
    </div>
  );
};

export default Header;
