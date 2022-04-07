import React from 'react'

function NavBar({ onLogout }) {
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(()=> onLogout);
        // console.log('clicked')
    }




  return (
    <header>
        <button onClick={handleLogout}>logout</button>
    </header>
  )
}

export default NavBar