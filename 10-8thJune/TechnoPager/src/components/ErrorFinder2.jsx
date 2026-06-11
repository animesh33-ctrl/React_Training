import { useState, useEffect } from "react";

function ErrorFinder2() {
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <h3>Scroll Y: {scrollY}</h3>
    </div>
  );
}

export default ErrorFinder2;
