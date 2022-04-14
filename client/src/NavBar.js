import React, {useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


function NavBar({ onLogout, setNeighbor, setIsAuthenticated }) {
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(()=> onLogout)
            // move state from app.js to use these
        // .then(()=> {
        //   setIsAuthenticated(false)
        //   setNeighbor(null)
        // });
        // console.log('clicked')
    }




  return (
    <div className="header">
    <header>
      <Link to='/logout'>
        <Button onClick={handleLogout}>logout</Button>
        </Link>
    </header>
    </div>
  )
}

export default NavBar