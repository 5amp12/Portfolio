
import "./App.css";




export default function Work() {

  const projects = [
    {
      title: 'QuickFilm',
      meta: 'Full-stack · React',
      desc: 'A film rating web app built end-to-end as a learning project.',
      link: 'https://github.com/5amp12/Quickfilm',
    },
    {
      title: 'EmailTrackr',
      meta: 'Full-stack · In progress',
      desc: 'A scam-checking site that lets users verify whether their emails are phishing attempts.',
      link: 'https://github.com/5amp12/emailTracker',
    },
    {
      title: 'Kent Events',
      meta: 'Web scraping · Aggregation',
      desc: 'One site for every University of Kent event, scraped from across the university\u2019s event pages.',
      link: 'https://github.com/ryangoslingreal/kent-events',
    },
    {
      title: 'Fall Monitor',
      meta: 'Hardware · Python',
      desc: 'A ESP32, accelormeter and buzzer which work together to track and alert the user and there loved ones of potential falls.',
    },
    {
      title: 'Pi Temperature Display',
      meta: 'Hardware · Python',
      desc: 'A Raspberry Pi and LED screen showing real-time room temperature and weather data.',
    },
  ]

  // ── Example placeholder data — replace with your real hackathons ──
  const hackathons = [
    {
      title: 'Lockinator',
      meta: 'KentHackIt · 24 hours · Team of 2',
      desc: '2nd place and Hacker’s Choice winner at KentHackIt. A posture detection and eye-tracking web app built with MediaPipe to help users stay focused, featuring voice feedback powered by ElevenLabs.',
      link: 'https://github.com/5amp12/lockinator',
    },
    {
      title: 'House of Agents',
      meta: 'MongoDB · 12 hours · Team of 4',
      desc: 'MongoDB London Hackathon — ElevenLabs ($1,980) Winner. A digital second chamber for the age of AI. Multi-agent AI scrutiny of every bill, in 60 seconds.',
      link: 'https://github.com/calebareeveso/House-Of-Agents-Team',
    },
  ]
  const renderRow = p => {
    const inner = (
      <>
        <div className="work-head">
          <h3>{p.title}</h3>
          {p.link && <span className="work-arrow" aria-hidden="true">↗</span>}
        </div>
        <p className="work-meta">{p.meta}</p>
        <p className="work-desc">{p.desc}</p>
      </>
    )
    return (
      <li key={p.title}>
        {p.link ? (
          <a className="work-row" href={p.link} target="_blank" rel="noreferrer">
            {inner}
          </a>
        ) : (
          <div className="work-row">{inner}</div>
        )}
      </li>
    )
  }

  return (
    <main>
      <header className="hero">
        <p className="hero-tag">Available for work</p>
        <h1>
          Building practical systems through academic and industry experience.
        </h1>
      </header>

      <section id="projects">
        <h2 className="section-label">Personal projects</h2>
        <ul className="work-list">{projects.map(renderRow)}</ul>
      </section>

      <section id="hackathons">
        <h2 className="section-label">Hackathons</h2>
        <ul className="work-list">{hackathons.map(renderRow)}</ul>
      </section>
    </main>
  )
}