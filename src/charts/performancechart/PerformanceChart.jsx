import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import "./performancechart.css"

export default function performanceChart({ data }) {
    console.log(data)
    return <div className="performance-chart">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" width={190} position="absolute" top={10} right={10} height={180} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tickLine={false} dy={3}
                tick={{
                    fontSize: 10,
                    fontWeight: 500,
                    fill: "white",
                }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar name="Mike" dataKey="fullMark" stroke="#8884d8" fill="red" fillOpacity={0.6} legendType="none" />
        </RadarChart>
    </div>
}