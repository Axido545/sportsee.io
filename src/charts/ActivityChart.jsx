import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function ActivityChart({sessions}) {
  console.log("Sessions:", sessions);

  return (
    <div style={{ position: 'relative', top: '200px', left: '165px' }}>
    <BarChart
      width={611}
      height={320}
      data={sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      radius={[20, 20, 0, 0]}
       maxBarSize={10}
       top={200}
       position="absolute"
       left={-229}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="index" />
      <YAxis domaine={[0,10]} type='number' orientation="right"   />
      <Tooltip  />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" />
      <Bar dataKey="calories"  fill="#FF0101" />
    </BarChart>
    </div>
  );
}
