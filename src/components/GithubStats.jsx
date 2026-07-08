import { motion } from "framer-motion";

function GithubStats() {
  return (
    <section className="bg-[#050816] py-24 px-6 lg:px-12">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[5px] text-blue-400 mb-3">
            GitHub
          </p>

          <h2 className="text-5xl font-bold">
            Open Source & Coding Activity
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8">
            A snapshot of my coding journey, repositories and
            programming consistency.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827]/80 border border-blue-900 rounded-3xl p-6"
          >

            <img
              className="w-full rounded-xl"
              src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
              alt="GitHub Stats"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827]/80 border border-blue-900 rounded-3xl p-6"
          >

            <img
              className="w-full rounded-xl"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_GITHUB_USERNAME&layout=compact&theme=tokyonight&hide_border=true"
              alt="Languages"
            />

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-[#111827]/80 border border-blue-900 rounded-3xl p-6"
        >

          <img
            className="w-full rounded-xl"
            src="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_GITHUB_USERNAME&theme=tokyo-night"
            alt="Contribution Graph"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default GithubStats;