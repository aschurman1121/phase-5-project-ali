import React, { useState } from 'react'
import NavBar from './NavBar';


function Login({ onLogin }) {

  const [username, setUsername] = useState("");
    
    function handleLoginSubmit (e){
      e.preventDefault();
      fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify({username}),
      })
      .then(r => r.json())
      .then(user => onLogin(user));
    }
      

  return (
    <div>Login
      <NavBar />
        <form onSubmit={handleLoginSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">Login</button>
        </form>


    </div>



  )
}

export default Login