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
      title="Notes & Logs - Dongwoo Lee" 
      description="A living timeline of study progress in the 'Enjoying Math' community, technical notes, and interactive math canvas visualizations."
    >
      <PageHero 
        eyebrow="Portfolio section" 
        title="Notes & Logs" 
        description="A living timeline of study progress in the 'Enjoying Math' community, technical notes, and interactive math canvas visualizations." 
      />

      <section className="panel">
        <div className="panel-header flex flex-wrap items-center justify-between gap-3">
          <h2>Archive Feed</h2>
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs" aria-label="Filter logs by tag">
            {LOG_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTag === tag
                    ? 'bg-zinc-900 text-white shadow-md ring-2 ring-zinc-900/20'
                    : 'bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tag}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeTag === tag ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-500'}`}>
                  {tag === 'All' ? ALL_LOGS.length : ALL_LOGS.filter((l) => l.tag === tag).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="panel-body mt-6">
          {filteredLogs.length > 0 ? (
            <div className="relative border-l border-zinc-200 ml-4 md:ml-6 pb-4">
              {filteredLogs.map((log, idx) => (
                <div key={log.id} className={`relative pl-8 md:pl-10 ${idx === filteredLogs.length - 1 ? 'mb-0' : 'mb-10'}`}>
                  {/* Timeline Glowing Dot */}
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 ring-4 ring-white" />
                  
                  {/* Glassmorphism Card */}
                  <article className="group relative p-5 rounded-2xl border border-zinc-200/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-zinc-300 hover:-translate-y-1 transition-all duration-300 ease-out">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-medium text-zinc-500">{log.date}</span>
                        {log.tag && (
                          <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-mono text-zinc-600 border border-zinc-200">
                            {log.tag}
                          </span>
                        )}
                      </div>
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md ${
                        log.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                        log.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                        'bg-zinc-100 text-zinc-500 border border-zinc-200'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-zinc-800 group-hover:text-zinc-950 transition-colors mb-2">
                      {log.title}
                    </h3>
                    <div className="text-sm text-zinc-600 leading-relaxed prose prose-sm max-w-none">
                      {log.content}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-sm font-mono text-zinc-400 border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50">
              No logs found for tag &quot;{activeTag}&quot;.
            </div>
          )}
        </div>
      </section>

      <div className="h-8" />

      <section className="panel">
        <div className="panel-body flex justify-end text-sm text-muted">
          <Link href="/" className="font-mono text-xs text-fg hover:underline underline-offset-4">
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      <div className="h-8" />
      <Footer />
      <div className="h-12" />
    </SiteLayout>
  )
}
