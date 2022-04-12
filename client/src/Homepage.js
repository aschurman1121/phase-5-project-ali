import React, { useState, useEffect } from 'react'
import EventPage from './EventPage'
import EventCard from './EventCard'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'



function Homepage() {

    const [event, setEvent] = useState([])

    useEffect(() => {
        fetch('/event')
        .then(r => r.json)
        .then(data => console.log(data))
    })

    // linked to the '/' & the event controller and the neighbor controller
  return (
      <>
      <div id='navbar_home'>
      <NavBar/>
      </div>
        <div className='home'>Homepage
        <div className='event_container'>
            <EventCard />
        <Button> Create New Event </Button>
        </div>
    </div>
    </>
  )
}

export default Homepage