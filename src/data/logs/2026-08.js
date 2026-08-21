import MathCanvas from '@/components/MathCanvas'

export const logs202608 = [
  {
    id: '2026-08-21',
    date: '2026-08-21',
    tag: 'Daily Log',
    status: 'Daily Log · 2026-08-21',
    title: 'Completeness Axiom & Cartesian Coordinate Mapping',
    content: (
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
]
