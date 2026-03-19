import React, { useState } from 'react'
import "./Dropdown.css"

const Dropdown = () => {
    const [range, setRange] = useState(() => localStorage.getItem("brightness") || 100)

    function controlLight(e) {
        const val = e.target.value
        setRange(val)
        document.body.style.filter = `brightness(${val}%)`
        localStorage.setItem("brightness", val)
    }

    return (
        <div className='Dropdown-div'>

            <div className="input-div">

                <p>Brightness</p>
                <input
                    type="range"
                    className='range-input'
                    min={40}
                    max={130}
                    value={range}
                    onChange={(e) => controlLight(e)}
                />
            </div>
        </div>
    )
}

export default Dropdown