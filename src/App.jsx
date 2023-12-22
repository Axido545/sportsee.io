
import './App.css'
import Header from './components/header/Header.jsx'
import Aside from './components/aside/Aside.jsx'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { getUser } from './services/api.js'
import { User } from './models/user.js'


function App() {
  const {id} =useParams()
  console.log({id})
const [user,setUser] =useState()

  useEffect(()=>{
    async function getDatas(){
      const userDatas = await getUser(id)
      const userModel = new User(userDatas)
      setUser(userModel)
    }
    getDatas()
  },[id])
  console.log(User)
  return<div>
    <Header/>
    <p>{user && user.firstName}</p>
    <Aside/>

    </div>
}

export default App
