import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';




function SignUp({ onLogin, username, password, setUsername, setPassword }) {


    // const [newNeighbor, setNewNeighbor] = useState({
    //     username: '',
    //     name: '',
    //     age: '',
    //     // community: '',
    //     image: '',
    //     email: '',
    //     password:''
    // })

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
        })

        .then(r => r.json())
        .then(onLogin)
        .then(() => navigate('/homepage'))
    })}

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
      {/* <div className='login_sign_up'> */}
    <h2>SignUp</h2>
            <div id='sign_up'>
                <Form onSubmit={handleSignUpSubmit}>
            {/*  <Form.Group>
             <Form.Label>Neighbor Name:</Form.Label>
            <Form.Control
                type='text'
                id='name'
                // value={nameKey}
                // onChange={(e) => setNameKey(e.target.value)}
                />
            </Form.Group> */}

            <Form.Group>
                <Form.Label>Username:</Form.Label>
            <Form.Control 
                type="text" 
                id="username" 
                value={username} 
                // value={neighbor} 
                onChange={(e) => setUsername(e.target.value)}
                />
               
                   </Form.Group>


            <Form.Group>
            <Form.Label> Password: </Form.Label>
            <Form.Control 
                type="text"
                id="password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            {/* <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type='text'
                id="email"
                // value={email}
                // onChange={(e)=> setEmail(e.target.value)}
                />

            </Form.Group>

            <Form.Group>
            <Form.Label> Age: </Form.Label>
            <Form.Control
                type="integer"
                id='age'
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                /> */}
            {/* <Form.Label> Community: </Form.Label> 
            <Form.Control
                type="text"
                placeholder='this will be a drop down selection'
            ></Form.Control> */}
            {/* </Form.Group> */}
           
        <Button type="submit">Submit</Button>
     
        </Form>
        </div>

        </Container>

    </div>
    </>
  )
}

export default SignUp