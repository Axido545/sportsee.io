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
    <BarChart
      width={835}
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
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="day" />
      <YAxis domaine={[0,10]} type='numer'  />
      <Tooltip  />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" />
      <Bar dataKey="calories"  fill="#FF0101" />
    </BarChart>
  );
}
