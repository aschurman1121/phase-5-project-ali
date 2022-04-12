import React from 'react'
import Button from 'react-bootstrap/Button'

function NavBar({ onLogout }) {
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(()=> onLogout);
        // console.log('clicked')
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