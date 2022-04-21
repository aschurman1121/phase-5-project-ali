import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


function NavBar({ onLogout }) {
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(()=> onLogout);
  
    }

//use navigate


  return (
    <div className="header">
    <header>
      <Link to='/logout'>
        <button className='button' id='logout_btn' onClick={handleLogout}>logout</button>
      </Link>
    </header>
    </div>
  )
}

export default NavBar