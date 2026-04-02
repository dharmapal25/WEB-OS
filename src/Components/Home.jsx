import React, { useEffect } from 'react'
import "../App.css"
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Tab from './Tab'
import Vscode from './Pages/Github'


const Home = () => {

  let dockData = JSON.parse(localStorage.getItem("arrData"))

  return (


    <div>

      <div className="desktop-view">

        <TopNav />


        <BottomNav />

        <div>
        </div>
      </div>

    </div>
  )
}

export default Home