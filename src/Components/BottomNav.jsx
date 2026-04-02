// // BottomNav.jsx

// import React, { useState } from 'react'
// import calculator from "../Images/Icons/calculatorr.png"
// import gallery from "../Images/Icons/gallery.png"
// import mac_os from "../Images/Icons/mac os.png"
// import music from "../Images/Icons/music.png"
// import Netflix from "../Images/Icons/Netflix.png"
// import PS5 from "../Images/Icons/PS5.png"
// import recycle from "../Images/Icons/recycle.png"
// import vscode from "../Images/Icons/vscode.png"
// import terminal from "../Images/Icons/terminall.png"
// import setting from "../Images/Icons/setting.png"
// import app_store from "../Images/Icons/app store.png"

// import "./BottomNav.css"
// import Tab from './Tab'
// import Calculator from './Pages/Calculator'
// import Vscode from './Pages/Vscode'
// import Empty from './Pages/Empty'
// import CLI from './Pages/CLI'

// const BottomNav = () => {


//     const [arr, setArr] = useState([]);
//     const [alt, setAlt] = useState([]);

//     const [tab, setTab] = useState(<Tab />);
//     // elm.target.classList.add("vscode-clicked")
//     // elm.target.style.animation = "vscode-clicked 0.5s"



//     function vscodeFun(name, elm) {
//         console.log(elm.target.alt)


//         if (!alt.includes(name)) {
//             setArr([tab, ...arr])
//             // setAlt([name, ...alt])

//             setAlt(prev => [name, ...prev])


//             console.log(alt)
//         }
//     }

//     let Altcopy = alt;
//     localStorage.setItem("arrData", JSON.stringify(Altcopy))
//     let allTabs = localStorage.getItem("arrData")



//     return (

//         <>
//             {console.log(alt)}

//             {arr}

//             <Tab nameVS={"Vscode"} >
//                 {/* {alt.includes("vscode") == alt || <Vscode/>} */}
//                 {alt.includes("vscode") == true ? <Vscode/> : <Empty/>}
//             </Tab>

//             <Tab nameCalu={"Calculator"} >
//                 {alt.includes("calculator") == true ? <Calculator/> : <Empty/>}
//             </Tab>

//             <Tab nameCLI={"Terminal"} >
//                 {alt.includes("terminal") == true ? <CLI/> : <h1>404 Error!</h1>}
//             </Tab>


//             <div className="bottom-nav">

//                 <div className="software-icons">

//                     <div className="icon-div">
//                         <img className="icon" src={mac_os} alt="mac_os" draggable="false" onClick={(e) => vscodeFun("mac_os", e)} />
//                         <img className="icon" src={music} alt="music" draggable="false" onClick={(e) => vscodeFun("music", e)} />
//                         <img className="icon" src={app_store} alt="app_store" draggable="false" onClick={(e) => vscodeFun("app_store", e)} />
//                         <img className="icon" src={gallery} alt="gallery" draggable="false" onClick={(e) => vscodeFun("gallery", e)} />
//                         <img className="icon" src={Netflix} alt="Netflix" draggable="false" onClick={(e) => vscodeFun("Netflix", e)} />
//                         <img className="icon" src={PS5} alt="PS5" draggable="false" onClick={(e) => vscodeFun("PS5", e)} />
//                         <img className="icon" src={setting} alt="setting" draggable="false" onClick={(e) => vscodeFun("setting", e)} />
//                         <img className="icon" src={vscode} alt="vscode" draggable="false" onClick={(e) => vscodeFun("vscode", e)} />
//                         <img className="icon" src={calculator} alt="calculator" draggable="false" onClick={(e) => vscodeFun("calculator", e)} />
//                         <img className="icon" src={terminal} alt="terminal" draggable="false" onClick={(e) => vscodeFun("terminal", e)} />
//                         <hr className='bar' />
//                         <div className="side-icon">
//                             <img className="icon" src={recycle} alt="recycle" draggable="false" onClick={(e) => vscodeFun("recycle", e)} />

//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default BottomNav



// BottomNav.jsx

import React, { useState } from 'react'
import calculator from "../Images/Icons/calculatorr.png"
import Calendar from "../Images/Icons/Calendar.png"
import gallery from "../Images/Icons/gallery.png"
import mac_os from "../Images/Icons/mac os.png"
import music from "../Images/Icons/music.png"
// import Netflix from "../Images/Icons/Netflix.png"
import recycle from "../Images/Icons/recycle.png"
import notepad from "../Images/Icons/Text Edit.png"
import vscode from "../Images/Icons/vscode.png"
import terminal from "../Images/Icons/terminall.png"
import setting from "../Images/Icons/setting.png"
import docs from "../Images/Icons/docs.png"

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
                        <img className="icon" src={gallery} alt="gallery" draggable="false" onClick={() => openApp("gallery")} />
                        {/* <img className="icon" src={Netflix} alt="Netflix" draggable="false" onClick={() => openApp("Netflix")} /> */}
                        <img className="icon" src={setting} alt="setting" draggable="false" onClick={() => openApp("setting")} />
                        <img className="icon" src={Calendar} alt="Calendar" draggable="false" onClick={() => openApp("Calendar")} />
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