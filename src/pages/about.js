import SectionPage from '@/components/SectionPage'

export default function AboutPage() {
  return (
    <SectionPage
      active="about"
      title="About"
      description="Undergraduate researcher focusing on computational sciences, mathematical biology, and quantum computing."
      items={[
        {
          status: 'Profile',
          title: 'Academic Background',
          description: 'Undergraduate researcher based in South Korea, exploring the intersections of rigorous mathematics, digital healthcare, and quantum algorithms.',
        },
        {
          status: 'Community',
          title: '수학의 즐거움 (Enjoying Math)',
          description: 'Active participant across multiple study cohorts: 기초부터 대학원 수학(7기), 일변수 미적분학(2기), 증명 기초(3기), 양자컴퓨팅 수학, 직장인·문과생 수학(4.5기 발췌반).',
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
