import SectionPage from '@/components/SectionPage'

export default function AboutPage() {
  return (
    <SectionPage
      active="about"
      title="About"
      description="A concise profile for background, contact, research interests, and site structure."
      items={[
        {
          status: 'profile',
          title: 'Background',
          description: 'Undergraduate researcher based in South Korea, focused on computational approaches to scientific problems.',
        },
        {
          status: 'focus',
          title: 'Research Interests',
          description: 'Digital healthcare, mathematical biology, quantum computing, and formal reasoning tools.',
        },
        {
          status: 'contact',
          title: 'Contact',
          description: 'Use the email and social links on the portfolio home page for contact and profiles.',
        },
      ]}
    />
  )
}

