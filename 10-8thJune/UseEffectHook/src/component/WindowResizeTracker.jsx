import { useEffect, useState } from "react";

const WindowResizeTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 800;
  return (
    <div className="min-h-[50%] text-4xl">
      <h1>Window Resize Tracker</h1>
      <h4>Width : {width}</h4>
      <h4>View : {isMobile ? "Mobile View" : "Desktop View"}</h4>
    </div>
  );
};

export default WindowResizeTracker;
