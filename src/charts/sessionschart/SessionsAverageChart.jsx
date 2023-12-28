import "./sessionsaverage.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function SessionsAverageChart({ sessions }) {
  console.log(sessions);

  return (
    <div className='sessionaverage-wrap'>
      <LineChart width={200} height={200} data={sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
