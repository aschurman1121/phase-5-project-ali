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

useEffect(() => {
  fetch('/me').then((resp) => {
    if (resp.ok) {
      resp.json().then((neighbor)=> setNeighbor(neighbor));
    }
  })
}, []);

if (neighbor) {
  return <h2> hello {neighbor.name}!</h2>;
} else{
  return <Login onLogin={setNeighbor} />
}
//can I move this Auth to be an if statement then return?
//if (neighbor) { return (JSX)}
// Do I want to set up validations for a false click of login?


  return (
   <div>
     
     {/* {neighbor ? <Login/> : <SignUp/>} */}
       <Routes>
         
        <Route path='/login' element={<Login />} >
        </Route>
        <Route path='/newEventForm' element={<CreateEvent />}>
        </Route>
        <Route path='/:id/edit' element={<EventPage />}>
        </Route>
        <Route path='/signup' element={<SignUp />} >
        </Route>
        <Route exact path='/' element={<Homepage />} >
        </Route>
        </Routes>
 
   </div>
  );
  };
export default App;
