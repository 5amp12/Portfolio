import './Home.css'
import { CiMail } from 'react-icons/ci'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function App() {
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
    </>
  )
}