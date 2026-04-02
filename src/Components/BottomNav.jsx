// BottomNav.jsx

import React, { useState } from 'react'
import calculator from "../Images/Icons/calculatorr.png"
import Calendar from "../Images/Icons/Calendar-r.png"
import GitHub from "../Images/Icons/git.webp"
import mac_os from "../Images/Icons/mac os.png"
import music from "../Images/Icons/music.png"
import recycle from "../Images/Icons/recycle.png"
import notepad from "../Images/Icons/Text Edit.png"
import terminal from "../Images/Icons/terminall.png"
import setting from "../Images/Icons/setting.png"
import docs from "../Images/Icons/ddd.png"

import "./BottomNav.css"
import Tab from './Tab'

const BottomNav = () => {

    const [openApps, setOpenApps] = useState([]);
    const [maxApps, setMaxApps] = useState([]);

    function openApp(appName) {
        // Only add if not already open
        if (!openApps.includes(appName)) {
            setOpenApps(prev => [...prev, appName]);
        }
    }

    function closeApp(appName) {
        // Remove the app from openApps array
        setOpenApps(prev => prev.filter(app => app !== appName));
    }

    return (
        <>
            {/* Render tabs for all open apps */}
            {openApps.map((appName) => (
                <Tab
                    key={appName}
                    appName={appName}
                    closeApp={closeApp}
                />
            ))}


            <div className="bottom-nav">
                <div className="software-icons">
                    <div className="icon-div">
                        <img className="icon" src={mac_os} alt="mac_os" draggable="false" onClick={() => openApp("mac_os")} />
                        <img className="icon" src={docs} alt="Docs" draggable="false" onClick={() => openApp("Docs")} />
                        <img className="icon" src={music} alt="music" draggable="false" onClick={() => openApp("music")} />
                        <img className="icon" src={GitHub} alt="GitHub" draggable="false" onClick={() => window.open("https://github.com/dharmapal25", "_blank")} />
                        <img className="icon" src={setting} alt="setting" draggable="false" onClick={() => openApp("setting")} />
                        <img className="icon" src={Calendar} alt="Calendar" draggable="false" onClick={() => window.open("https://calendar.google.com/calendar/u/0/r", "_blank")} />
                        <img className="icon" src={notepad} alt="recycle" draggable="false" onClick={() => openApp("notepad")} />
                        <img className="icon" src={calculator} alt="calculator" draggable="false" onClick={() => openApp("calculator")} />
                        <img className="icon" src={terminal} alt="terminal" draggable="false" onClick={() => openApp("terminal")} />
                        <hr className='bar' />
                        <div className="side-icon">
                            <img className="icon" src={recycle} alt="recycle" draggable="false" onClick={() => openApp("recycle")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomNav