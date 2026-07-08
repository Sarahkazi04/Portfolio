import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Growise",
    image: "/growise.png",
    slug: "growise",
    category: "AI Project",
    description:
      "AI-powered Android application for fruit and vegetable recognition, nutrition analysis, and personalized dietary recommendations.",
    tech: ["Kotlin", "Firebase", "Machine Learning", "Android"],
    github: "https://github.com/Sarahkazi04/growise",
    live: "#",
  },

  {
    title: "RAGIFY",
    image: "/ragify.jpg",
    slug: "ragify",
    category: "AI Assistant",
    description:
      "Retrieval-Augmented Generation assistant built using LangChain, FAISS, OpenAI and Streamlit for semantic document search.",
    tech: ["Python", "LangChain", "FAISS", "OpenAI"],
    github: "https://github.com/Sarahkazi04/Ragify",
    live: "#",
  },
];

function FeaturedProjects() {
  return (
    <section id="projects" className="py-28">
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

          <h2 className="text-5xl lg:text-6xl font-bold">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>

          <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-6">
            A few projects that showcase my experience in Full Stack Development,
            Artificial Intelligence and modern web technologies.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="card rounded-3xl overflow-hidden flex flex-col"
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

                <h3 className="text-3xl font-bold mt-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mt-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
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

        {/* Button */}

        <div className="flex justify-center mt-16">

          <Link
            to="/projects"
            className="primary-btn"
          >
            View All Projects
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;