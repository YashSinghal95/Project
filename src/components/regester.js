import React from 'react'
import { Link } from 'react-router-dom';
import './regester.css';

function regester() {
  return (
    <div className='home'>
        <div className='newUser'>
            <h2>Register Here -</h2>
            <Link to='/patientRegester'><button className='button'>Patient Regestration</button></Link>
            <Link to='/doctorRegester'><button className='button'>Doctor Regestration</button></Link>
        </div>
    </div>
  )
}

export default regester