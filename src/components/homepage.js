import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
function homepage() {
  return (
    <div className='home'>
      <h1>" Welcome to our Hospital Management System! We're dedicated to enhancing healthcare administration, making it more efficient and effective. Our user-friendly platform simplifies tasks, streamlines processes, and ensures seamless communication between healthcare providers, staff, and patients. Discover the future of healthcare management with us. "</h1>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/regester'><button>Register</button></Link>
        
    </div>
  )
}

export default homepage