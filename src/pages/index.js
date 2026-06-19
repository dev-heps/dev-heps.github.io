import Head from 'next/head'

/* ── Languages ── */
const LANGUAGES = [
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Lean 4', img: '/lean.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Julia', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg' },
  { name: 'R', icon: 'devicon-r-plain colored' },
  { name: 'MATLAB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
]

/* ── Tools & Frameworks ── */
const TOOLS = [
  { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
  { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'LaTeX', icon: 'devicon-latex-original' },
]

/* ── Social links ── */
const SOCIALS = [
  { name: 'LinkedIn', handle: '@dongwoolee', href: 'https://www.linkedin.com/in/dongwoo-lee-158957408', icon: 'devicon-linkedin-plain colored' },
  { name: 'GitHub', handle: '@dongwoolee', href: 'https://github.com', icon: 'devicon-github-original' },
  { name: 'YouTube', handle: '@DongwooLee', href: 'https://www.youtube.com/@DongwooLee-ti2kv', img: 'https://www.svgrepo.com/show/475700/youtube-color.svg' },
  { name: 'Instagram', handle: '@dongwoolee', href: 'https://instagram.com', img: 'https://www.svgrepo.com/show/452229/instagram-1.svg' },
]

/* ── Projects ── */
const PROJECTS = [
  {
    title: 'Physiological System Simulator',
    tag: 'Mathematical Biology',
    desc: 'Developed a Julia/Python-based ODE physiological simulator for understanding complex biological dynamics and PK/PD modeling.',
  },
  {
    title: 'Quantum Molecular Simulation',
    tag: 'Quantum Computing',
    desc: 'Built a VQE-based simulation to compute protein-ligand binding energies, exploring the potential of quantum machine learning.',
  },
  {
    title: 'Clinical Prediction Engine',
    tag: 'Digital Healthcare',
    desc: 'Created a predictive model using EHR time-series data to forecast patient readmission rates and support clinical decisions.',
  },
]

/* ── SVG Icons (inline, 16×16) ── */
const Icons = {
  book: (
    <img width="16" height="16" src="https://img.icons8.com/dotty/80/saving-book.png" alt="saving-book" style={{ opacity: 0.7 }} />
  ),
  pin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
  globe: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  ),
  arrowUpRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  ),
  search: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Dongwoo Lee – Student</title>
        <meta name="description" content="Dongwoo Lee — Student interested in Digital Healthcare, Mathematical Biology, and Quantum Computing based in South Korea." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md px-2 pt-2">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between gap-4 border-x border-edge px-4">
          {/* Nav */}
          <nav className="flex items-center gap-5">
            <a href="/" className="font-mono text-sm font-medium text-fg">Portfolio</a>
            <a href="#" className="font-mono text-sm font-medium text-muted hover:text-fg transition-colors">Blog</a>
            <a href="#" className="font-mono text-sm font-medium text-muted hover:text-fg transition-colors">Research</a>
            <a href="#" className="font-mono text-sm font-medium text-muted hover:text-fg transition-colors">Math Discussion</a>
          </nav>
        </div>
      </header>

      <main className="overflow-x-hidden px-2">
        <div className="mx-auto max-w-3xl">

          {/* ═══ COVER ═══ */}
          <div className="panel cover-pattern aspect-[3/1] flex items-center justify-center select-none">
            <span className="font-mono text-4xl font-bold tracking-widest text-fg/20">DW</span>
          </div>

          {/* ═══ PROFILE BAR ═══ */}
          <div className="flex border-x border-edge">
            {/* Avatar area */}
            <div className="shrink-0 border-r border-edge p-1">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#f4f4f5] border-2 border-edge flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-muted/40 select-none">DW</span>
              </div>
            </div>
            {/* Name + title */}
            <div className="flex flex-1 flex-col">
              <div className="flex-1 flex items-end pl-4 pb-1">
              </div>
              <div className="border-t border-edge">
                <h1 className="flex items-center gap-2 pl-4 text-2xl sm:text-3xl font-semibold">Dongwoo Lee</h1>
                <div className="h-10 border-t border-edge flex items-center pl-4">
                  <p className="font-mono text-sm text-muted">Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ OVERVIEW ═══ */}
          <section className="panel">
            <div className="panel-body space-y-3">
              {/* Role */}
              <div className="info-row">
                <div className="info-icon">{Icons.book}</div>
                <p>Digital Healthcare · Mathematical Biology · Quantum Computing</p>
              </div>
              {/* Location & Contact */}
              <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
                <div className="info-row">
                  <div className="info-icon">{Icons.pin}</div>
                  <p><a href="https://www.google.com/maps/search/?api=1&query=Dongtan+Station" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Dongtan, South Korea</a></p>
                </div>
                <div className="info-row">
                  <div className="info-icon">{Icons.mail}</div>
                  <p><a href="mailto:hepsdata@yonsei.ac.kr" className="underline-offset-4 hover:underline">hepsdata@yonsei.ac.kr</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ SOCIAL LINKS ═══ */}
          <section className="panel">
            <h2 className="sr-only">Social Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {SOCIALS.map((s, idx) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                   className={`social-link ${idx < SOCIALS.length - 1 ? 'border-b border-edge sm:border-b-0' : ''} ${idx % 2 === 0 ? 'sm:border-r sm:border-edge' : ''}`}>
                  <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-[#f4f4f5] flex items-center justify-center ring-1 ring-black/10 ring-inset">
                    {s.icon && <i className={`${s.icon} text-2xl`}></i>}
                    {s.img && <img src={s.img} alt={s.name} width="28" height="28" className="object-contain" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-fg text-sm">{s.name}</h3>
                    <p className="text-xs text-muted truncate">{s.handle}</p>
                  </div>
                  <span className="text-muted shrink-0">{Icons.arrowUpRight}</span>
                </a>
              ))}
            </div>
          </section>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ ABOUT ═══ */}
          <section className="panel" id="about">
            <div className="panel-header">
              <h2>About</h2>
            </div>
            <div className="panel-body">
              <ul className="about-list">
                <li><strong>Digital Healthcare:</strong> Analyzing EHR time-series data and biosignals (ECG/EEG) to build clinical decision support systems.</li>
                <li><strong>Mathematical Biology:</strong> Modeling physiological phenomena using ODE/PDE frameworks and simulating Pharmacokinetics/Pharmacodynamics (PK/PD).</li>
                <li><strong>Quantum Computing:</strong> Exploring Variational Quantum Eigensolver (VQE) algorithms and Quantum Machine Learning for molecular-level simulations.</li>
                <li><strong>Mission:</strong> Translating complex biological systems into mathematical frameworks, and exploring their solutions through computation to drive real-world impact.</li>
              </ul>
            </div>
          </section>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ STACK ═══ */}
          <section className="panel" id="stack">
            <div className="panel-header">
              <h2>Stack</h2>
            </div>
            <div className="panel-body space-y-8">
              <div>
                <h3 className="font-mono text-sm font-semibold text-fg mb-4">Languages</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
                  {LANGUAGES.map(skill => (
                    <div key={skill.name} className="stack-item">
                      {skill.icon && <i className={skill.icon}></i>}
                      {skill.img && <img src={skill.img} alt={skill.name} />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-sm font-semibold text-fg mb-4">Tools &amp; Frameworks</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
                  {TOOLS.map(skill => (
                    <div key={skill.name} className="stack-item">
                      {skill.icon && <i className={skill.icon}></i>}
                      {skill.img && <img src={skill.img} alt={skill.name} />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ SELECTED WORK ═══ */}
          <section className="panel" id="work">
            <div className="panel-header">
              <h2>Selected Work</h2>
            </div>
            <div className="panel-body space-y-4">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="project-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-fg">{proj.title}</h3>
                      <span className="inline-block font-mono text-xs px-2 py-0.5 rounded bg-black/5 border border-black/5 text-muted">{proj.tag}</span>
                    </div>
                    <span className="text-muted shrink-0 mt-1">{Icons.arrow}</span>
                  </div>
                  <p className="font-mono text-sm text-muted leading-relaxed mt-3">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Hatch ─── */}
          <div className="hatch-separator" />

          {/* ═══ FOOTER ═══ */}
          <footer className="panel">
            <div className="panel-body flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
              <p>© 2026 Dongwoo Lee. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-fg transition-colors">RSS</a>
                <a href="#" className="hover:text-fg transition-colors">GitHub</a>
                <a href="#" className="hover:text-fg transition-colors">LinkedIn</a>
              </div>
            </div>
          </footer>

          {/* Bottom padding */}
          <div className="h-12" />

        </div>
      </main>
    </>
  )
}
