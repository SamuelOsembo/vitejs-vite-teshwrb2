import { useEffect, useState } from 'react'
import './App.css'

const services = [
  {
    n: '01',
    name: 'Bulk SMS',
    tag: 'CUSTOMER COMMUNICATION',
    desc: 'Reach your customers with clear, timely messages built for business.',
    url: 'https://olivetreehub.com/products/sms',
  },
  {
    n: '02',
    name: 'Bonga SMS+',
    tag: 'CUSTOMER ENGAGEMENT',
    desc: 'Create more engaging conversations and build stronger customer relationships.',
    url: 'https://olivetreehub.com/products/smsplus',
  },
  {
    n: '03',
    name: 'USSD',
    tag: 'MOBILE SOLUTIONS',
    desc: 'Make your services accessible through simple, interactive mobile menus.',
    url: 'https://olivetreehub.com/products/ussd',
  },
  {
    n: '04',
    name: 'OlivePay',
    tag: 'DIGITAL PAYMENTS',
    desc: 'Support smoother payment experiences for your customers and your business.',
    url: 'https://olivetreehub.com/products/olivepay',
  },
  {
    n: '05',
    name: 'Bulk Email',
    tag: 'EMAIL MARKETING',
    desc: 'Deliver campaigns, updates and important messages straight to inboxes.',
    url: 'https://olivetreehub.com/products',
  },
]

const clients = [
  { name: 'Easy Coach', type: 'TRANSPORT' },
  { name: 'Minet', type: 'INSURANCE & BENEFITS' },
  { name: 'Save', type: 'CLIENT SPOTLIGHT' },
]

function BranchArt() {
  return (
    <svg
      className="branch-svg"
      viewBox="0 0 520 470"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="270"
        cy="235"
        r="188"
        stroke="currentColor"
        strokeOpacity=".13"
      />
      <circle
        cx="270"
        cy="235"
        r="145"
        stroke="currentColor"
        strokeOpacity=".1"
      />
      <path
        d="M100 390C180 320 210 250 265 170S355 80 415 45"
        stroke="#B7E36A"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M218 251C165 250 128 220 124 184C169 180 210 205 218 251Z"
        fill="#B7E36A"
      />
      <path
        d="M245 208C226 156 244 119 277 99C299 143 281 182 245 208Z"
        fill="#7FA66A"
      />
      <path
        d="M283 157C328 163 360 140 368 105C327 96 294 120 283 157Z"
        fill="#B7E36A"
      />
      <path
        d="M178 300C126 290 92 310 77 343C119 361 158 337 178 300Z"
        fill="#7FA66A"
      />
      <path
        d="M328 111C331 69 358 44 392 40C396 79 369 107 328 111Z"
        fill="#7FA66A"
      />
      <path
        d="M205 267C243 284 267 315 265 350C225 342 203 311 205 267Z"
        fill="#B7E36A"
      />
      <ellipse
        cx="322"
        cy="266"
        rx="23"
        ry="30"
        transform="rotate(30 322 266)"
        fill="#153F32"
      />
    </svg>
  )
}

function SocialIcons() {
  return (
    <div className="footer-socials">
      <a
        href="#instagram"
        aria-label="Instagram placeholder"
        title="Add official Instagram URL"
        onClick={(event) => event.preventDefault()}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
      </a>

      <a
        href="#facebook"
        aria-label="Facebook placeholder"
        title="Add official Facebook URL"
        onClick={(event) => event.preventDefault()}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
        </svg>
      </a>

      <a
        href="#linkedin"
        aria-label="LinkedIn placeholder"
        title="Add official LinkedIn URL"
        onClick={(event) => event.preventDefault()}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5ZM9 9h3.3v1.6h.1A3.7 3.7 0 0 1 15.7 8c3.5 0 4.2 2.3 4.2 5.3v7.2h-3.4v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.5H9Z" />
        </svg>
      </a>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 .8A15 15 0 0 0 3.1 23.5L1 31l7.7-2A15 15 0 1 0 16 .8Zm0 27.3a12.2 12.2 0 0 1-6.2-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.2 12.2 0 1 1 16 28.1Zm6.7-9.1c-.4-.2-2.1-1-2.5-1.1-.3-.1-.6-.2-.8.2s-.9 1.1-1.1 1.3-.4.2-.8 0a10 10 0 0 1-3-1.9 11.2 11.2 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6s0-.5 0-.7l-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.3 3.6 1.5 3.9 2.6 4 6.4 5.6c.9.4 1.6.6 2.2.7.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.6.2-1.8s-.3-.3-.7-.5Z" />
    </svg>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('olive-tree-theme') === 'dark'
    } catch {
      return false
    }
  })

  const [menu, setMenu] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('olive-tree-theme', dark ? 'dark' : 'light')
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [dark])

  const closeMenu = () => setMenu(false)

  return (
    <main className={`site ${dark ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Olive Tree Hub home">
          <span className="brand-mark">O<span>.</span></span>
          <span className="brand-name">olive tree <b>hub</b></span>
        </a>

        <button
          className="mobile-menu-toggle"
          aria-label={menu ? 'Close menu' : 'Open menu'}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menu ? 'mobile-menu-open' : ''}`}>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? '☼' : '◐'} <span>{dark ? 'Light mode' : 'Dark mode'}</span>
          </button>

          <a className="nav-cta" href="mailto:sales@olivetreemobile.co" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><i /> SMARTER DIGITAL CONNECTIONS</p>
          <h1>Good things grow through <em>connection.</em></h1>
          <p className="hero-description">
            We help businesses connect with people, simplify payments and create
            better customer experiences through thoughtful digital solutions.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#solutions">
              Explore our solutions <span>↗</span>
            </a>
            <a className="text-link" href="#about">
              Get to know us <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <span />
            Technology that brings people and possibilities closer.
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-wash" />
          <BranchArt />

          <div className="art-card">
            <span className="art-card-icon">✳</span>
            <div>
              <b>Built around connection</b>
              <small>People first. Technology with purpose.</small>
            </div>
          </div>

          <div className="art-label">GROW WITH PURPOSE <span>↗</span></div>
        </div>
      </section>

      <section className="solutions section-pad" id="solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>The right tools.<br /><em>Real possibilities.</em></h2>
          </div>
          <p className="section-intro">
            Practical digital solutions to help you communicate clearly,
            engage customers and make everyday interactions easier.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <a
              className="service-card"
              href={service.url}
              key={service.n}
              target="_blank"
              rel="noreferrer"
            >
              <div className="service-top">
                <span>{service.n}</span>
                <span className="service-arrow">↗</span>
              </div>
              <p className="service-category">{service.tag}</p>
              <h3>{service.name}</h3>
              <p className="service-description">{service.desc}</p>
              <span className="service-link">Explore solution <span>→</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-symbol">O<span>.</span></div>

        <div className="about-content">
          <p className="eyebrow">A PARTNER IN YOUR GROWTH</p>
          <h2>Technology should make business feel <em>simpler.</em></h2>
          <p>
            Great digital experiences begin with understanding people. We bring
            together tools that help businesses communicate clearly, connect
            meaningfully and serve customers better.
          </p>
          <a className="text-link" href="mailto:info@olivetreehub.com">
            Let's start a conversation <span>↗</span>
          </a>
        </div>

        <div className="about-stamp">
          <span>PEOPLE</span>
          <b>+</b>
          <span>PURPOSE</span>
          <b>+</b>
          <span>POSSIBILITY</span>
        </div>
      </section>

      <section className="client-section" aria-label="Client showcase">
        <div className="client-heading">
          <p className="eyebrow">CONNECTIONS THAT MATTER</p>
          <h2>Good work is built <em>together.</em></h2>
        </div>

        <div className="client-track-wrap">
          <div className="client-track">
            {[...clients, ...clients].map((client, index) => (
              <div className="client-card" key={`${client.name}-${index}`}>
                <span className="client-kicker">CLIENT SPOTLIGHT</span>
                <strong>{client.name}</strong>
                <span className="client-type">{client.type}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="client-note">
        We are your partners; a pat on your back and an inspirational spark. We evolve and adapt to market trends to empower your business.
        </p>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-company">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">O<span>.</span></span>
              <span className="brand-name">olive tree <b>hub</b></span>
            </a>

            <p>Thoughtful digital solutions for meaningful business connections.</p>
            <SocialIcons />
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#solutions">Our solutions</a>
            <a href="#about">About us</a>
            
          </div>

          <div className="footer-column">
            <h3>Get in touch</h3>
            <a href="mailto:sales@olivetreemobile.co">sales@olivetreemobile.co</a>
            <a href="mailto:info@olivetreehub.com">info@olivetreehub.com</a>
            <a href="tel:+254721473002">+254 721 473 002</a>
            <a href="tel:+254110090038">+254 110 090 038</a>
          </div>

          <div className="footer-column">
            <h3>Visit us</h3>
            <address>
              4th Floor, Riara Corporate Suites, Suite 406
              <br />
              Riara Road, P. O. Box 7334 - 00100
              <br />
              Nairobi, Kenya
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Olive Tree Hub. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/254716859935"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Olive Tree Hub on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  )
}
