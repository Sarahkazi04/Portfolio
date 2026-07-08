import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    year: "2024",
    link: "https://drive.google.com/file/d/1PadbVqVdiVUfgjwTL_U3x-o8XtdKE7ma/view?usp=drive_link",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2025",
    link: "https://drive.google.com/file/d/1vwWLKjK7_n5-rDT4kF2kirfS3nvSCV_-/view?usp=drive_link",
  },
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    link: "https://drive.google.com/file/d/1_NjhJtZvmyjQLPll3VuBvSM9KDASglQ6/view?usp=drive_link",
  },
  {
    title: "OPSWAT Network Security Associate",
    issuer: "OPSWAT academy",
    year: "2025",
    link: "https://drive.google.com/file/d/1FYyaWnvXRjPaMm-g_oLBzUWvNJxLFQnk/view?usp=drive_link",
  },
  {
    title: "SQL for Beginners",
    issuer: "Scaler",
    year: "2024",
    link: "https://drive.google.com/file/d/1bg7T2DAVaWYYMdnTFb3gLh1hoq78Avmv/view?usp=drive_link",
  },
  {
    title: "C++ Programming",
    issuer: "Scaler",
    year: "2024",
    link: "https://drive.google.com/file/d/1CUfxoswJdnaQZfwIT2I6Fb9G2zg9tW6x/view?usp=drive_link",
  },
  {
    title: "Data Analytics with Power BI",
    issuer: "Aspire For Her",
    year: "2025",
    link: "https://drive.google.com/file/d/1HfYnRueff0YYRzwUGyFtNv5gYq1EOULZ/view?usp=drive_link",
  },
  {
    title: "SpaceSprint Hackathon",
    issuer: "IEEE UMIT & GDSC UMIT",
    year: "2023",
    link: "https://drive.google.com/file/d/1SLB_ZpssHmphPC3TwfNIJa_zV5njsd1G/view?usp=drive_link",
  },
  {
    title: "Bit n Biuld Hackathon",
    issuer: "GDSC CRCE & GDSC UMIT",
    year: "2025",
    link: "https://drive.google.com/file/d/18UDGEUEkRzIWbzibctwwowRLuiJk_uXv/view?usp=drive_link",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32"
    >
      <div className="container max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-4">
            Certifications
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Continuous
            <span className="gradient-text">
              {" "}Learning
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-gray-400">
            Professional certifications that strengthened my expertise in Full Stack
            Development, Artificial Intelligence, APIs, Databases and Modern Web
            Technologies.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certifications.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
              }}
              className="card rounded-3xl p-8 flex flex-col h-full"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">

                <FaAward className="text-3xl text-blue-400" />

              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold leading-9 min-h-[70px]">

                {item.title}

              </h3>

              {/* Issuer */}

              <p className="text-blue-400 text-lg font-medium mt-5">

                {item.issuer}

              </p>

              {/* Year */}

              <span className="inline-flex w-fit mt-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">

                {item.year}

              </span>

              {/* Button */}

              <div className="mt-auto pt-8">

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-blue-400 font-medium hover:text-white transition"
                >

                  View Certificate

                  <FaExternalLinkAlt size={12} />

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;