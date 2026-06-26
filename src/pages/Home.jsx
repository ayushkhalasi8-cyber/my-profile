import profile from "../assets/profileimage.jpeg";
import {
  FaPhoneAlt,
  FaEye,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    // <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center px-6 py-20">
    <section className="min-h-screen pt-28 lg:pt-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center px-6 pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold mb-6">
            👋 Welcome to My Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Hi, I'm
            <br />
            <span className="text-cyan-400">
              Khalasi Ayush
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300 font-medium">
            Frontend Developer • React Developer • UI Designer
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            Passionate Frontend Developer specializing in React.js,
            JavaScript, HTML, CSS, and Tailwind CSS. I build responsive,
            fast, and visually appealing websites with a strong focus on
            clean UI/UX and performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/contact"
              className="w-52 h-14 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              <FaPhoneAlt />
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 h-14 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="w-52 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400">Responsive Design</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">React</h3>
              <p className="text-gray-400">Specialized</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -inset-4 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Khalasi Ayush"
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-cyan-500 shadow-2xl hover:scale-105 duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;