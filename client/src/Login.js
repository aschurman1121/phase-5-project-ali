import React from 'react'
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function Login({ onLogin, username, password, setUsername, setPassword, isAuthenticated}) {

  let navigate = useNavigate();

    function handleLoginSubmit (e){
      e.preventDefault();
      fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify({username: username, password: password}),
      })
      .then(r => r.json())
      .then(user => {
        // console.log(user)
        onLogin(user)
        navigate('/homepage')

        })}
      // .then(() => navigate('/homepage'))
    //     if (isAuthenticated){
    //       .then(navigate('/homepage'))
    //     } else {
          // .then(navigate('/login'))
    // }
    // } 
      //if(loggged in)
      // homepage
      //else ----> notes from vineet

  return (

 <div className="user_start">
    <Container>
      <div className="title_block">
        Community Corner
      </div>
      <div className='login_sign_up'>
            Login
            <div className='username_password_form_inputs'>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group>
             <Form.Control
                 type="text"
                 value={username}
                 placeholder = "Username"
                 onChange={(e) => setUsername(e.target.value)}/>
             </Form.Group>
             <br></br>
             <Form.Group>
               <Form.Control
                  type='password'
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  />
          </Form.Group>
            <br></br>
            <Button type="submit" >Login</Button>
   
        </Form>
          </div>
          <br></br>
        <Link to='/signup'>
          <p id='sign_up_link'>Not a member? Sign up here!</p>
        </Link>
            </div>

    </Container>
    </div>


  )
}

export default Login