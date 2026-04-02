import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from './Components/Home'

const App = () => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [bgImageUrl, setBgImageUrl] = useState("")
  
  useEffect(() => {
    const bgImage = localStorage.getItem("bgImage")
    
    if (bgImage) {
      // Use import.meta.url for dynamic image loading
      setBgImageUrl(new URL(`./Images/Wallpapers/${bgImage}`, import.meta.url).href)
    } else {
      // Fallback to default online image
      setBgImageUrl("https://ik.imagekit.io/cblndrocc/macos.jpg")
    }
  }, [])

  return (
    <>
    <div className="app-div">

      {/* fallback default wallpaper */}
      <img src="https://ik.imagekit.io/cblndrocc/macos.jpg"
        className='appJsx-image'
        draggable="false"
      />

      {/* dynamic wallpaper with correct path */}
      {bgImageUrl && (
        <img
          src={bgImageUrl}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            setImgLoaded(true)
            console.warn(`Image not found: ${bgImageUrl}`)
          }}
          className='appJsx-image'
          draggable="false"
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
      )}

      <Home />
        </div>
    </>
  )
}

export default App