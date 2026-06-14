import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative w-full h-15 bg-blue-900 rounded-b-lg flex">
      <div className="w-[25vw] h-full  text-white flex items-center justify-center">
        <h4 className="text-2xl pb-2 font-bold font-mono">
          Smart Hotel Management System
        </h4>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
