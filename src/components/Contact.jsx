import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-blue-400 font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold">
            Let's
            <span className="gradient-text"> Connect</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-gray-400">
            Open to Full Stack Development, Software Engineering, QA and AI
            opportunities. Whether it's a job opportunity, collaboration or
            just a conversation, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Section */}

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left Card */}

          <div className="card p-10 h-full flex flex-col justify-between">

            <h3 className="text-4xl font-bold text-center mb-10">
              Get In Touch
            </h3>

            <div className="space-y-12">

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#151b30] border border-blue-500/20 mb-[60px]">

                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl text-blue-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-lg font-semibold">
                    sarahkazi889@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#151b30] border border-blue-500/20">

                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-lg font-semibold">
                    Mumbai, Maharashtra
                  </p>
                </div>

              </div>

            </div>

            {/* Social */}

            <div className="mt-10 text-center">

              <p className="text-gray-400 mb-5 font-medium">
                Connect with me
              </p>

              <div className="flex justify-center gap-4">

                <a
                  href="https://github.com/Sarahkazi04"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl bg-[#151b30] border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/sarah-kazi-8972a222a"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl bg-[#151b30] border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

          </div>

          {/* Right Card */}

          <form 
            ref={form}
            onSubmit={sendEmail}
            className="card p-10 h-full space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full h-16 rounded-2xl bg-[#151b30] border border-blue-500/20 px-6 outline-none focus:border-blue-500 transition"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              className="w-full h-16 rounded-2xl bg-[#151b30] border border-blue-500/20 px-6 outline-none focus:border-blue-500 transition"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full h-16 rounded-2xl bg-[#151b30] border border-blue-500/20 px-6 outline-none focus:border-blue-500 transition"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message..."
              className="w-full rounded-2xl bg-[#151b30] border border-blue-500/20 p-6 outline-none resize-none focus:border-blue-500 transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="primary-btn w-full h-16 text-lg disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-center text-green-400">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-center text-red-400">
                ❌ Failed to send the message. Please try again.
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;