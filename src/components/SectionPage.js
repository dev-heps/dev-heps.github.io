import Link from 'next/link'
import SiteLayout, { Footer, PageHero } from '@/components/SiteLayout'

export default function SectionPage({ active, title, description, items = [], placeholder = null }) {
  return (
    <SiteLayout active={active} title={`${title} - Dongwoo Lee`} description={description}>
      <PageHero eyebrow="Portfolio section" title={title} description={description} />

      <section className="panel">
        <div className="panel-header">
          <h2>{title}</h2>
        </div>
        <div className="panel-body grid gap-3">
          {items.map((item) => (
            <article key={item.title} className="project-card">
              <p className="font-mono text-xs uppercase text-muted">{item.status}</p>
              <h3 className="mt-2 text-base font-semibold text-fg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="h-8" />

      <section className="panel">
        <div className="panel-body flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          {placeholder && <p>{placeholder}</p>}
          <Link href="/" className="font-mono text-xs text-fg hover:underline underline-offset-4">
            Back to Portfolio
          </Link>
        </div>
      </section>

      <div className="h-8" />
      <Footer />
      <div className="h-12" />
    </SiteLayout>
  )
}
