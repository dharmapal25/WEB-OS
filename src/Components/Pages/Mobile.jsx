import React from 'react'
import error from "../../Images/Icons/nooo.png"
import "./Mobile.css"

const Mobile = () => {
    return (
        <div className='mobile-view-container'>
            <div className='mobile-content'>
                <div className='mobile-icon-wrapper'>
                    <img src={error} alt="Error" className='mobile-error-icon' />
                </div>
                <p className='mobile-subtitle'>Not Available</p>
                <p className='mobile-description'>This application is designed for desktop use only</p>
                <p className='mobile-hint'>Please switch to a desktop or laptop for the best experience</p>
            </div>
        </div>
    )
}

export default Mobile