import './Home.css'
import { CiMail } from 'react-icons/ci'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function App() {
    const skills = {
        languages:      ['Python', 'Java'],
        frontend:       ['React', 'HTML', 'CSS', 'Tailwind'],
        backend:        ['Node.js', 'FastAPI', 'PostgreSQL', 'MySQL'],
        infrastructure: ['Docker', 'Git', 'Linux'],
        Working_Knowledge: ['C++', 'AWS' ]
    }


  return (
    <>
      <nav>
        <div className="nav-logo"><span>~/</span>Sam P</div>
        <div className="nav-links">
          <a href="mailto:samuel.passey@hotmail.com"><CiMail size={19}/></a>
          <a href="https://github.com/5amp12"><FaGithub size={19}/></a>
          <a href="https://www.linkedin.com/in/samuel-passey-10b91a261/"><FaLinkedin size={19}/></a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-tag">available for work</div>
        <h1>
          <span className="highlight">Samuel Passey</span><br />
          <span className="dim sub">— developer & builder</span>
        </h1>
        <p className="hero-sub">I am a full stack developer based in Cambridge and a Computer Science undergraduate in my final year at the University of Kent. I am seeking a software development role where I can apply my technical skills and practical experience. </p>
        <p className="hero-sub">I aim to build reliable systems that are well written, well designed, and easy to maintain.</p>
      </div>

      <section id="about">
        <div className="section-label">Skills & Education</div>
        <div className="about-grid">
            {/*Skills section*/}
            <div className="skills-box">
                <h3 className="skills-title">skills</h3>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-group">
                        <span className="skill-category">{category}</span>
                        <div className="stack">
                            {items.map(i => <span key={i} className="tag">{i}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {/*Education*/}
            <div className="skills-box">
                <h3 className="skills-title">education</h3>
                <div className="skill-group">
                    <span className="skill-category">2022 — 2026</span>
                    <p className="edu-institution">University of Kent</p>
                    <p className="edu-detail">BSc (Hons) Computer Science</p>
                    <p className="edu-detail">Avg: 82%</p>
                </div>
                <div className="skill-group">
                    <span className="skill-category">2020 — 2022</span>
                    <p className="edu-institution">Long Road Sixth Form College</p>
                    <p className="edu-detail">Computer Science · Business · Chemistry</p>
                    <p className="edu-detail">D · B · C</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}