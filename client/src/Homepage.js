import React, { useEffect } from 'react'
import EventCard from './EventCard'
import CreateEvent from './CreateEvent';
import Email from './Email';


function Homepage({ events, setEvents, newEvent, setNewEvent }) {

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then(data => setEvents(data))
    }, [setEvents])
    

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
    <div className='home'>
            <div className='event_container' >
                <div className='card_scroll'>
                <h1 id='event_container_header'> Events </h1>
                    {allEvents}
                </div>    
            </div>

        <div className='new_form_container'> 
            <h2 id='event_container_header' > Create an event here!</h2>
            <span className='link'>
                <CreateEvent events = {events} 
                             setEvents={setEvents} 
                             newEvent={newEvent} 
                             setNewEvent={setNewEvent} />
            </span>
        </div>

    </div>
     </>
  )
}

export default Homepage