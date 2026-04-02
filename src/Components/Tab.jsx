import React, { useState } from 'react'
import "./Tab.css"
import { Rnd } from 'react-rnd'
import Calculator from './Pages/Calculator';
import CLI from './Pages/CLI';
import Notepad from './Pages/Notepad';
import Music from './Pages/Music';
import Empty from './Pages/Empty';
import Setting from './Pages/Setting';
import Docs from './Pages/Docs';

const Tab = ({ appName, closeApp }) => {

    const [ZIndex, setZIndex] = useState(1);
    const [widthTab, setwidthTab] = useState(true);

    function renderContent() {
        switch (appName) {
            case "calculator":
                return <Calculator style={{ maxWidth: "503px" }} />
            case "terminal":
                return <CLI />
            case "notepad":
                return <Notepad />
            case "music":
                return <Music />
            case "setting":
                return <Setting />
            case "Docs":
                return <Docs />
            default:
                return <Empty />
        }
    }

    function maxWidthTab() {
        setwidthTab(!widthTab)
    }

    if (!appName) return null;

    return (
        <Rnd className={`tab-top-container ${(!widthTab) ? "maxwidth" : ""}`}
            default={{
                x: Math.floor(Math.random() * 750),
                y: Math.floor(Math.random() * 380)
            }}
            style={{ zIndex: ZIndex }}
            onClick={() => setZIndex(ZIndex + 1)}>
            <div className='nav-tab' onDoubleClick={maxWidthTab}>
                <div className="tab-icons">
                    <div className="icon-1 " onClick={() => closeApp(appName)} >
                        <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                        </svg>
                    </div>

                    <div className="icon-2">
                        <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                        </svg>
                    </div>

                    <div className="icon-3" onClick={maxWidthTab} >
                        <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M502.6 438.6L598.6 342.6C611.1 330.1 611.1 309.8 598.6 297.3L502.6 201.3C490.1 188.8 469.8 188.8 457.3 201.3C444.8 213.8 444.8 234.1 457.3 246.6L498.7 288L141.2 288L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3C170.1 188.8 149.8 188.8 137.3 201.3L41.3 297.3C35.3 303.3 31.9 311.4 31.9 319.9C31.9 328.4 35.3 336.5 41.3 342.5L137.3 438.5C149.8 451 170.1 451 182.6 438.5C195.1 426 195.1 405.7 182.6 393.2L141.2 351.8L498.7 351.8L457.3 393.2C444.8 405.7 444.8 426 457.3 438.5C469.8 451 490.1 451 502.6 438.5z" />
                        </svg>
                    </div>
                </div>

                <div className="tab-name">

                    <p>{appName === "calculator" && "Calculator"}</p>
                    <p>{appName === "notepad" && "Notepad"}</p>
                    <p>{appName === "music" && "Music"}</p>
                    <p>{appName === "setting" && "Setting"}</p>
                    <p>{appName === "Docs" && "Documents"}</p>

                </div>
            </div>

            <hr className='hr' />

            <div className="contents-tab">
                {renderContent()}
            </div>
        </Rnd>
    )
}

export default Tab