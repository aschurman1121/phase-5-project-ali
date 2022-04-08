import React, { useState} from 'react'

function SignUp({ onLogin }) {
    const [neighbor, setNeighbor] = useState("")
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
    <div>SignUp
        <form onSubmit={handleSignUpSubmit}>
            <label htmlFor='neighbor'>Neighbor Name:</label>
            <input 
                type="text" 
                id="username" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor='password_confirmation'> confirm password: </label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            <label htmlFor='age'> age: </label>
            <input
                type="age"
                />
            <label> Community: </label> 
        <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default SignUp