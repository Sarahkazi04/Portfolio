import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaLocationArrow,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaBriefcase />,
    type: "Experience",
    title: "Technical Operations & Website Management Intern",
    company: "FDS Canada",
    location: "Remote",
    duration: "June 2024 – Present",
    points: [
      "Managed and maintained a live production WordPress website.",
      "Resolved website bugs and technical issues.",
      "Worked with international stakeholders and clients.",
      "Published content and maintained web pages.",
      "Supported digital marketing campaigns and website updates.",
    ],
  },

  {
    icon: <FaGraduationCap />,
    type: "Education",
    title: "Bachelor of Technology",
    company: "Usha Mittal Institute of Technology",
    location: "Mumbai",
    duration: "2021 – 2025",
    extra: "CGPA: 7.45 / 10",
    points: [
      "Bachelor's in Information Technology.",
      "Focused on Full Stack Development.",
      "Built AI-powered and Web Development projects.",
      "Worked with React, Node.js, Python and Firebase.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-4">
            Journey
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold">
            Experience &
            <span className="gradient-text"> Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-blue-500/20"></div>

          <div className="space-y-14">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex gap-8"
              >

                {/* Icon */}

                <div className="z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-2xl text-white shadow-xl shrink-0 mt-3">
                  {item.icon}
                </div>

                {/* Card */}

                <div className="card flex-1 rounded-3xl p-10 lg:p-12 hover:border-blue-500 transition-all duration-300">

                  <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                    {item.type}
                  </span>

                  <h3 className="text-3xl font-bold leading-tight mb-6">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-8 text-gray-400 mb-6">

                    <div className="flex items-center gap-2">
                      <FaLocationArrow className="text-blue-400" />
                      <span>
                        {item.company} • {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>{item.duration}</span>
                    </div>

                  </div>

                  {item.extra && (
                    <p className="text-blue-300 font-semibold text-lg mb-6">
                      {item.extra}
                    </p>
                  )}

                  <ul className="space-y-5">

                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-3 shrink-0"></span>

                        <p className="text-gray-300 leading-8">
                          {point}
                        </p>
                      </li>
                    ))}

                  </ul>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;