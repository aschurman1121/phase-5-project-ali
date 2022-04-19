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
    <div className='home'>Homepage
            <div className='event_container' >
                <div className='card_scroll'>
                <h1 id='event_container_header'> Events </h1>
                    {allEvents}
                </div>    
            </div>

        <div className='user_info'> 
            this is where the user will render
            <span className='link'>
                <CreateEvent events = {events} 
                             setEvents={setEvents} 
                             newEvent={newEvent} 
                             setNewEvent={setNewEvent} />
                        <button> 
                        Create New Event
                        </button>
            </span>
        </div>
        <Email /> 
    </div>
     </>
  )
}

export default Homepage