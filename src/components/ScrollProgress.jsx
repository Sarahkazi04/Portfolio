import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scroll =
        window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setWidth((scroll / height) * 100);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-[999]"
      style={{
        width: `${width}%`,
      }}
    />
  );
}

export default ScrollProgress;