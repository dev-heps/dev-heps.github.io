import SectionPage from '@/components/SectionPage'

export default function AboutPage() {
  return (
    <SectionPage
      active="about"
      title="About"
      description="Undergraduate researcher focusing on digital healthcare, mathematics, and quantum computing."
      items={[
        {
          status: 'Profile',
          title: 'Academic Background',
          description: 'Undergraduate researcher based in South Korea, exploring the intersections of rigorous mathematics, digital healthcare, and quantum algorithms.',
        },
        {
          status: 'Community',
          title: '수학의 즐거움 (Enjoying Math)',
          description: 'Active participant in the Enjoying Math community across From Basics to Graduate Math (Cohort 7) and Math for Professionals & Non-STEM (Seminar 4.5).',
        },
        {
          status: 'Research Focus',
          title: 'Interests & Vision',
          description: 'Developing computational tools and formal models for complex real-world biological systems and quantum information processing.',
        },
        {
          status: 'Contact',
          title: 'Communication & Profiles',
          description: 'Reach out via email or connect through GitHub for collaborative research and study inquiries.',
        },
      ]}
    />
  )
}
