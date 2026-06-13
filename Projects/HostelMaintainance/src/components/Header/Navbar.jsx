const Navbar = () => {
  const design = "p-2 bg-indigo-900 rounded-xl px-5";
  return (
    <div className=" w-[70vw] h-full text-white  flex justify-end items-center gap-x-6 ml-auto mr-5">
      <p className={design}> Dashboard</p>
      <p className={design}>Create Request</p>
      <p className={design}>View Requests</p>
      <p className={design}>Sign Up</p>
      <p className={design}>Login</p>
    </div>
  );
};

export default Navbar;
