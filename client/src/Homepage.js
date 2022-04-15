import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EventPage from './EventPage'
import EventCard from './EventCard'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'
import Calendar from './Calendar';
import CreateEvent from './CreateEvent';


function Homepage({ events, setEvents, newEvent, setNewEvent }) {


    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then(data => setEvents(data))
        // .then(data => console.log(data))
    }, [])
    
const allEvents = events.map( e => {
    return (
        <EventCard 
            event_title = {e.event_title}
            key = {e.id}
            date = {e.date}
            purpose = {e.purpose}
            supplies = {e.supplies}
            location = {e.location}
            start_time = {e.start_time}
            end_time = {e.end_time}
            community = {e.community_id}
        />
    )
})



  return (
      <>
     <div className='home'>Homepage
        <div className='event_container' >
            <div className='card_scroll'>
            <h1 id='event_container_header'> Events | Calendar </h1>
            {allEvents}
            </div>
            <Calendar />
        
        </div>
            <div className='user_info'> 
            this is where the user will render
            <a className='link'>
                <button> 
                     {/* <Link to='/newEventForm' style={{ textDecoration: 'none' }}>  */}
                    Create New Event
            <CreateEvent events = {events} setEvents={setEvents} newEvent={newEvent} setNewEvent={setNewEvent} />
                     {/* </Link>  */}
                 </button>
            </a>
        </div>
    </div>
    </>
  )
}

export default Homepage