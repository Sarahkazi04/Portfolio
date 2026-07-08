import { useEffect, useState } from "react";

function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">

        <div className="text-center">

          <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-8 text-3xl font-bold">
            Sarah Kazi
          </h2>

        </div>

      </div>
    );
  }

  return children;
}

export default Loader;