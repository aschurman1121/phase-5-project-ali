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

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
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
  const [neighbor, setNeighbor] = useState({
    username: '',
    password: '',
    email: ''
  })


return (
  <div>
     <NavBar/>
       <Routes>
        <Route path='/signup' 
        element={<SignUp neighbor={neighbor}
                         setNeighbor={setNeighbor}
                         setEmail={setEmail}/>} />
        <Route exact path='/homepage' 
        element={<Homepage events = {events} 
                           setEvents={setEvents} 
                           newEvent={newEvent} 
                           setNewEvent={setNewEvent} />} />
        <Route exact path='/' 
            element={<Login neighbor={neighbor}
                            email={email}
                            onLogin={setNeighbor} 
                            setIsAuthenticated = {setIsAuthenticated}
                            setEvents={setEvents}
                            />} />
        <Route path='/logout' 
            element={<Login neighbor={neighbor}
                            onLogin={setNeighbor}
                            setIsAuthenticated = {setIsAuthenticated}
                            setEvents={setEvents}/>} />
        <Route path='/newEventForm' 
            element={<CreateEvent newEvent={newEvent} 
                              setNewEvent={setNewEvent} 
                              setEvents={setEvents} />}/>
        
        <Route path='/email' element={<Email />} />
        
      
        <Route path='/:id/edit' element={<EventPage />}/>
        
      </Routes>
   </div>
  );
};
export default App;
