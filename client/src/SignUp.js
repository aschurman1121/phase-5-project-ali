import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';




function SignUp({ onLogin, username, password, setUsername, setPassword }) {

    // add username to sign up
    // const [neighbor, setNeighbor] = useState("")//this is the one to change?
    // const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [age, setAge] = useState("")
    const [nameKey, setNameKey] = useState("")
    const [email, setEmail] = useState("")

    let navigate = useNavigate();



    function handleSignUpSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
        body: JSON.stringify({
            username, password
        }),
        // body: JSON.stringify({
        //     neighbor, password, password_confirmation: passwordConfirmation
        // }),
        })
        .then(r => r.json())
        .then(onLogin)
        .then(() => navigate('/'));
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
                type='text'
                id='name'
                value={nameKey}
                onChange={(e) => setNameKey(e.target.value)}
               / >

            {/* </Form.Control> */}
            </Form.Group>

            <Form.Group>
                <Form.Label>Username:</Form.Label>
            <Form.Control 
                type="text" 
                id="username" 
                value={username} 
                // value={neighbor} 
                onChange={(e) => setUsername(e.target.value)}>
                </Form.Control> 
                   </Form.Group>


            <Form.Group>
            <Form.Label> Password: </Form.Label>
            <Form.Control 
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                {/* <p>Must be alphanumeric</p> */}
                <Form.Control
                type='text'
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label> Age: </Form.Label>
            <Form.Control
                type="integer"
                id='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
            {/* <Form.Label> Community: </Form.Label> 
            <Form.Control
                type="text"
                placeholder='this will be a drop down selection'
            ></Form.Control> */}
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