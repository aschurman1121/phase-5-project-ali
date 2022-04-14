import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from './SignUp';
import Homepage from './Homepage';
import CreateEvent from './CreateEvent';
import EventPage from './EventPage';



function App() {

const [neighbor, setNeighbor] = useState(null)
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [events, setEvents] = useState([]);

//login ---> setNeighbor becomes onLogin
useEffect(() => {
  fetch('/me').then((resp) => {
    if (resp.ok) {
      resp.json().then((neighbor)=> setNeighbor(neighbor));
    }
  })
}, []);


//authentication
useEffect(() => {
    fetch('/authorized_neighbor')
    .then (r => {
      if(r.ok) {
        r.json()
        .then((neighbor) => {
          setIsAuthenticated(true);
          setNeighbor(neighbor);
        })
        .then(() => {
          // fetch('/me')
          fetch('/events')
          .then((r) => r.json())
          .then(events => {
            // console.log(events)
            setEvents(events)
          })
// should I tack on another .then here to render the neighbor on the login? or do lines 21-27 take care of that
        })
      }
    })
},[]);

// if (neighbor) {
//   return <h2> hello {neighbor.username}!</h2>;
// } else{
//   return <Login onLogin={setNeighbor} />
// }
//can I move this Auth to be an if statement then return?
//if (neighbor) { return (JSX)}
// Do I want to set up validations for a false click of login?

if (!isAuthenticated) return <Login error={"Please login"} setIsAuthenticated = {setIsAuthenticated} onLogin={setNeighbor} setUsername={setUsername} setPassword={setPassword}/>

  return (
   <div>
     
     {/* {neighbor ? <Login/> : <SignUp/>} */}
       <Routes>
         
        <Route path='/login' element={<Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} onLogin={setNeighbor}/>} >
        </Route>
        <Route path='/logout' element={< Login 
        // setLogoutAuthenticated={setIsAuthenticated} setNeighbor={setNeighbor} 
        />}>
        </Route>
        <Route path='/newEventForm' element={<CreateEvent />}>
        </Route>
        <Route path='/:id/edit' element={<EventPage />}>
        </Route>
        <Route path='/signup' element={<SignUp username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>} >
        </Route>
        <Route exact path='/' element={<Homepage events = {events} setEvents={setEvents} />} >
        </Route>
        </Routes>
 
   </div>
  );
  };
export default App;
