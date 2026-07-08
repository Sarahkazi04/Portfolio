import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="pt-40 pb-28">
      <div className="container max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-5">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
            Technologies I
            <span className="gradient-text"> Work With</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[170px] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-5">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;