import SectionPage from '@/components/SectionPage'
import MathCanvas from '@/components/MathCanvas'

export default function LogsPage() {
  return (
    <SectionPage
      active="logs"
      title="Study & Dev Logs"
      description="A living timeline of study progress in the '수학의 즐거움' community, computational experiments, and research reflections."
      items={[
        {
          status: 'Daily Log · 2026-08-21',
          title: 'Completeness Axiom & Cartesian Coordinate Mapping',
          description: (
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-fg text-sm">1. Math Study: 실수의 완비성 (Completeness Axiom)</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>상계(Supremum)와 하계(Infimum)의 존재성 정리를 학습.</li>
                  <li>실수의 완비성 공리와 코시 수열의 수렴성 간의 동치 관계를 노트에 증명 및 정리함.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-fg text-sm">2. Dev & Visualization: 수학적 좌표계 캔버스 구현</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>수학적 직교 좌표계(중앙 원점, Y축 상향)를 HTML5 Canvas에 반응형으로 매핑하는 컴포넌트 개발.</li>
                  <li>
                    지수 감쇠하는 사인파 {'y = sin(x) * e^(-0.1x)'} 그래프를 동적으로 생성하여 렌더링 검증.
                  </li>
                </ul>
              </div>
              <MathCanvas 
                fn={(x) => Math.sin(x) * Math.exp(-0.1 * x)} 
                color="#2563eb"
                rangeX={[-10, 10]}
                rangeY={[-2, 2]}
                caption="Figure 1: y = sin(x) * e^(-0.1x) plotted on a responsive HTML5 Canvas"
              />
            </div>
          ),
        },
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
