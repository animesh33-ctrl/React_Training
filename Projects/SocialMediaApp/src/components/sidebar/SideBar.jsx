const SideBar = () => {
  const itemClass =
    "p-2  rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black transition-colors duration-200";

  return (
    <>
      <h2 className="mt-4 font-bold text-2xl font-mono p-2 rounded-lg cursor-pointer hover:bg-gray-400 transition-colors duration-200">
        Animesh Palui
      </h2>

      <p className={itemClass}>Meta AI</p>
      <p className={itemClass}>Friends</p>
      <p className={itemClass}>Professional Dashboard</p>
      <p className={itemClass}>Memories</p>
      <p className={itemClass}>Saved</p>
      <p className={itemClass}>Reels</p>
      <p className={itemClass}>Groups</p>
    </>
  );
};

export default SideBar;
