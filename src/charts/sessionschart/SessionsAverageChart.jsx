import "./sessionsaverage.css"
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
/* eslint react/prop-types: 0 */
export default function SessionsAverageChart({ sessions }) {
  console.log(sessions);
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomHover = ({ points }) => {
    return (
      <rect x={points[0].x} y="0" height='100%' width="50px" fill="rgba(0, 0, 0, 0.1)" />
    )
  }


  return (
    <div className='sessionaverage-wrap'>
      <p className="session-title">Durée moyenne des sessions</p>
      <LineChart width={200} height={200} data={sessions} margin={{ top: 50, right: 15, left: 15, bottom: 5 }}>
        <XAxis tick={{ fill: '#FFFFFF', opacity: '0.5' }} margin={{ right: 0, left: 0 }} padding={10} dataKey="day" tickLine={false} axisLine={false} tickFormatter={(value) => {
          // Remplace les valeurs numériques (de dataKey="day")
          const daysOfWeek = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D '];
          return daysOfWeek[value];
        }}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />

        <Line zIndex={1} type="natural" dataKey="sessionLength" opacity={0.7} stroke="white" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
}

