import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
function homepage() {
  return (
    <div className='home'>
      <h1>" this is a website for hospital management. This will contain few Lines here. for example "</h1>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/regester'><button>Register</button></Link>
        
    </div>
  )
}

export default homepage