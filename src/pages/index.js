import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import { ARCHIVES, LANGUAGES, SITE, SOCIALS, TOOLS } from '@/data/site'

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Profile Section */}
      <section className="mb-14 pb-10 border-b border-zinc-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Undergraduate Researcher
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              {SITE.name}
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-200">
                <span>📍</span> {SITE.location}
              </span>
              <a 
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-1.5 bg-zinc-50 hover:bg-zinc-100 transition-colors px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-700"
              >
                <span>✉️</span> {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Knowledge & Research Archives */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">Knowledge & Research Archives</h2>
          <span className="font-mono text-xs text-zinc-400">4 Active Hubs</span>
        </div>

        <div className="math-grid">
          {ARCHIVES.map((arch) => {
            const isExt = !arch.href.startsWith('/')
            const linkProps = isExt ? { target: '_blank', rel: 'noopener noreferrer' } : {}
            
            return (
              <Link 
                key={arch.name} 
                href={arch.href} 
                className="math-card group"
                {...linkProps}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="math-card-eyebrow mb-0">{arch.name}</span>
                  <span className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all text-sm font-mono">↗</span>
                </div>
                <span className="math-card-title">{arch.name}</span>
                <span className="math-card-desc flex-1">{arch.description}</span>
                {arch.repo && (
                  <span className="mt-4 pt-3 border-t border-zinc-100 font-mono text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                    Source: GitHub ↗
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Technical Stack & Scientific Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Languages & Scientific Tools</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-6">
          {LANGUAGES.map((lang) => (
            <div 
              key={lang.name} 
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
            >
              {lang.icon ? (
                <i className={`${lang.icon} text-2xl mb-1.5`} />
              ) : lang.img ? (
                <img src={lang.img} alt={lang.name} className="w-6 h-6 mb-1.5 object-contain" />
              ) : null}
              <span className="font-mono text-xs font-medium text-zinc-700">{lang.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TOOLS.map((tool) => (
            <div 
              key={tool.name} 
              className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-zinc-50/50"
            >
              {tool.icon ? (
                <i className={`${tool.icon} text-xl`} />
              ) : null}
              <span className="font-mono text-xs font-semibold text-zinc-800">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social & Profiles */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Profiles & Social</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {SOCIALS.map((soc) => (
            <a
              key={soc.name}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {soc.icon ? (
                  <i className={`${soc.icon} text-lg text-zinc-700`} />
                ) : soc.img ? (
                  <img src={soc.img} alt={soc.name} className="w-4 h-4 object-contain" />
                ) : null}
                <div>
                  <div className="font-semibold text-xs text-zinc-900">{soc.name}</div>
                  <div className="font-mono text-[10px] text-zinc-400">{soc.handle}</div>
                </div>
              </div>
              <span className="text-zinc-300 group-hover:text-zinc-700 transition-colors font-mono text-xs">↗</span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
