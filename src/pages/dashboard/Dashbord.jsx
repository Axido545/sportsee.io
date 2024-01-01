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
    console.log('Dashboard les donées sont utilisés avec l id:', id);

    async function getDatas() {
      try {
        const userDatas = await getUser(id)
        console.log("donné user :" + userDatas)
        if (userDatas == "can not get user") {
          navigate('/page-not-found')
        }
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
      } catch (error) {
        console.error("Error:", error);
        console.log('Dashboard les donées sont utilisés avec l id:', id);

      }
    }
    getDatas()
  }, [id, navigate])
  console.log("Performance infos :" + user && user.performance && user.performance.subjects)

  return <>
    <Header />
    <Aside />
    <div className="dash-wrap">
      <UserBanner name={user && user.user && user.user.firstName} />
      <ActivityChart className="activity-chart" sessions={user && user.activity && user.activity.sessions} />
      <div className='calorie-dash'>
        <Calories url={url1} number={user && user.user && user.user.calories} quantity='Cal' name='Calories' />
        <Calories url={url2} number={user && user.user && user.user.protein} quantity='g' name='Protéines' />
        <Calories url={url3} number={user && user.user && user.user.carbohydrate} quantity='g' name='Glucides' />
        <Calories url={url4} number={user && user.user && user.user.lipid} quantity='g' name='Lipides' />
      </div>
      <SessionsAverageChart className="dash-sessionsaverage" sessions={user && user.averageSessions && user.averageSessions.sessions} />
      <PerformanceChart
        data={user && user.performance && user.performance.subjects}
      />
      <ScoreChart
        score={user && user.user && user.user.score}
      />
    </div>
  </>
}

