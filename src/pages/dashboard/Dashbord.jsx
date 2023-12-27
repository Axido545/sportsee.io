
import "./dashbord.css"
import Header from '../../layout/header/Header.jsx'
import Aside from '../../layout/aside/Aside.jsx'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/api.js'
import { User } from '../../models/user.js'
import UserBanner from '../../components/userbanner/UserBanner.jsx'
import Calories from '../../components/calories/Calories.jsx'
import url1 from "../../assets/calories-icon.png"
import url2 from "../../assets/protein-icon.png"
import url3 from "../../assets/carbs-icon.png"
import url4 from "../../assets/fat-icon.png"
import { UserActivity } from '../../models/userActivity.js'
import { UserAverageSessions } from '../../models/userAverageSessions.js'
import { UserPerformance } from '../../models/userPerformance.js'
import ActivityChart from "../../charts/activitychart/ActivityChart.jsx"
import ScoreChart from '../../charts/scorechart/ScoreChart.jsx'
import SessionsAverageChart from '../../charts/sessionschart/SessionsAverageChart.jsx'
import PerformanceChart from '../../charts/performancechart/PerformanceChart.jsx'

export default function Dashboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    user: null,
    activity: null,
    averageSessions: null,
    performance: null,
  })

  useEffect(() => {
    if (id && (id !== '18' && id !== '12')) {
      navigate('/page-non-trouvée')
    }
    async function getDatas() {
      const userDatas = await getUser(id)
      const userActivityDatas = await getUserActivity(id)
      const userAverageSessionsData = await getUserAverageSessions(id)
      const userPerformanceDatas = await getUserPerformance(id)

      const userModel = new User(userDatas)
      const activityModel = new UserActivity(userActivityDatas)
      const averageSessionsModel = new UserAverageSessions(userAverageSessionsData)
      const performanceModel = new UserPerformance(userPerformanceDatas)

      setUser({
        user: userModel,
        activity: activityModel,
        averageSessions: averageSessionsModel,
        performance: performanceModel,
      })
    }
    getDatas()
  }, [id])
  console.log(user)
  return <div>
    <Header />
    <UserBanner firstName={user && user.user && user.user.firstName} />
    <ActivityChart className="activity-chart" sessions={user && user.activity && user.activity.sessions} />
    <div className='calorie-dash'>
      <Calories url={url1} number={user && user.user && user.user.calories} quantity='Cal' name='Calories' />
      <Calories url={url2} number={user && user.user && user.user.protein} quantity='g' name='Protéines' />
      <Calories url={url3} number={user && user.user && user.user.carbohydrate} quantity='g' name='Glucides' />
      <Calories url={url4} number={user && user.user && user.user.lipid} quantity='g' name='Lipides' />
    </div>
    <Aside />
    <SessionsAverageChart data={user && user.averageSessions && user.averageSessions.sessions} />
    <PerformanceChart />
    <ScoreChart
      score={user && user.user && user.user.score}
    /><p>{user && user.user && user.user.score}</p>

  </div>
}

