import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#03050d] border-t border-blue-900/30 mt-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Top */}

        <div className="flex flex-col items-center text-center">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold">
              SK
            </div>

            <div className="text-left">

              <h2 className="text-3xl font-bold">
                Sarah Kazi
              </h2>

              <p className="text-gray-400">
                Software Engineer
              </p>

            </div>

          </div>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Passionate about Full Stack Development, Artificial Intelligence,
            Software Engineering and building scalable, user-friendly digital
            experiences with modern technologies.
          </p>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/Sarahkazi04"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111827] border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/sarah-kazi-8972a222a/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111827] border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:sarahkazi889@gmail.com"
              className="w-14 h-14 rounded-2xl bg-[#111827] border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"
            >
              <FaEnvelope size={20} />
            </a>

          </div>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 mt-14 text-gray-400 font-medium">

          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <Link to="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-blue-900/30 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} Sarah Kazi. All Rights Reserved.
            </p>

            <button
              onClick={scrollTop}
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
            >
              <FaArrowUp />
            </button>

            <p className="text-gray-500 text-center">
              Built with React • Tailwind CSS • Framer Motion
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;