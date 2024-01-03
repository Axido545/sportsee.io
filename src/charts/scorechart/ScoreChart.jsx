import { RadialBarChart, RadialBar } from 'recharts';
import "./scorechart.css"

export default function ScoreChart({ score }) {
  console.log(score)
  if (!score || !score.value) {
    return <div>Score non disponible</div>;
  }
  return <div className="score-chart"
  ><div className='chart-name'>Score</div>
    <p className='score-title'><span className='score-value'>{score.value}%</span> de votre objectif</p>
    <RadialBarChart style={{ borderRadius: '15px' }}
      width={160} cornerRadius="50%" radius={30} height={150} cx={93} cy={90} zIndex={10} Position="absolute" innerRadius={50} outerRadius={110} barSize={10} data={[score]} startAngle={60} endAngle={score.value + 150}>
      <RadialBar dataKey="value" fill="#FF0000" cornerRadius="100%" background={{ fill: '#FF0000', cornerRadius: "50%" }}
      />
    </RadialBarChart>
  </div >
}

