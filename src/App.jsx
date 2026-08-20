import { siteContent } from './data/siteContent.js';
import './App.css';

function BotanicalArt({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`botanical-art ${className}`}
      viewBox="0 0 520 520"
      fill="none"
    >
      <path
        className="botanical-art__stem"
        d="M83 466c95-53 116-168 163-263 35-70 91-126 180-151"
      />
      <path
        className="botanical-art__stem botanical-art__stem--soft"
        d="M184 346c-39-64-75-83-121-89M248 198c-9-72 17-116 62-153M287 147c58 0 94 21 120 60"
      />
      <path
        className="botanical-art__leaf"
        d="M150 378c-53 11-82-8-89-52 48-8 79 9 89 52ZM212 283c-46-21-59-51-39-90 43 20 57 50 39 90ZM302 135c-15-43-1-72 42-88 13 42-1 72-42 88ZM349 117c27-38 59-45 96-19-27 35-59 42-96 19Z"
      />
      <g className="botanical-art__flower">
        <circle cx="411" cy="209" r="18" />
        <ellipse cx="411" cy="167" rx="20" ry="31" />
        <ellipse cx="453" cy="205" rx="31" ry="20" transform="rotate(-8 453 205)" />
        <ellipse cx="423" cy="249" rx="20" ry="31" transform="rotate(-20 423 249)" />
        <ellipse cx="373" cy="230" rx="31" ry="20" transform="rotate(18 373 230)" />
        <ellipse cx="374" cy="183" rx="20" ry="31" transform="rotate(-38 374 183)" />
      </g>
      <circle className="botanical-art__dot" cx="77" cy="229" r="9" />
      <circle className="botanical-art__dot" cx="316" cy="354" r="7" />
      <circle className="botanical-art__dot" cx="451" cy="327" r="11" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="#top" aria-label={`${siteContent.identity.name} home`}>
          {siteContent.identity.initials}<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="site-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#approach">How I work</a></li>
            <li><a href="#mentorship">Mentorship</a></li>
            <li><a className="site-nav__contact" href="#connect">Connect</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{siteContent.hero.eyebrow}</p>
        <h1 id="hero-title">{siteContent.identity.name}<span aria-hidden="true">.</span></h1>
        <p className="hero__role">
          {siteContent.identity.role}
          <span aria-hidden="true">&middot;</span>
          {siteContent.identity.company}
        </p>
        <p className="hero__tagline">{siteContent.hero.title}</p>
        <p className="hero__intro">{siteContent.hero.intro}</p>
        <div className="button-row">
          <a className="button button--primary" href={siteContent.links.linkedin}>
            Connect on LinkedIn
            <span aria-hidden="true"> &rarr;</span>
          </a>
          <a className="button button--secondary" href="#about">Get to know me</a>
        </div>
      </div>
      <div className="hero__art">
        <div className="hero__art-backdrop" aria-hidden="true" />
        <BotanicalArt />
        <p className="hero__note">
          <span aria-hidden="true">*</span>
          Software with people at the center
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section--tinted" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 id="about-title">Coding is a tool. Helping people is the goal.</h2>
        </div>
        <div className="about__copy">
          {siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section container" id="approach" aria-labelledby="strengths-title">
      <div className="section-heading">
        <p className="eyebrow">How I approach the work</p>
        <h2 id="strengths-title">Clear information, thoughtful plans, and people working together.</h2>
      </div>
      <div className="strength-grid">
        {siteContent.strengths.map((strength, index) => (
          <article className="strength-card" key={strength.title}>
            <span className="strength-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{strength.title}</h3>
            <p>{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="section section--mentorship" id="mentorship" aria-labelledby="mentorship-title">
      <div className="container mentorship">
        <div className="mentorship__heading">
          <p className="eyebrow">For students and new graduates</p>
          <h2 id="mentorship-title">{siteContent.mentorship.title}</h2>
        </div>
        <div className="mentorship__content">
          {siteContent.mentorship.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href={siteContent.links.linkedin}>
            Contact me on LinkedIn
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section className="section section--connect" id="connect" aria-labelledby="connect-title">
      <BotanicalArt className="botanical-art--connect" />
      <div className="container connect">
        <p className="eyebrow eyebrow--light">Let's connect</p>
        <h2 id="connect-title">Want to continue the conversation?</h2>
        <p>
          Whether you are a recruiter, a fellow engineer, or a student finding your
          path, send me a note with your LinkedIn connection request and tell me what
          brought you here.
        </p>
        <a className="button button--light" href={siteContent.links.linkedin}>
          Find me on LinkedIn
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>&copy; {new Date().getFullYear()} {siteContent.identity.name}</p>
        <div className="site-footer__links">
          <a href={siteContent.links.github}>GitHub</a>
          <a href={siteContent.links.linkedin}>LinkedIn</a>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top">
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Strengths />
          <Mentorship />
          <Connect />
        </main>
        <Footer />
      </div>
    </>
  );
}
