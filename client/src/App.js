import React, { useState, useEffect} from 'react';
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
const [newEvent, setNewEvent] = useState({
  event_title: '',
  date:'',
  purpose: '',
  supplies: '',
  location: '',
  start_time: '',
  end_time: '',
  community: ''

})

// //login --> setNeighbor becomes onLogin
// useEffect(() => {
//   fetch('/me').then((resp) => {
//     if (resp.ok) {
//       resp.json().then((neighbor)=> setNeighbor(neighbor));
//     }
//   })
// }, []);

console.log(neighbor)
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
            console.log(events)
            setEvents(events)
          })
        })
      }
    })
},[]);

// if (neighbor) {
//   return <Homepage /> 
// } else {
//   <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} onLogin={setNeighbor}/>;
// }
//can I move this Auth to be an if statement then return?
//if (neighbor) { return (JSX)}
// Do I want to set up validations for a false click of login?

// if (!isAuthenticated) return <Login error={"Please login"} setIsAuthenticated = {setIsAuthenticated} onLogin={setNeighbor} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />

  return (
   <div>
     {/* <Routes> */}
     {/* {neighbor ? <Login/> : null} */}
     {/* </Routes> */}
       <Routes>
        <Route exact path='/homepage' element={<Homepage events = {events} setEvents={setEvents} newEvent={newEvent} setNewEvent={setNewEvent} />} />
       </Routes>
         
       <Routes>
        <Route exact path='/' element={<Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} onLogin={setNeighbor}/>} />
        </Routes>

        <Routes>
        <Route path='/logout' element={<Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} onLogin={setNeighbor}/>} />
        </Routes>

        <Routes>
        <Route path='/newEventForm' element={<CreateEvent newEvent={newEvent} setNewEvent={setNewEvent}/>}/>
        </Routes>

        <Routes>
        <Route path='/:id/edit' element={<EventPage />}/>
        </Routes>

        <Routes>
        <Route path='/signup' element={<SignUp username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>} />
        </Routes>
 
   </div>
  );
  };
export default App;
