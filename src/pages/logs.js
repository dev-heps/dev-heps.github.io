import SectionPage from '@/components/SectionPage'

export default function LogsPage() {
  return (
    <SectionPage
      active="logs"
      title="Study & Dev Logs"
      description="A living timeline of study progress in the '수학의 즐거움' community, computational experiments, and research reflections."
      items={[
        {
          status: 'Enjoying Math',
          title: 'From Basics to Graduate Math',
          description: '기초부터 시작하는 대학원 수학: 집합론, 해석개론, 위상수학, 선형대수, 추상대수, 다변수해석, 측도론으로 이어지는 핵심 증명 및 과제 풀이 기록.',
        },
        {
          status: 'Enjoying Math',
          title: 'Math for Professionals & Non-STEM',
          description: '직장인과 문과생들을 위한 수학: 수학적 세계관을 직관적으로 조망하고 엄밀함과 직관의 균형을 체화하는 발췌 세미나 기록.',
        },
      ]}
      placeholder="새 로그는 스터디·실험 진행에 따라 추가됩니다."
    />
  )
}
