import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function Login({ setNeighbor, username, password,email,  setUsername, setPassword, setIsAuthenticated, neighbor, setEvents}) {

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


useEffect(() => {
    fetch('/authorized_neighbor')
    .then (r => {
      if(r.ok) {// add an error (.catch) -- try/catch 
        r.json()
        .then((user) => {
          setIsAuthenticated(true);
          setNeighbor(user);
          // .catch
        })
        .then(() => {

          fetch('/events')
          .then((r) => r.json())
          .then(events => {
            setEvents(events)
          })
        })
      }
    })
},[]);

  return (

 <div className='form' id="user_start">
    <Container>
      <div className="title_block">
        Community Corner
      </div>
          <div className='login_sign_up'>

                <p id='login_title'>Login</p>
                <div className='username_password_form_inputs'>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group>
                <input
                    type="text"
                    value={username}
                    placeholder = "Username"
                    onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <br></br>
                <Form.Group>
                  <input
                      type='password'
                      value={password}
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                      />
                </Form.Group>
                <br></br>
                <button className='button' type="submit" >Login</button>
            </Form>
          </div>
      <br></br>
         <p id='sign_up_link'>Not a member? <Link to='/signup'>Sign up here!</Link>
        </p>
    </div>

    </Container>
    </div>
  )
}

export default Login