

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
  .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });

  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, freelance
            projects, or collaborations. Let's build something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 7874178759</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <FaEnvelope className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">Email</h3>
                  <p className="text-gray-400">ayush@777.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Location
                  </h3>
                  <p className="text-gray-400">Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-white/10 border border-cyan-400/20 flex justify-center items-center text-2xl text-white hover:bg-cyan-500 hover:rotate-12 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-white/10 border border-cyan-400/20 flex justify-center items-center text-2xl text-white hover:bg-blue-600 hover:rotate-12 duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl font-bold text-white mb-8">
              Send Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900 text-white rounded-xl p-4 border border-slate-700 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-900 text-white rounded-xl p-4 border border-slate-700 focus:border-cyan-400 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-slate-900 text-white rounded-xl p-4 border border-slate-700 focus:border-cyan-400 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-900 text-white rounded-xl p-4 border border-slate-700 focus:border-cyan-400 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 duration-300 flex justify-center items-center gap-3"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
