import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from './Components/Home'
const App = () => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <>
    <div className="app-div">

      {/*default wallpaper */}
      {/* <img src="https://ik.imagekit.io/cblndrocc/macos.jpg"
        className='appJsx-image'
        draggable="false"
      /> */}

      {!imgLoaded && (
        <div className="loading-screen">
          <div className='load'/>
        </div>
      )}

      <img
        src={`../src/Images/Wallpapers/${localStorage.getItem("bgImage")}`}
        onLoad={() => setImgLoaded(true)}
        className='appJsx-image'
        draggable="false"
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />

      <Home />
        </div>
    </>
  )
}

export default App