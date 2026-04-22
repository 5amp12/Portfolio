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
    </>
  )
}