import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casey Christensen — Senior Software Engineer & Engineering Leader" },
      {
        name: "description",
        content:
          "Portfolio of Casey Christensen: senior full-stack engineer and engineering leader specializing in React, TypeScript, AI tooling, and WCAG accessibility.",
      },
      { property: "og:title", content: "Casey Christensen — Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineering, custom AI agents and MCP servers, and accessible web applications built with React and TypeScript.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    title: "AI & Automation",
    items: ["Copilot", "MCP Servers", "Custom AI Agents", "Agent Skills", "Prompt Engineering"],
  },
  {
    title: "Languages",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "C#", "C++", "SQL", "XAML"],
  },
  {
    title: "Tools & Cloud",
    items: ["Azure", "Jenkins", "Azure DevOps", "Webpack & Vite", "Git/GitHub", "Expo"],
  },
  {
    title: "Core Competencies",
    items: [
      "Web Accessibility (WCAG)",
      "Full-Stack Dev",
      "Mobile Dev",
      "Engineering Leadership",
      "Scrum Master",
    ],
  },
];

const experience = [
  {
    role: "Senior Full-Stack Software Engineer / Engineering Leader",
    company: "CompTIA",
    period: "11/2020 — Present",
    points: [
      "Built an internal Model Context Protocol (MCP) server that runs scripts and generates targeted prompts, letting teams automate and accelerate content creation.",
      "Develop custom AI skills and agents to optimize engineering workflows, using GitHub Copilot daily to increase delivery speed.",
      "Lead accessibility initiatives, refactoring web applications for strict WCAG compliance.",
      "Architect and deploy cloud solutions and integrations on Microsoft Azure.",
      "Mentor developers and step into engineering leadership to drive cross-team collaboration.",
      "Build browser-based desktop simulations in React and TypeScript, and source-to-source compilers that modernize legacy code.",
      "Own build pipelines across Webpack, Jenkins, Bitbucket, and Azure DevOps; write automated tests and shared React components.",
    ],
  },
  {
    role: "Software Engineer 2",
    company: "Ivanti",
    period: "10/2017 — 11/2020",
    points: [
      "Delivered solutions across web, desktop, and Android applications.",
      "Shipped features that cut customer implementation time from months to a few hours.",
      "Added automated functional and unit tests that improved product quality and testing speed.",
      "Customized WebView experiences with themes and styling in CSS, HTML, and JavaScript.",
      "Wrote JavaScript library templates for easy product customization.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "U.S. Air Force",
    period: "5/2016 — 10/2017",
    points: [
      "WPF development in C# and XAML within an Agile/Scrum environment.",
      "Designed a new architecture for moving-map software, improving maintainability.",
      "Maintained, enhanced, and reworked a large-scale application.",
    ],
  },
  {
    role: "Applications Engineer",
    company: "Canyon School District",
    period: "5/2015 — 9/2015",
    points: [
      "Full-stack development with JavaScript, HTML, CSS, SQL, and ColdFusion.",
      "Built 4 new applications, remodeled 3, and maintained 15.",
    ],
  },
];

const stats = [
  { value: "10+", label: "Years shipping software" },
  { value: "MCP", label: "Internal AI server built" },
  { value: "WCAG", label: "Accessibility-first delivery" },
  { value: "3.53", label: "GPA, BS Computer Engineering" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-bold tracking-widest uppercase">
            Casey<span className="text-primary">.</span>Christensen
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-foreground" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="mailto:christensen303@gmail.com"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="aurora relative overflow-hidden">
          <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
            <p className="font-mono text-xs tracking-[0.35em] text-primary uppercase">
              Gunnison, Utah · Available for new roles
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] font-bold md:text-7xl">
              Senior software engineer building{" "}
              <span className="text-gradient">AI-powered, accessible</span> web products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              I lead teams and ship full-stack systems — custom AI agents and MCP servers, React and
              TypeScript applications, and cloud architecture on Azure — with WCAG compliance baked
              in from the start.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View experience
              </a>
              <a
                href="https://christensen303.github.io/Portfolio/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Older portfolio
              </a>
            </div>

            <dl className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="surface-card p-5">
                  <dt className="font-display text-3xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <SectionHeading eyebrow="Toolkit" title="Skills & technologies" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title} className="surface-card p-7">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <SectionHeading eyebrow="Track record" title="Work experience" />
          <div className="mt-12 space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="surface-card p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-primary">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects + education */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <SectionHeading eyebrow="Beyond the day job" title="Projects & education" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="surface-card p-8">
              <span className="font-mono text-xs tracking-widest text-accent uppercase">
                Lead Developer
              </span>
              <h3 className="mt-3 text-2xl font-semibold">GritKit — Mobile Application</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                An outdoor survival app built with Expo, Replit, and GitHub. AI-driven master prompts
                generate dynamic daily survival tips and structured guides that work offline for
                navigation in the backcountry.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Expo", "React Native", "AI Prompting", "Offline-first"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="surface-card p-8">
              <span className="font-mono text-xs tracking-widest text-accent uppercase">
                Education
              </span>
              <h3 className="mt-3 text-2xl font-semibold">BYU-Idaho</h3>
              <p className="mt-2 text-primary">BS, Computer Engineering · 2013 – 2016</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Graduated with a 3.53/4.0 GPA, with a focus on systems, software architecture, and
                low-level fundamentals that still shape how I design applications today.
              </p>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-12 pb-28">
          <div className="surface-card relative overflow-hidden p-10 text-center md:p-16">
            <h2 className="text-4xl font-bold md:text-5xl">
              Let's build something <span className="text-gradient">worth shipping</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to senior engineering and engineering leadership roles. The fastest way to reach
              me is email or a phone call.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:christensen303@gmail.com"
                className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                christensen303@gmail.com
              </a>
              <a
                href="tel:+18017078698"
                className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                801-707-8698
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Casey Christensen</p>
          <p className="font-mono text-xs">Gunnison, Utah · Senior Software Engineer</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.35em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h2>
      <div className="mt-6 h-px w-24 bg-primary" />
    </div>
  );
}
