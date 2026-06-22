import profile from "../assets/profileimage.jpeg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Khalasi Ayush</h1>

        <h2>Frontend Developer & UI Designer</h2>

        <p>
          Welcome to my professional portfolio. I specialize in creating
          modern, responsive, and user-friendly web applications using React,
          JavaScript, HTML, and CSS. My goal is to build digital experiences
          that are visually stunning, highly functional, and optimized for
          performance.
        </p>

        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Portfolio" />
      </div>
    </section>
  );
}

export default Home;