import React, { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import SignUp from './SignUp';
import Homepage from './Homepage';
import CreateEvent from './CreateEvent';
import EventPage from './EventPage';
import Email from './Email';



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



//running before every --- move to login?
console.log(neighbor)
// authentication
useEffect(() => {
    fetch('/authorized_neighbor')
    .then (r => {
      if(r.ok) {// add an error (.catch) -- try/catch 
        r.json()
        .then((neighbor) => {
          setIsAuthenticated(true);
          setNeighbor(neighbor);
          // .catcch
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
///I think I need to add an else here between 43 & 44 to catch the path before it goes to events... where do I want it to go? 


return (
  <div>
     <NavBar/>
       <Routes>
        <Route path='/signup' 
        element={<SignUp username={username} 
                         password={password} 
                         setUsername={setUsername} 
                         setPassword={setPassword}/>} />
        <Route path='/newEventForm' 
        element={<CreateEvent newEvent={newEvent} 
                              setNewEvent={setNewEvent} 
                              events = {events} 
                              setEvents={setEvents} />}/>
        <Route exact path='/homepage' 
        element={<Homepage events = {events} 
                           setEvents={setEvents} 
                           newEvent={newEvent} 
                           setNewEvent={setNewEvent} />} />
        <Route exact path='/' 
        element={<Login username={username} 
                        password={password} 
                        setUsername={setUsername} 
                        setPassword={setPassword} 
                        onLogin={setNeighbor} 
                        isAuthenticated = {isAuthenticated}/>} />
        
      
        <Route path='/logout' 
        element={<Login username={username} 
                        password={password} 
                        setUsername={setUsername} 
                        setPassword={setPassword} 
                        onLogin={setNeighbor}/>} />
        
        <Route path='/email' element={<Email />} />
        
      
        <Route path='/:id/edit' element={<EventPage />}/>
        
      </Routes>
   </div>
  );
  };
export default App;
