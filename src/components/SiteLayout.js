import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAV_ITEMS, SITE } from '@/data/site'

function NavLink({ item, currentPath }) {
  let active = false
  if (item.href === '/') {
    active = currentPath === '/'
  } else if (!item.external) {
    active = currentPath.startsWith(item.href)
  }

  const className = `transition-all pb-0.5 ${
    active
      ? 'text-zinc-950 font-bold border-b-2 border-zinc-900'
      : 'text-zinc-500 hover:text-zinc-900 font-medium'
  }`

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

export default function SiteLayout({ title = SITE.title, description = SITE.description, children }) {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>

      <div className="min-h-screen bg-white text-zinc-900">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-2 pt-2 border-b border-zinc-200">
          <div className="mx-auto flex min-h-12 w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 font-mono text-sm" aria-label="Primary navigation">
              <Link href="/" className="font-semibold text-zinc-900 mr-2 flex items-center gap-2">
                <span>{SITE.name}</span>
              </Link>
              <div className="h-4 w-px bg-zinc-200 hidden sm:block" aria-hidden="true" />
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.key} item={item} currentPath={currentPath} />
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <header className="mb-10 pb-6 border-b border-zinc-200">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 text-center font-mono text-xs text-zinc-400 sm:px-6 lg:px-8 border-t border-zinc-100 mt-16">
      <p>&copy; 2026 {SITE.name}. Portfolio & Research Ecosystem.</p>
    </footer>
  )
}
