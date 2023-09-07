import React from 'react'
import './adminLogin.css';
function adminLogin() {
  return (
    <div className='login'>
        <div className='login_form'>
            <h2>Admin Login</h2>
            <div className='input'>
                <input placeholder='UserName' required></input>
                <input placeholder='Password' required></input>
            </div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default adminLogin