import SectionPage from '@/components/SectionPage'

export default function ReviewsPage() {
  return (
    <SectionPage
      active="reviews"
      title="Reviews"
      description="Reviews of books, papers, lectures, tools, and resources, organized around what each source changed or clarified."
      items={[
        {
          status: 'empty shell',
          title: 'Book Reviews',
          description: 'Long-form reading notes and recommendations can be collected here.',
        },
        {
          status: 'empty shell',
          title: 'Paper and Lecture Reviews',
          description: 'Review-style summaries that are broader than a single research note.',
        },
      ]}
    />
  )
}

