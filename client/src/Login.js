import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function Login({ setNeighbor, username, password,email, isAuthenticated, setUsername, setPassword, setIsAuthenticated, neighbor, setEvents,  setEmail}) {

  let navigate = useNavigate();

    function handleLoginSubmit (e){
      e.preventDefault();
      fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify({username, 
                              password,
                              email}),
      })
        .then(r => r.json())
        .then(user => {
          setNeighbor(user)
          navigate('/homepage')
      })
}




// authentication
console.log(neighbor)

useEffect(() => {
    fetch('/authorized_neighbor')
    .then (r => {
      if(r.ok) {// add an error (.catch) -- try/catch 
        r.json()
        .then((user) => {
          setIsAuthenticated(true);
          setNeighbor(user);
          // .catcch
        })
        .then(() => {

          fetch('/events')
          .then((r) => r.json())
          .then(events => {
            // console.log(events)
            setEvents(events)
          })
        })
      }
    })
},[]);

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