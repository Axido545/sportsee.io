import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ActivityChart({ sessions }) {
  console.log("Sessions:", sessions);

  return (
    <div style={{
      backgroundColor: '#FBFBFB',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
      padding: '2px',
      position: 'relative',
      top: '80px',
      left: '-55px'
    }}>
      <p style={{
        fontSize: "11px",
        top: '-10px',
        left: '20px',
        position: 'absolute',
        fontWeight: 'bold'
      }}>Activité quotidienne</p>
      <BarChart
        width={561}
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
        <XAxis dataKey={sessions && sessions.index} />
        <YAxis domaine={[0, 10]} type='number' orientation="right" />
        <Tooltip />

        <Legend
          verticalAlign="top"
          align="right"
          height={36}
          width={296}
          iconSize={10}
          wrapperStyle={{
            top: 0,
            right: 0,
            fontSize: "10px"
          }}
          payload={[
            { id: 'kilogram', value: 'Poids (kg)', type: 'circle', color: '#282D30' },
            { id: 'calories', value: 'Calories Calories brûlées (kCal)', type: 'circle', color: '#FF0101' },
          ]}
          fontSize={7}
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#FF0101" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
}
