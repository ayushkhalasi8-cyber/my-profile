function Experience() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Router DOM",
    "Responsive Design",
    "Git & GitHub",
  ];

  return (
    <section className="experience">
      <div className="container">
        <h1>My Experience</h1>

        <p>
          I am a passionate Frontend Developer with experience in building
          responsive and modern web applications. I enjoy creating beautiful
          user interfaces and learning new technologies to improve my skills.
        </p>

        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;