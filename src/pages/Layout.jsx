import { NavLink, Outlet, Link } from 'react-router-dom'
import './App.css'


export default function Layout() {
  return (
    <>
      <header className="site-header">
        <nav>
            <Link to="/" className="nav-id">
                <span className="nav-name">Samuel Passey</span>
            </Link>
            <div className="page-tabs">
                <NavLink to="/" end>Projects</NavLink>
                <NavLink to="/info">Info</NavLink>
            </div>
            <div className="nav-links">
                <a href="https://github.com/5amp12">GitHub</a>
                <a href="https://www.linkedin.com/in/samuel-passey-10b91a261/">LinkedIn</a>
                <a href="mailto:samuel.passey@hotmail.com">Email</a>
            </div>
        </nav>
      

        
      </header>

      <Outlet />

      <footer>
        <div className="footer-base">
          <p>© 2026 Samuel Passey</p>
        </div>
      </footer>
    </>
  )
}