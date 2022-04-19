import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';

import { useNavigate } from 'react-router-dom';




function SignUp({ username, password, setUsername, setPassword, email, setEmail, setNeighbor }) {




    let navigate = useNavigate();



    function handleSignUpSubmit(e) {
        e.preventDefault()
        console.log(e)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
        body: JSON.stringify({
            username,
            password,
            email
        }),
        }).then((r => { //catch?
            if (r.ok) {
                r.json().then((user) => setNeighbor(user));
                navigate('/homepage')

            } else {
                r.json().then((err) => console.log(err));
            } 
        }))
 }

  return (
    <>
  
    <div className="user_start">
    <Container> 
    <div className="title_block">
        Community Corner
      </div>
        <div className='login_sign_up'>
            <h2>SignUp</h2>
            <div id='sign_up'>
                <Form onSubmit={handleSignUpSubmit}>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="username" 
                        value={username}  
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label> Password: </Form.Label>
                    <Form.Control 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label> E-mail: </Form.Label>
                    <Form.Control 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" onClick={handleSignUpSubmit} >Submit</Button>
                </Form>
            </div>
        </div>
    </Container>
    </div>
    </>
  )
}

export default SignUp

