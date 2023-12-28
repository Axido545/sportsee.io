import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./performancechart.css"

export default function performanceChart({ performance }) {
    console.log(performance)
    return <div className="performance-chart"><p>performance : {performance}</p>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </div>
}