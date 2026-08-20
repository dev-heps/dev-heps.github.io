import Head from 'next/head'
import Link from 'next/link'
import { NAV_ITEMS, SITE } from '@/data/site'

function NavLink({ item, active }) {
  const className = `nav-link ${active === item.key ? 'nav-link-active' : ''}`

  if (item.external) {
    return (
      <a href={item.href} className={className}>
        {item.label}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  )
}

export default function SiteLayout({ active = 'portfolio', title = SITE.title, description = SITE.description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v6.0.0/devicon.min.css" />
      </Head>

      <header className="site-header">
        <div className="site-header-inner">
          <nav className="site-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} item={item} active={active} />
            ))}
          </nav>
        </div>
      </header>

      <main className="overflow-x-hidden px-2">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </>
  )
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="panel">
      <div className="panel-body flex justify-center text-xs font-mono text-muted">
        <p>&copy; 2026 {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
