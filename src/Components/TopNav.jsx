import React, { useEffect, useState } from 'react'
import apple_logo from "../Images/apple_logoo.png"
import wifi from "../Images/wifi.png"
import control from "../Images/control_center.gif"
import search from "../Images/search.png"
import "../App.css"
import Dropdown from './Pages/Dropdown'


const TopNav = () => {

    const [time, setTime] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const [hoverMenu, setHoverMenu] = useState(null);

    useEffect(() => {
        const update = () => {
            const now = new Date()
            let hours = now.getHours()
            const minutes = now.getMinutes().toString().padStart(2, "0")
            const ampm = hours >= 12 ? "PM" : "AM"
            hours = hours % 12 || 12
            setTime(`${hours}:${minutes} ${ampm}`)
        }
        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    function dropDownCall() {
        setDropdown(!dropdown)
    }

    const menuItems = ["File", "View", "History", "Windows", "Help"];
    const dummyMenuItems = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    return (
        <div>
            <div className="mac-nav">
                <div className="logo-navigators">
                    <img src={apple_logo} alt="logo" className='apple_logo' />
                    <div className="nav-menu-container">
                        {menuItems.map((item) => (
                            <div key={item} className="nav-menu-item"
                                onMouseEnter={() => setHoverMenu(item)}
                                onMouseLeave={() => setHoverMenu(null)}>
                                <p>{item}</p>
                                {hoverMenu === item && (
                                    <div className="nav-dropdown">
                                        {dummyMenuItems.map((subItem) => (
                                            <div key={subItem} className="dropdown-item">{subItem}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="wifi-time">
                    <div className="icons-div">
                        <img draggable="false" src={wifi} alt="wifi" className='wifi' />
                        <img draggable="false" src={search} alt="search" className='search' />
                        <img draggable="false" src={control} alt="control" className='control' onClick={dropDownCall} />
                        {dropdown && <Dropdown />}
                    </div>
                    <p className='time'>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default TopNav