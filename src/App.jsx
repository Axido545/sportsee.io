
import './App.css'
import Header from './components/header/Header.jsx'
import Aside from './components/aside/Aside.jsx'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { getUser,getUserActivity } from './services/api.js'
import { User } from './models/user.js'
import UserBanner from './components/userbanner/UserBanner.jsx'
import Calories from './components/calories/Calories.jsx'
import url1 from "./assets/calories-icon.png"
import url2 from "./assets/protein-icon.png"
import url3 from "./assets/carbs-icon.png"
import url4 from "./assets/fat-icon.png"
import { userActivity } from './models/userActivity.js'
import ActivityChart from "./charts/ActivityChart.jsx"



function App() {
  const {id} =useParams()
const [user,setUser] =useState()

  useEffect(()=>{
    async function getDatas(){
      const userDatas = await getUser(id)
      const userActivityDatas = await getUserActivity(id)

      const userModel = new User(userDatas)
      const activityModel = new userActivity(userActivityDatas)
  
      setUser(userModel,activityModel)
    }
    getDatas()
  },[id])
  console.log(User)
  console.log(userActivity)
  return<div>
    <Header/>
    <UserBanner firstName={user && user.firstName}/>
    <ActivityChart session ={user && user.session}/>
    <div className='calorie-dash'>
    <Calories url={url1} number={user && user.calories} quantity='Cal' name='Calories'/>
    <Calories url={url2} number={user && user.protein} quantity='g' name='Protéines'/>
    <Calories url={url3} number={user && user.carbohydrate} quantity='g' name='Glucides'/>
    <Calories url={url4} number={user && user.lipid} quantity='g' name='Lipides'/>
    </div>
  
   

    <Aside/>

    </div>
}

export default App
