import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';
import NavBar from './NavBar';



function SignUp({ onLogin }) {

    // add username to sign up
    const [neighbor, setNeighbor] = useState("")//this is the one to change?
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSignUpSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
        body: JSON.stringify({
            neighbor, password, password_confirmation: passwordConfirmation
        }),
        })
        .then(r => r.json())
        .then(onLogin);
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
    <h2>SignUp</h2>
                <Form onSubmit={handleSignUpSubmit}>
             <Form.Group>
            <Form.Label>Neighbor Name:</Form.Label>
            <Form.Control 
                type="text" 
                id="username" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                   </Form.Group>
            <Form.Label> Password: </Form.Label>
            <Form.Group>
            <Form.Control 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label> Age: </Form.Label>
            <Form.Control
                type="age"
            
                />
            <Form.Label> Community: </Form.Label> 
            <Form.Control
                type="text"
                placeholder='this will be a drop down selection'
            ></Form.Control>
            </Form.Group>
           
        <Button type="submit">Submit</Button>
     
        </Form>
        </div>
        </Container>

    </div>
    </>
  )
}

export default SignUp