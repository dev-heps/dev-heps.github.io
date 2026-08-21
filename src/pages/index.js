import Link from 'next/link'
import Image from 'next/image'
import SiteLayout, { Footer } from '@/components/SiteLayout'
import { LANGUAGES, SITE, SOCIALS, TOOLS } from '@/data/site'
import ProfileHeroCanvas from '@/components/ProfileHeroCanvas'

const Icons = {
  book: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
    </svg>
  ),
  pin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
  arrowUpRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ),
}



export default function Home() {
  return (
    <SiteLayout active="portfolio">
      <div className="hero-card-unit">
        <ProfileHeroCanvas className="profile-section-wrap">
          <section className="profile-hero">
            <h1 className="profile-name">{SITE.name}</h1>
            <div className="profile-rule" aria-hidden="true" />
            <p className="profile-meta">
              <span>Undergraduate Student</span>
            </p>
          </section>
        </ProfileHeroCanvas>

        <section className="panel profile-info-panel">
          <div className="panel-body space-y-3">
            <div className="info-row">
              <div className="info-icon">{Icons.book}</div>
              <p>Digital Healthcare / Mathematics / Quantum Computing</p>
            </div>
            <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
              <div className="info-row">
                <div className="info-icon">{Icons.pin}</div>
                <p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Dongtan+Station" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                    {SITE.location}
                  </a>
                </p>
              </div>
              <div className="info-row">
                <div className="info-icon">{Icons.mail}</div>
                <p>
                  <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="panel">
        <h2 className="sr-only">Social Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {SOCIALS.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${index < SOCIALS.length - 1 ? 'border-b border-edge sm:border-b-0' : ''} ${index % 2 === 0 ? 'sm:border-r sm:border-edge' : ''}`}
            >
              <div className="social-icon">
                {social.icon && <i className={`${social.icon} text-2xl`} aria-hidden="true" />}
                {social.img && <Image src={social.img} alt={social.name} width={28} height={28} className="object-contain" unoptimized />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-fg text-sm">{social.name}</h3>
                <p className="text-xs text-muted truncate">{social.handle}</p>
              </div>
              <span className="text-muted shrink-0">{Icons.arrowUpRight}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="h-8" />



      <section className="panel" id="about">
        <div className="panel-header">
          <h2>About</h2>
        </div>
        <div className="panel-body">
          <div className="text-muted leading-relaxed space-y-4">
            <p>
              My academic journey has been something of a round trip. Driven by an early love for mathematics, I initially planned to pursue it full-time before pivoting to engineering. After spending three years studying medical AI and computer science, I&apos;ve come full circle and am now rededicating myself to mathematical studies.
            </p>
            <p>
              I am also an active member of the{' '}
              <a href="https://www.youtube.com/@enjoyingmath9346" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-black transition-colors">
                Enjoying Math
              </a>{' '}
              community. These days, my main focus is bridging my technical background with my passion for math—and figuring out how to build a sustainable, lifelong career doing what I genuinely enjoy.
            </p>
          </div>
        </div>
      </section>

      <div className="h-8" />

      <section className="panel" id="stack">
        <div className="panel-header">
          <h2>Stack</h2>
        </div>
        <div className="panel-body space-y-8">
          <div>
            <h3 className="font-mono text-sm font-semibold text-fg mb-4">Languages</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
              {LANGUAGES.map((skill) => (
                <div key={skill.name} className="stack-item">
                  {skill.img && <Image src={skill.img} alt={skill.name} width={64} height={64} unoptimized />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-sm font-semibold text-fg mb-4">Tools &amp; Frameworks</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3">
              {TOOLS.map((skill) => (
                <div key={skill.name} className="stack-item">
                  {skill.img && <Image src={skill.img} alt={skill.name} width={64} height={64} unoptimized />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-8" />
      <Footer />
      <div className="h-12" />
    </SiteLayout>
  )
}
