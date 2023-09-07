import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
function homepage() {
  return (
    <div className='home'>
        <div className='newUser'>
            <h2>Regester Here -</h2>
            <Link to='/patientRegester'><button className='button'>Patient Regestration</button></Link>
            <Link to='/doctorRegester'><button className='button'>Doctor Regestration</button></Link>

        </div>
        <div className='regesteredUser'>
            <h2>Login Here -</h2>
            <Link to="/patientLogin"><button className='button'>Patient Login</button></Link>
            <Link to="/doctorLogin"><button className='button'>Doctor Login</button></Link>
            <Link to="/adminLogin"><button className='button'>Admin Login</button></Link>
        </div>
    </div>
  )
}

export default homepage