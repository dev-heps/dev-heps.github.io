import Link from 'next/link'
import SiteLayout, { PageHero } from '@/components/SiteLayout'

export default function SectionPage({ title, description, items = [] }) {
  return (
    <SiteLayout title={`${title} - Dongwoo Lee`} description={description}>
      <PageHero eyebrow="Archive section" title={title} description={description} />

      <section className="math-grid">
        {items.map((item) => (
          <article key={item.title} className="math-card">
            <span className="math-card-eyebrow">{item.status}</span>
            <span className="math-card-title">{item.title}</span>
            <span className="math-card-desc">{item.description}</span>
          </article>
        ))}
      </section>

      <div className="theorem-box mt-10">
        <span className="theorem-label">Navigation</span>
        <p className="text-sm text-zinc-600 mt-1">
          Explore other sections or return to the main hub.
        </p>
        <div className="mt-3">
          <Link href="/" className="font-mono text-xs font-semibold text-zinc-900 hover:underline underline-offset-4">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </SiteLayout>
  )
}
