import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
function header() {
  return (
    <header>
        <div className="nav">
            <Link to="/"><div className="logo"></div></Link>
            <div className="idea">
                <p className="add-first">Booking Appointment System</p>
            </div>
            
        </div>
    </header>
  )
}

export default header