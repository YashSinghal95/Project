import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';
function login() {
  return (
    <div className='home'>
        <div className='regesteredUser'>
            <h2>Login Here -</h2>
            <Link to="/patientLogin"><button className='button'>Patient Login</button></Link>
            <Link to="/doctorLogin"><button className='button'>Doctor Login</button></Link>
            <Link to="/adminLogin"><button className='button'>Admin Login</button></Link>
        </div>
        <p>If not regestered</p>
        <Link to='regester'><p className='p'>Regeseter here</p></Link>
    </div>
  )
}

export default login