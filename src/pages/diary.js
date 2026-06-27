import SectionPage from '@/components/SectionPage'

export default function DiaryPage() {
  return (
    <SectionPage
      active="diary"
      title="Diary"
      description="Personal logs, study process notes, and reflective writing separated from technical archives."
      items={[
        {
          status: 'empty shell',
          title: 'Daily Logs',
          description: 'Short dated records and personal progress notes can be added here.',
        },
        {
          status: 'empty shell',
          title: 'Reflections',
          description: 'Longer reflective entries can sit here without mixing into research or project pages.',
        },
      ]}
    />
  )
}

