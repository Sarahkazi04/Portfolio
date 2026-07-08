import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-5">
          Lost in the Code?
        </h2>

        <p className="text-gray-400 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700"
        >
          Go Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;