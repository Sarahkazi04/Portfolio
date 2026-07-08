import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

import projects from "../data/projects";

const filters = ["All", "AI", "Full Stack", "Web"];

function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        filter === "All" || project.category === filter;

      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.join(" ").toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, filter]);

  return (
    <section className="bg-[#050816] py-32">
      <div className="container max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-4">
            Portfolio
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Featured
            <span className="gradient-text"> Projects</span>
          </h1>

          <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-6">
            A collection of Full Stack, AI and Web Development projects built
            using React, Node.js, Firebase, Python, LangChain and modern web
            technologies.
          </p>
        </motion.div>

        {/* Search + Filter */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">

          <div className="relative w-full lg:w-96">

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search Projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 pl-14 pr-5 rounded-2xl bg-[#111827] border border-blue-500/20 focus:border-blue-500 outline-none transition"
            />

          </div>

          <div className="flex flex-wrap justify-center gap-3">

            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-3 rounded-xl transition-all duration-300 ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-[#111827] border border-blue-500/20 hover:border-blue-500"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {filteredProjects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="card overflow-hidden rounded-3xl flex flex-col"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="flex flex-col flex-1 p-8">

                <span className="inline-block w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs uppercase tracking-wider">
                  {project.category}
                </span>

                <h2 className="text-3xl font-bold mt-5">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-8 mt-5 flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex items-center gap-4 mt-8">

                  <Link
                    to={`/project/${project.slug}`}
                    className="primary-btn"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;