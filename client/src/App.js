import React, { useState, useEffect} from 'react';
import './App.css';
import Login from './Login';




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

  // return (
  //  <div>
  //    <Login />
  //  </div>
  // );
}

export default App;
