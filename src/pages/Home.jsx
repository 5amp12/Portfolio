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

    const experience = [
        {
            date: 'Aug 2024 — Aug 2025',
            role: 'Computer Technician',
            company: 'University of Cambridge',
            desc: 'Developed Python and PostgreSQL scripts to automate internal processes and improve efficiency. Supported Windows and Ubuntu OS upgrade projects using Bash, SQL, and Python. Contributed to shared codebases and documentation using Git/GitLab and code review practices.',
        },
        {
            date: 'Jul 2023 - May 2024 | Sept 2025 - Current',
            role: 'Peer Tutor',
            company: 'University of Kent',
            desc: 'Worked with lecturers to assess first-year Computer Science coursework in a paid academic support role.',
        },
    ]

    const projects = [
        { num: '01', title: 'QuickFilm', desc: 'A full-stack film rating web app built as a learning project.', link: 'https://github.com/5amp12/Quickfilm' },
        { num: '02', title: 'EmailTrackr', desc: 'A full-stack email scam check site which allows users to check if any of there emails are scams {In-progress}', link: 'https://github.com/5amp12/emailTracker' },

    ] 


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

      <section id="experience">
        <div className="section-label">experience</div>
        <div className="experience-list">
            {experience.map(e => (
            <div key={e.date} className="experience-card">
                <span className="experience-date">{e.date}</span>
                <div className="experience-body">
                <p className="experience-role">{e.role}</p>
                <p className="experience-company">{e.company}</p>
                <p className="experience-desc">{e.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </section>

      <section id="projects">
        <div className="section-label">projects</div>
        <a className="projects-grid">
          {projects.map(p => (
            <a href={p.link} key={p.num} className="project-card">
              <div className="project-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="arrow">→ view project</span>
            </a>    
          ))}
        </a>
      </section>

      <footer>
        <p>© 2026 Samuel Passey</p>
        <p>built with react + vite</p>
      </footer>
    </>
  )
}