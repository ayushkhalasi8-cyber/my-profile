import profile from "../assets/profileimage.jpeg";
import {
  FaCode,
  FaLaptopCode,
  FaReact,
  FaUserGraduate,
} from "react-icons/fa";

function About() {
  return (
    // <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-6">
    <section className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Passionate Frontend Developer dedicated to building responsive,
            modern, and user-friendly web applications using React.js,
            JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

              <img
                src={profile}
                alt="Khalasi Ayush"
                className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-3xl object-cover border-4 border-cyan-400 shadow-2xl hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Hello, I'm
              <span className="text-cyan-400"> Khalasi Ayush</span>
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              I am a Frontend Developer who enjoys creating modern,
              responsive, and interactive websites. I focus on writing clean
              code, designing attractive user interfaces, and delivering
              smooth user experiences.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I continuously improve my skills by building real-world projects
              with React.js, JavaScript, HTML, CSS, and Tailwind CSS. My goal
              is to become a Full Stack Developer and work on innovative,
              high-quality web applications.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                <FaLaptopCode className="text-cyan-400 text-4xl mb-4" />
                <h3 className="text-white font-bold text-xl">
                  Frontend
                </h3>
                <p className="text-gray-400 mt-2">
                  React.js, HTML5, CSS3, JavaScript, Tailwind CSS
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                <FaReact className="text-cyan-400 text-4xl mb-4" />
                <h3 className="text-white font-bold text-xl">
                  React Skills
                </h3>
                <p className="text-gray-400 mt-2">
                  React Router, Components, Hooks, Responsive Design
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                <FaCode className="text-cyan-400 text-4xl mb-4" />
                <h3 className="text-white font-bold text-xl">
                  Projects
                </h3>
                <p className="text-gray-400 mt-2">
                  Portfolio Website, Weather App, Todo App, UI Projects
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 duration-300">
                <FaUserGraduate className="text-cyan-400 text-4xl mb-4" />
                <h3 className="text-white font-bold text-xl">
                  Career Goal
                </h3>
                <p className="text-gray-400 mt-2">
                  Become a professional Full Stack Developer and build scalable applications.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;