import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SessionsAverageChart({ data }) {
  console.log(data);
  return <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60}
      //   tick={<CustomizedAxisTick />}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8"
      //   label={<CustomizedLabel />} 
      />
    </LineChart>
  </ResponsiveContainer>
}