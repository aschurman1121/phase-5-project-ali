import React from 'react'
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function Login({ onLogin, username, password, setUsername, setPassword }) {

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
        navigate('/homepage', {replace: true})

        })
      // .then(() => navigate('/homepage'))
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
                 placeholder = "Username"
                 onChange={(e) => setUsername(e.target.value)}/>
             </Form.Group>
             <Form.Group>
               <Form.Control
                  type='text'
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  />
          </Form.Group>
        {/* <Link to='/'> */}
            <Button type="submit" >Login</Button>
        {/* </Link> */}
        </Form>
          <br></br>
        <Link to='/signup'>
          <h2>Not a member? Sign up here!</h2>
        </Link>
            </div>

    </Container>
    </div>

    </>

  )
}

export default Login