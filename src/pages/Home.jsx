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
          JavaScript, HTML, and CSS.
        </p>

        <div className="btn-group">
          <a href="#contact" className="btn">
            Contact Me
          </a>
           <a
            href="/resume.png"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="download-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Khalasi Ayush" />
      </div>
    </section>
  );
}

export default Home;