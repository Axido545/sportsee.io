import { RadialBarChart,RadialBar,Legend, PolarAngleAxis } from 'recharts';



export default function RadialScoreChart({data}){
  return<div 
  style={{zIndex : "10", color : 'black', position : "absolute", top :'700px', backgroundColor :'#FBFBFB'}}
  ><p>Score{data}</p>
          {/* <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey={data}
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{backgroundColor : 'red'}} />
        </RadialBarChart> */}
     <RadialBarChart width={143} height={143} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    innerRadius={25}
    // outerRadius={18}
    barSize={4}
    startAngle={90}
    endAngle={-270}>
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={30 / 2}
        fill="#0BEFF2"
      />
      <text
        x={30 / 2}
        y={33 / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
      >
        89
      </text>
    </RadialBarChart>
    
    {/* <RadialBarChart
  cx='50%'
  cy='50%'
  innerRadius='10%'
  outerRadius='80%'
  barSize={10}
  startAngle={180} 
  endAngle={0}
  data={data}
></RadialBarChart> */}
    </div>
}

