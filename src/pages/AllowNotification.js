import React from 'react'
import style from '../style/PhoneConfirm.module.css'
import { Link } from "react-router-dom"

function AllowNotification() {
  return (
    <div className={style.PhoneConfirmContainer}>
        <div className="text-center">
            <h1 className="mb-4">Last, important step!</h1>
            <h1 className="mb-3">Enable notification to know when people are talking</h1>
        </div>
        <div className={style.notificationContainer}>
            <div className="p-3">
                <h3>"Clubhouse"Would Like to Send You Notifications</h3>
                <p>Notifications may include alerts, sounds, and icon bagdes. These can be configured in Settings</p>        
            </div>
            <div className={style.action_btn}>
                <Link exact to="/">
                    Don't Allow
                </Link>
                <Link exact to="">
                    Allow
                </Link>
            <img src="/images/hand-up.png" 
            alt="" 
            className={style.hand_icon}/>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification