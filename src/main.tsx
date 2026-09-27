import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Network,
  Mail,
  Download,
  ExternalLink,
  Database,
  CreditCard,
  ShieldCheck,
  Layers3,
  Moon,
  Sun
} from "lucide-react";
import "./portfolio.css";

type Theme = 'light' | 'dark';

const themeStorageKey = 'matthew-portfolio-theme';

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Storage may be unavailable; fall back to the system preference.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const initialTheme = getInitialTheme();
document.documentElement.dataset.theme = initialTheme;

const projects = [
  {
    title: "Cartonce",
    type: "Commerce SaaS · Production",
    description:
      "A multi-vendor commerce platform where I lead backend architecture and engineering across stores, inventory, orders, payments, logistics, staff operations and customer workflows.",
    tags: ["Laravel", "MySQL", "REST APIs", "Payments", "Multi-tenant"],
    url: "https://cartonce.com",
  },
  {
    title: "Haiven",
    type: "Business Platform · Production",
    description:
      "Backend engineering for business software, including payment integrations, wallet functionality, device control, security management, APIs and production deployments.",
    tags: ["Laravel", "MySQL", "Paystack", "DigitalOcean", "RBAC"],
    url: "https://haiven.net/",
  },
  {
    title: "Belrald",
    type: "Software Platform · Production",
    description:
      "Worked on production software using Node.js and TypeScript, with search and data systems, testing, code reviews and cross-functional delivery.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Elasticsearch"],
    url: "https://belrald.com/",
  },
  {
    title: "Aladdin",
    type: "Digital Banking · Engineering",
    description:
      "Contributed to digital banking software across PHP, Node.js, Laravel and MySQL, supporting the product lifecycle from requirements and development through deployment.",
    tags: ["PHP", "Node.js", "Laravel", "MySQL", "Cloud"],
    url: "https://aladdin.ng/",
  },
];

const stack = [
  ["Backend", "Laravel · Node.js · NestJS · Express · REST APIs"],
  ["Languages", "TypeScript · PHP · JavaScript · SQL"],
  ["Databases", "PostgreSQL · MySQL · MongoDB · Elasticsearch"],
  ["Infrastructure", "Docker · DigitalOcean · cPanel · GitHub Actions"],
  ["Testing", "Jest · Unit Testing · Integration Testing"],
  [
    "Integrations",
    "Paystack · Providus Xpress Wallet · Meta/WhatsApp · AI APIs",
  ],
];

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Keep the current selection for this page even if storage is unavailable.
    }
  }

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">
          Adeleke Matthew
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="nav-cta" href="#contact">
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main id="top">
        <div className="orb-field" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
          <span className="orb orb-4" />
        </div>

        <section className="hero container">
          <div className="eyebrow">
            <span className="dot" /> Available for backend opportunities
          </div>
          <h1>
            Backend engineer building <em>systems that work</em> in the real
            world.
          </h1>
          <p className="hero-copy">
            I’m Matthew, a software engineer with 7+ years of experience
            building production applications, APIs, SaaS platforms, integrations
            and infrastructure across fintech, commerce and business software.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View production work <ArrowUpRight size={18} />
            </a>
            <a
              className="button secondary"
              href="https://docs.google.com/document/d/1oqr2gmDQ78NMtEkDCWKfBW8wwhEu1y7B/edit?usp=sharing&ouid=105175739278887785353&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              View CV <Download size={17} />
            </a>
          </div>
          <div className="hero-meta">
            <span>7+ years engineering</span>
            <span>Backend · APIs · SaaS</span>
            <span>Remote</span>
          </div>
        </section>

        <section className="signal">
          <div className="container signal-grid">
            <div>
              <span className="signal-label">I care about</span>
              <strong>Correctness</strong>
            </div>
            <div>
              <span className="signal-label">I build</span>
              <strong>Reliable APIs</strong>
            </div>
            <div>
              <span className="signal-label">I solve</span>
              <strong>Real production problems</strong>
            </div>
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-head">
            <div>
              <span className="kicker">01 — Selected work</span>
              <h2>Production systems</h2>
            </div>
            <p>Real products and engineering work, not tutorial projects.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project" key={p.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-top">
                  <span>{p.type}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section dark">
          <div className="container">
            <div className="section-head light">
              <div>
                <span className="kicker">02 — Engineering toolkit</span>
                <h2>Built across the stack.</h2>
              </div>
              <p>Strong fundamentals first; frameworks are tools.</p>
            </div>
            <div className="stack-grid">
              {stack.map(([a, b], i) => (
                <div className="stack-item" key={a}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-head">
            <div>
              <span className="kicker">03 — Experience</span>
              <h2>From shipping features to owning systems.</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="role">
              <div className="role-date">2025 — Present</div>
              <div>
                <h3>Lead Engineer · Cartonce</h3>
                <p>
                  Leading end-to-end engineering for a multi-vendor commerce
                  SaaS platform. Backend architecture, APIs, payments, data
                  structures, access control, DevOps, production reliability and
                  technical direction.
                </p>
              </div>
            </div>
            <div className="role">
              <div className="role-date">2023 — Present</div>
              <div>
                <h3>Software Engineer & DevOps · Realang Integrated</h3>
                <p>
                  Developing and maintaining business applications with Laravel
                  and MySQL, integrating payment and wallet systems,
                  participating in code reviews and managing cloud deployments.
                </p>
              </div>
            </div>
            <div className="role">
              <div className="role-date">2022 — 2025</div>
              <div>
                <h3>Software Engineer · Belrald</h3>
                <p>
                  Built and maintained applications with Node.js, Express,
                  TypeScript, MongoDB, Algolia and Elasticsearch. Worked on
                  testing, code reviews and engineering practices.
                </p>
              </div>
            </div>
            <div className="role">
              <div className="role-date">2022</div>
              <div>
                <h3>Software Engineer · Aladdin Digital Bank</h3>
                <p>
                  Worked across PHP, Node.js, Laravel, MySQL and cloud
                  infrastructure, contributing through requirements,
                  development, testing, deployment and post-production support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study container">
          <div className="case-icon">
            <CreditCard size={26} />
          </div>
          <div>
            <span className="kicker">A backend problem I’m proud of</span>
            <h2>Multi-store checkout & payment reconciliation</h2>
            <p>
              Cartonce lets a customer buy from multiple stores in one checkout.
              I designed the backend flow to group items by store, calculate
              each store’s share and maintain the financial records required to
              reconcile the single customer payment against separate escrow
              store wallets.
            </p>
            <div className="case-points">
              <span>
                <ShieldCheck size={16} /> Data integrity
              </span>
              <span>
                <Database size={16} /> Store-level reconciliation
              </span>
              <span>
                <Layers3 size={16} /> Multi-tenant relationships
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div>
              <span className="kicker">04 — Contact</span>
              <h2>Have a backend problem worth solving?</h2>
              <p>
                I’m open to conversations about backend engineering, SaaS,
                integrations and production systems.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:developermatthews@gmail.com">
                <Mail size={18} /> Email <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/Hademath"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-adeleke-04356a222/"
                target="_blank"
                rel="noreferrer"
              >
                <Network size={18} /> LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <span>Matthew · Backend Engineer</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
