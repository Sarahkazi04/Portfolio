import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

import projects from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white">

        <h1 className="text-5xl font-bold mb-6">
          Project Not Found
        </h1>

        <Link
          to="/projects"
          className="primary-btn"
        >
          Back to Projects
        </Link>

      </div>
    );
  }

  return (
    <section className="bg-[#050816] min-h-screen pt-32 pb-28">

      <div className="container max-w-7xl mx-auto">

        {/* Back */}

        <Link
          to="/projects"
          className="inline-flex items-center gap-3 text-blue-400 hover:text-white transition mb-14"
        >
          <FaArrowLeft />

          Back to Projects
        </Link>

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT */}

          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm uppercase tracking-[2px]">

              {project.category}

            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">

              {project.title}

            </h1>

            <p className="text-gray-400 text-lg leading-9 mt-8">

              {project.description}

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="primary-btn flex items-center gap-2"
              >
                <FaGithub />

                GitHub

              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn flex items-center gap-2"
              >
                <FaExternalLinkAlt />

                Live Demo

              </a>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card rounded-[32px] overflow-hidden p-4"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[420px] object-cover rounded-3xl"
            />

          </motion.div>

        </motion.div>

        {/* Overview Section Starts Below */}
                {/* Overview */}

        <div className="grid lg:grid-cols-3 gap-10 mt-24">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="card rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-8">
                Project Overview
              </h2>

              <p className="text-gray-400 leading-9">
                {project.description}
              </p>

              <div className="border-t border-blue-500/10 my-10"></div>

              <h3 className="text-2xl font-semibold mb-6">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-3">

                {project.tech.map((tech, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <div className="card rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Project Info
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">

                    <FaLayerGroup className="text-blue-400" />

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm">
                      Category
                    </p>

                    <p className="font-semibold">
                      {project.category}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">

                    <FaCode className="text-blue-400" />

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm">
                      Technologies
                    </p>

                    <p className="font-semibold">
                      {project.tech.length} Technologies
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">

                    <FaCalendarAlt className="text-blue-400" />

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm">
                      Status
                    </p>

                    <p className="font-semibold text-green-400">
                      Completed
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="card rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Highlights
              </h3>

              <ul className="space-y-5">

                <li className="flex gap-3">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Modern and responsive interface.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Clean and reusable architecture.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Optimized performance.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Built using modern technologies.
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Navigation Starts Below */}
                {/* Bottom Navigation */}

        <div className="mt-24">

          <div className="card rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <p className="uppercase tracking-[5px] text-blue-400 text-sm mb-3">
                Explore More
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold">
                Interested in more projects?
              </h2>

              <p className="text-gray-400 mt-4 leading-8 max-w-2xl">
                Explore AI, Full Stack and Web Development projects built using
                React, Node.js, Firebase, Python, LangChain and modern web
                technologies.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="primary-btn"
              >
                View All Projects
              </Link>

              <Link
                to="/"
                className="secondary-btn"
              >
                Back Home
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectDetails;