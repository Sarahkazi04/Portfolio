import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden pt-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-28 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-5">
              Welcome to my Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              Hi, I'm

              <br />

              <span className="gradient-text">
                Sarah Kazi
              </span>

            </h1>

            <div className="mt-8 h-16 text-3xl lg:text-4xl font-bold text-white">

              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "QA Engineer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />

            </div>

            <p className="mt-8 text-lg leading-9 text-gray-400 max-w-[560px]">

              B.Tech Information Technology graduate passionate about building
              modern web applications, AI-powered solutions and scalable
              software using React, Node.js, Python, Firebase and REST APIs.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/projects"
                className="primary-btn"
              >
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn flex items-center gap-2"
              >
                <HiOutlineDocumentDownload />
                Resume
              </a>

            </div>

            <div className="flex gap-8 mt-10 text-3xl">

              <a
                href="https://github.com/Sarahkazi04"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sarah-kazi-8972a222a/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Blue Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[80px] scale-110"></div>

              {/* Outer Ring */}

              <div className="relative p-3 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700">

                {/* Image */}

                <img
                  src="/profile.png"
                  alt="Sarah Kazi"
                  className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-[6px] border-[#050816]"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 text-4xl animate-bounce">
        <HiArrowDown />
      </div>

    </section>
  );
}

export default Hero;