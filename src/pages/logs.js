import SectionPage from '@/components/SectionPage'

export default function LogsPage() {
  return (
    <SectionPage
      active="logs"
      title="Study & Dev Logs"
      description="A living timeline of study progress in the '수학의 즐거움' community, computational experiments, and research reflections."
      items={[
        {
          status: '수학의 즐거움 7기',
          title: '기초부터 시작하는 대학원 수학 스터디 로그',
          description: '집합론, 해석개론, 위상수학, 선형대수, 추상대수, 다변수해석, 측도론으로 이어지는 핵심 증명 및 과제 풀이 기록.',
        },
        {
          status: '수학의 즐거움 2기',
          title: '일변수 미적분학 해석학적 증명 기록',
          description: '실수 완비성 공리 및 ε-δ 논법을 통한 극한과 미적분학 기본정리(FTC)의 엄밀한 증명 노트.',
        },
        {
          status: '수학의 즐거움 3기',
          title: '증명 기초 수학 & 수학적 사고 로그',
          description: '임의의 원소 고정 시 의존성 인지, 동치관계와 몫집합(Quotient Set)을 통한 구조적 통찰 훈련.',
        },
        {
          status: '연구 스터디',
          title: '양자컴퓨팅 수학 세미나 메모',
          description: '복소 힐베르트 공간, 텐서곱, 유니타리 연산자 및 양자 알고리즘 수리 모델링 탐구 노트.',
        },
        {
          status: '수학의 즐거움 4.5기',
          title: '직장인·문과생 수학 발췌 세미나 감상',
          description: '수학적 세계관을 직관적으로 조망하고 엄밀함과 직관의 균형을 잡는 발췌 세미나 기록.',
        },
        {
          status: 'Dev Notes',
          title: '소프트웨어 엔지니어링 & 연구 도구 트러블슈팅',
          description: 'Qiskit 환경 구성, Python/Node 스크립트 빌드 자동화, KaTeX/MDX 수식 렌더링 팁.',
        },
      ]}
      placeholder="새 로그는 스터디·실험 진행에 따라 추가됩니다."
    />
  )
}
