import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, ResponsiveContainer } from 'recharts';



export default function ScoreChart({ score }) {
  console.log(score)
  return <div
    style={{ zIndex: "10", color: 'black', position: "absolute", top: '700px', backgroundColor: '#FBFBFB' }}
  >
    <p>Score={score}</p>
  </div>
}

