import "./App.css";
import profile from '../assets/sam.png'

export default function Info() {


    const experience = [
    {
        date: 'Aug 2024 — Aug 2025',
        role: 'Computer Technician',
        company: 'University of Cambridge',
        desc: 'Developed Python and PostgreSQL scripts to automate internal processes and improve efficiency. Supported Windows and Ubuntu OS upgrade projects using Bash, SQL, and Python. Contributed to shared codebases and documentation using Git/GitLab and code review practices.',
    },
    {
        date: 'Jul 2023 — May 2024 · Sep 2025 — Present',
        role: 'Peer Tutor',
        company: 'University of Kent',
        desc: 'Worked with lecturers to assess first-year Computer Science coursework in a paid academic support role.',
    },
    ]

    const skills = {
    languages: ['Python', 'Java', 'JavaScript'],
    frontend: ['React', 'HTML', 'CSS', 'Tailwind'],
    backend: ['Node.js', 'FastAPI', 'PostgreSQL', 'MySQL'],
    infrastructure: ['Docker', 'Git', 'GitHub', 'GitLab', 'Linux'],
    'working knowledge': ['C++', 'AWS'],
    }
  return (
    <main>
      <header className="page-hero">
        
        <div className="hero-foot">
            <h1>Info</h1>
            <p className="hero-sub">
            Full-stack developer based in Cambridge, finishing a Computer
            Science degree at the University of Kent. I aim to build reliable
            systems that are well written, well designed, and easy to maintain.
            </p>
        </div>
        <img className="hero-photo" src={profile} alt="Samuel Passey" />
      </header>

      <section id="experience">
        <h2 className="section-label">Experience</h2>
        {experience.map(e => (
          <div key={e.role} className="exp-row">
            <p className="exp-date">{e.date}</p>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-company">{e.company}</p>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="education">
        <h2 className="section-label">Education</h2>
        <div className="exp-row">
          <p className="exp-date">2022 — 2026</p>
          <div>
            <h3 className="exp-role">University of Kent</h3>
            <p className="exp-company">BSc (Hons) Computer Science</p>
            <p className="exp-desc">81% average across the degree so far.</p>
          </div>
        </div>
        <div className="exp-row">
          <p className="exp-date">2020 — 2022</p>
          <div>
            <h3 className="exp-role">Long Road Sixth Form College</h3>
            <p className="exp-company">Computer Science · Business · Chemistry</p>
            <p className="exp-desc">Distinction · B · C</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-label">Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-line">
            <span className="skill-cat">{category}</span>
            <span className="skill-items">{items.join(', ')}</span>
          </div>
        ))}
      </section>
    </main>
  )
}