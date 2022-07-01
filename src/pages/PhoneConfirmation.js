import React ,{useState} from 'react'
import style from '../style/PhoneConfirm.module.css'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'

function PhoneConfirmation() {
    const [value, setValue] = useState();
  return (
    <div className={style.PhoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/back-arrow.png" alt="" />
            </Link>
        <h1>Enter your phone</h1>
        <PhoneInput  
        international
        defaultCountry="UZ" 
        value={value} 
        onChange={setValue} 
        />
        <p>
            By entering  your number, you're agreeing to our {" "}
            <span>Terms of Service and Privacy Policy. </span> 
            Thanks   
        </p>
        <Link exact to="/confirm" className='primaryBtn d-flex align-items-center'>
            Next <img src="/images/next-arrow.png" alt="" />
        </Link>
    </div>
  )
}

export default PhoneConfirmation