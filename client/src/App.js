import React, { useState} from 'react';
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
        element={<SignUp username={username} 
                         password={password} 
                         email={email}
                         setNeighbor={setNeighbor}
                         setEmail={setEmail}
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
                        neighbor={neighbor}
                        email={email}
                        isAuthenticated={isAuthenticated}
                        setEmail={setEmail}
                        setUsername={setUsername} 
                        setPassword={setPassword} 
                        setNeighbor={setNeighbor} 
                        setIsAuthenticated = {setIsAuthenticated}
                        setEvents={setEvents}
                        />} />
        
      
        <Route path='/logout' 
        element={<Login username={username} 
                        password={password} 
                        neighbor={neighbor}
                        email={email}
                        setEmail={setEmail}
                        setUsername={setUsername} 
                        setPassword={setPassword} 
                        setNeighbor={setNeighbor}
                        setIsAuthenticated = {setIsAuthenticated}
                        setEvents={setEvents}/>} />
        
        <Route path='/email' element={<Email />} />
        
      
        <Route path='/:id/edit' element={<EventPage />}/>
        
      </Routes>
   </div>
  );
  };
export default App;
