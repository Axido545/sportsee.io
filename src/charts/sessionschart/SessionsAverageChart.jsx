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
        <Tooltip cursor={{
          stroke: "black",
          strokeOpacity: 0.1,
          strokeWidth: 50,
          height: "600px",
          position: "absolute",
          top: "-10px",
          bottom: "200px",
          zIndex: 10,
        }}
          wrapperStyle={{ position: "absolute", left: 0, top: 0, pointerEvents: "none", backgroundColor: "yellow" }} // pointerEvents: "none" permet aux événements de souris de passer à travers le tooltip
          labelStyle={{ display: "none" }} // pr pas afficher la key date
          formatter={(value) => [value]} // mais afficher la valeur
          contentStyle={{
            backgroundColor: "#FBFBFB",
            padding: 5,
          }}
          itemStyle={{
            color: "black",
            fontSize: 9,
            fontWeight: 500,
          }} />
        <Line width={200} zIndex={1} type="monotone" dataKey="sessionLength" opacity={0.7} stroke="white" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
