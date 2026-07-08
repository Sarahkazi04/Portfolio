import { Link, NavLink } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-blue-900/30">
      <div className="container h-[85px] flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-600/30">
            SK
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Sarah Kazi
            </h2>

            <p className="text-sm text-gray-400">
              Software Engineer
            </p>
          </div>

        </Link>

        {/* Menu */}

        <nav className="hidden lg:flex items-center gap-10 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Skills
          </a>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-gray-300 hover:text-blue-400 transition"
            }
          >
            Projects
          </NavLink>

          <a
            href="/#contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Contact
          </a>

        </nav>

        {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
        >
          Resume
          <HiArrowUpRight />
        </a>

      </div>
    </header>
  );
}

export default Navbar;