import { useState } from 'react'
import Link from 'next/link'
import SiteLayout, { Footer, PageHero } from '@/components/SiteLayout'
import { ALL_LOGS, LOG_TAGS } from '@/data/logs'

export default function LogsPage() {
  const [activeTag, setActiveTag] = useState('All')

  const filteredLogs = activeTag === 'All'
    ? ALL_LOGS
    : ALL_LOGS.filter((log) => log.tag === activeTag)

  return (
    <SiteLayout 
      active="logs" 
      title="Study & Dev Logs - Dongwoo Lee" 
      description="A living timeline of study progress in the 'Enjoying Math' community, daily logs, and interactive math canvas visualizations."
    >
      <PageHero 
        eyebrow="Portfolio section" 
        title="Study & Dev Logs" 
        description="A living timeline of study progress in the 'Enjoying Math' community, daily logs, and interactive math canvas visualizations." 
      />

      <section className="panel">
        <div className="panel-header flex flex-wrap items-center justify-between gap-3">
          <h2>Archive Feed</h2>
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs" aria-label="Filter logs by tag">
            {LOG_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTag === tag
                    ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
                }`}
              >
                {tag}
                <span className="ml-1.5 opacity-60">
                  {tag === 'All' ? ALL_LOGS.length : ALL_LOGS.filter((l) => l.tag === tag).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="panel-body grid gap-4">
          {filteredLogs.map((log) => (
            <article key={log.id} className="project-card transition-all">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-xs uppercase text-muted">{log.status}</p>
                <span className="font-mono text-xs text-zinc-400">{log.date}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-fg">{log.title}</h3>
              <div className="mt-3 text-sm text-muted">{log.content}</div>
            </article>
          ))}

          {filteredLogs.length === 0 && (
            <div className="p-8 text-center text-sm font-mono text-zinc-400">
              No logs found for tag &quot;{activeTag}&quot;.
            </div>
          )}
        </div>
      </section>

      <div className="h-8" />

      <section className="panel">
        <div className="panel-body flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>새 로그는 스터디·실험 진행에 따라 월별 모듈에 추가됩니다.</p>
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
