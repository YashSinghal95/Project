import React from 'react'
import './doctorLogin.css';
function doctorLogin() {
  return (
    <div className='login'>
        <div className='login_form'>
            <h2>Doctor Login</h2>
            <div className='input'>
                <input placeholder='UserName' required></input>
                <input placeholder='Password' required></input>

            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default doctorLogin