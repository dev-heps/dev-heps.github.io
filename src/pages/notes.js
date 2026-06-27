import SectionPage from '@/components/SectionPage'

export default function NotesPage() {
  return (
    <SectionPage
      active="notes"
      title="Notes"
      description="Short technical notes and unfinished knowledge fragments that do not yet belong in a formal archive."
      items={[
        {
          status: 'empty shell',
          title: 'Technical Notes',
          description: 'Small explanations, snippets, and observations will live here.',
        },
        {
          status: 'empty shell',
          title: 'Study Fragments',
          description: 'Brief learning records that are too small for Math Archive or Research Notes.',
        },
      ]}
    />
  )
}

