import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";


function NavBar({ onLogout, setLogoutAuthenticated, setNeighbor }) {

  let navigate = useNavigate();
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(()=> onLogout)
          .then(()=> {
          // setIsAuthenticated(false)
          setLogoutAuthenticated(false)
          setNeighbor(null) })
          // .then(() => navigate('/logout'));
        console.log('clicked')
    }


  return (
    <div className="header">
    <header>
      
        <Button onClick={handleLogout}>logout</Button>
       
    </header>
    </div>
  )
}

export default NavBar