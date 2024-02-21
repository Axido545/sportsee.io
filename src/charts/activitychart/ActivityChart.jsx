import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./activitychart.css"
/* eslint react/prop-types: 0 */
export default function ActivityChart({ sessions }) {
  console.log("Sessions // activity chart:", sessions);

  return (
    <div className="wrap-activitychart"
    >
      <p style={{
        fontSize: "11px",
        left: '20px',
        position: 'absolute',
        fontWeight: 'bold'
      }}>Activité quotidienne</p>
      <BarChart
        width={630}
        height={280}
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
        position="relative"
        left={-229}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey={sessions}
        />
        <YAxis domaine={[0, 10]} type='number' orientation="right" />
        <Tooltip
          itemStyle={{
            color: "#E60000",
            fontSize: 3,
            fontWeight: 500,
            width: "12px",
            height: "40px"
          }}
          cursor={{
            fill: "rgba(196, 196, 196, 0.5)",
          }}
          labelStyle={{ display: "none" }}
          wrapperStyle={{ outlineStyle: "none" }}
          contentStyle={{
            backgroundColor: "#E60000",
          }}
          formatter={(value) => {
            if (value < 100) {
              return <div className="kg-toolips" >{`${value} kg`}</div>;
            } else if (value > 100) {
              return <div className="cal-toolips" >{`${value} Kcal`}</div>;
            }
            return value;
          }}
        />
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

