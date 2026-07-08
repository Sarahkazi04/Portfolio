import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    title: "10+",
    subtitle: "Projects Built",
  },
  {
    icon: <FaCode />,
    title: "8+",
    subtitle: "Technologies",
  },
  {
    icon: <FaBrain />,
    title: "AI",
    subtitle: "RAG • APIs • LLMs",
  },
  {
    icon: <FaRocket />,
    title: "2025",
    subtitle: "B.Tech Graduate",
  },
];

function About() {
  return (
    <section id="about" className="py-32">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-5">
              ABOUT ME
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Building ideas into
              <br />
              <span className="gradient-text">
                real products.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-9 mb-8">
              I'm Sarah Kazi, a B.Tech Information Technology graduate passionate
              about Full Stack Development, AI applications and creating
              software that solves real-world problems.
            </p>

            <p className="text-gray-400 text-lg leading-9">
              I enjoy building scalable web applications using React, Node.js,
              Firebase, Python and MongoDB while continuously learning new
              technologies and improving my problem-solving skills.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="card flex flex-col items-center justify-center text-center px-8 py-10 rounded-3xl border border-blue-500/20 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 min-h-[230px]"
              >
                <div className="text-5xl text-blue-400 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 px-2">
                  {item.subtitle}
                </p>

              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;