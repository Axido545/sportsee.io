import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "./scorechart.css"


export default function ScoreChart({ score }) {
  console.log(score)
  // Vérifier si score et score.value sont définis
  if (!score || !score.value) {
    return <div>Score non disponible</div>;
  }
  return <div className="score-chart"
  // style={{ zIndex: "10", color: 'black', position: "absolute", top: '500px', backgroundColor: '#FBFBFB' }}
  ><p>Score</p>
    <RadialBarChart width={200} height={200} cx={100} cy={120} innerRadius={60} outerRadius={80} barSize={10} data={[score]} startAngle={60} endAngle={216}>
      <RadialBar dataKey="value" fill="#FF0000" radius={10} />
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
    </RadialBarChart>
    <p className='score-title'>{score.value}%<br /> de votre objectif</p>
  </div>
}

