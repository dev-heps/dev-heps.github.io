import Link from 'next/link'
import SiteLayout, { Footer, PageHero } from '@/components/SiteLayout'
import ResearchVisualCanvas from '@/components/ResearchVisualCanvas'
import { SITE, SOCIALS } from '@/data/site'

const RESEARCH_PILLARS = [
  {
    mode: 'lorenz',
    tag: 'Pure & Applied Math',
    title: 'Mathematics & Formal Proofs',
    badge: 'Lean 4 / Analysis / Algebra',
    description:
      'Exploring the rigorous foundations of pure mathematics with a particular focus on interactive theorem proving using Lean 4. Investigating how formal verification bridges intuitive mathematical structures and computational correctness.',
    links: [
      { label: 'Explore Math Archive →', href: '/math/' }
    ]
  },
  {
    mode: 'biology',
    tag: 'Biomedical Modeling',
    title: 'Mathematical Biology & Healthcare',
    badge: 'Biosignals / Nonlinear Dynamics / Medical AI',
    description:
      'Applying mathematical modeling, differential equations, and statistical machine learning to complex physiological systems, biomedical signals, and healthcare datasets to uncover underlying biological mechanisms.',
    links: [
      { label: 'Read Research Notes →', href: '/research/' }
    ]
  },
  {
    mode: 'bloch',
    tag: 'Quantum Information',
    title: 'Quantum Computing & Algorithms',
    badge: 'Qubit Dynamics / Quantum Circuits',
    description:
      'Studying the mathematical formalism of quantum states, unitary transformations, and quantum information processing. Investigating quantum algorithms and their computational advantages in scientific simulations.',
    links: [
      { label: 'View Computational Tools →', href: '/projects/' }
    ]
  },
]

export default function AboutPage() {
  return (
    <SiteLayout active="about" title="About - Dongwoo Lee" description="Undergraduate student focusing on digital healthcare, mathematics, and quantum computing.">
      <PageHero
        eyebrow="Profile & Philosophy"
        title="About"
        description="Undergraduate researcher exploring the intersections of rigorous mathematics, digital healthcare, and quantum computing."
      />

      {/* ── 1. The Journey ── */}
      <section className="panel mb-8">
        <div className="panel-header">
          <h2 className="text-xl font-semibold tracking-tight text-fg">The Journey</h2>
        </div>
        <div className="panel-body space-y-6 text-zinc-700 leading-relaxed">
          <p className="text-base sm:text-lg text-zinc-900 font-medium leading-relaxed">
            &ldquo;My academic path has been a round trip: starting from pure mathematical curiosity, expanding into engineering and medical AI, and returning to the foundational rigor of mathematics.&rdquo;
          </p>

          <p>
            Driven by an early fascination with mathematical elegance, I initially envisioned dedicating myself purely to the mathematical sciences. Later, eager to see abstract concepts make an impact in the real world, I spent three intensive years studying computer science, machine learning, and digital healthcare.
          </p>

          <p>
            During those years of building data pipelines and experimenting with medical AI models, I realized that the most challenging real-world problems inevitably require a deeper mathematical understanding. This insight brought me full circle. Today, I combine computational engineering skills with deep mathematical inquiry, aiming to build a lifelong career at the frontier of theoretical rigor and scientific computation.
          </p>
        </div>
      </section>

      {/* ── 2. Core Research Pillars with Interactive Canvas ── */}
      <div className="mb-8">
        <div className="mb-4 px-1">
          <h2 className="text-lg font-mono font-semibold text-fg tracking-tight">Core Research Pillars</h2>
          <p className="text-sm text-muted">Hover over each card to interact with the real-time simulation canvas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESEARCH_PILLARS.map((pillar) => (
            <article key={pillar.title} className="panel group flex flex-col justify-between hover:border-zinc-400 transition-all duration-300">
              <div>
                {/* Canvas Visual Header */}
                <div className="h-44 w-full bg-zinc-50 border-b border-edge relative overflow-hidden flex items-center justify-center">
                  <ResearchVisualCanvas mode={pillar.mode} />
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[11px] font-mono rounded bg-white/90 border border-edge text-zinc-600 shadow-sm backdrop-blur-sm">
                    {pillar.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="text-xs font-mono text-blue-600 font-medium mb-1.5">{pillar.badge}</p>
                  <h3 className="text-base font-bold text-fg mb-2.5">{pillar.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{pillar.description}</p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 pt-2">
                {pillar.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center text-xs font-mono text-zinc-900 font-medium hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── 3. Community & Philosophy ── */}
      <section className="panel mb-8">
        <div className="panel-header">
          <h2 className="text-xl font-semibold tracking-tight text-fg">Community &amp; Open Knowledge</h2>
        </div>
        <div className="panel-body space-y-4 text-zinc-700 leading-relaxed text-sm sm:text-base">
          <p>
            I am an active participant in the{' '}
            <a
              href="https://www.youtube.com/@enjoyingmath9346"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-950 underline underline-offset-4 hover:text-blue-600 transition-colors"
            >
              수학의 즐거움 (Enjoying Math)
            </a>{' '}
            academic community. We believe in asking fundamental questions, discussing mathematical nuances across disciplines, and nurturing collective learning from foundational undergraduate math to advanced graduate studies.
          </p>
          <p>
            This website and its companion archives (<a href="/math/" className="font-mono text-zinc-900 hover:underline">/math</a> and <a href="/research/" className="font-mono text-zinc-900 hover:underline">/research</a>) serve as an open laboratory. Rather than keeping study notes private, I document derivations, formal proofs, and literature reviews publicly to contribute to open scientific discourse.
          </p>
        </div>
      </section>

      {/* ── 4. Contact & Collaboration ── */}
      <section className="panel mb-8">
        <div className="panel-header">
          <h2 className="text-xl font-semibold tracking-tight text-fg">Get in Touch</h2>
        </div>
        <div className="panel-body flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
          <div className="text-muted leading-relaxed">
            <p>Always open to collaborative discussions, academic study groups, and research inquiries.</p>
            <p className="mt-1 font-mono text-zinc-900">Email: <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a></p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-mono font-medium rounded-lg border border-edge hover:bg-zinc-100 transition-colors text-zinc-900"
              >
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </SiteLayout>
  )
}
