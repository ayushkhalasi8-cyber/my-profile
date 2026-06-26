import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import { SiReactrouter } from "react-icons/si";
import { MdDevices } from "react-icons/md";

function Experience() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-5xl mb-4" />,
      description: "Building semantic and accessible web pages.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-5xl mb-4" />,
      description: "Creating modern and responsive UI designs.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl mb-4" />,
      description: "Developing interactive and dynamic websites.",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 text-5xl mb-4" />,
      description: "Building reusable components and SPAs.",
    },
    {
      name: "React Router",
      icon: <SiReactrouter className="text-red-500 text-5xl mb-4" />,
      description: "Managing navigation in React applications.",
    },
    {
      name: "Responsive Design",
      icon: <MdDevices className="text-green-500 text-5xl mb-4" />,
      description: "Creating websites for mobile, tablet, and desktop.",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-orange-600 text-5xl mb-4" />,
      description: "Version control and project collaboration.",
    },
  ];

  return (
    // <section className="min-h-screen bg-slate-900 py-16 px-6">
    <section className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          My Experience
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto leading-8 mb-14">
          I am a passionate Frontend Developer specializing in React.js,
          JavaScript, HTML, and CSS. I enjoy building responsive,
          user-friendly websites with clean code and modern UI/UX design.
        </p>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-3">
                {skill.name}
              </h2>

              <p className="text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;