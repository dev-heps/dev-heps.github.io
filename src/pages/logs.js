import SectionPage from '@/components/SectionPage'

export default function LogsPage() {
  return (
    <SectionPage
      active="logs"
      title="Study & Dev Logs"
      description="A timeline of learning progress, technical reflections, study fragments, and day-to-day research notes."
      items={[
        {
          status: 'ongoing',
          title: 'Learning Process Logs',
          description: 'Daily and weekly notes on course studies, reading logs, and mathematical problem-solving processes.',
        },
        {
          status: 'tech notes',
          title: 'Quick Technical Notes',
          description: 'Short code snippets, environment configurations, and practical insights discovered while building projects.',
        },
        {
          status: 'reflections',
          title: 'Research & Life Reflections',
          description: 'Reflective thoughts on research direction, career development, and academic growth.',
        },
      ]}
    />
  )
}
