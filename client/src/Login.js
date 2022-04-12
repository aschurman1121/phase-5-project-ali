import React, { useState } from 'react'
import NavBar from './NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


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
    <>
    <div>
    <NavBar />
    </div> 
 <div className="user_start">
    <Container>
      <div className="title_block">
        Community Corner
      </div>
      <div className='login_sign_up'>
            Login here
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group>
            <Form.Control
                type="text"
                value={username}
                placeholder = "username"
                onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='password'
            />
        </Form.Group>
        <Button type="submit">Login</Button>
        </Form>
        Not a member? Sign up here!
            </div>

    </Container>
    </div>

    </>

  )
}

export default Login