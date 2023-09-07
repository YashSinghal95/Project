import React from 'react'
import './patientLogin.css';
function patientLogin() {
  return (
    <div className='login'>
        <div className='login_form'>
            <h2>Patient Login</h2>
            <div className='input'>
                <input placeholder='UserName' required></input>
                <input placeholder='Password' required></input>

            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default patientLogin