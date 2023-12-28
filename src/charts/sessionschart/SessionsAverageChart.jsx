import "./sessionsaverage.css"
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

export default function SessionsAverageChart({ sessions }) {
  console.log(sessions);

  return (
    <div className='sessionaverage-wrap'>
      <p className="session-title">Durée moyenne des sessions</p>
      <LineChart width={200} height={200} data={sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis tick={{ fill: '#FFFFFF', opacity: '0.5' }} dataKey="day" tickLine={false} axisLine={false} tickFormatter={(value) => {
          // Remplace les valeurs numériques (de dataKey="day")
          const daysOfWeek = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'];
          return daysOfWeek[value];
        }}
        />
        <Tooltip cursor={{ stroke: '#000000', strokeWidth: 2, opacity: 0.3 }} />
        <Line type="monotone" dataKey="sessionLength" opacity={0.7} stroke="white" />
      </LineChart>
    </div>
  );
}
