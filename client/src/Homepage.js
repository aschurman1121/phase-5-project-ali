import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EventPage from './EventPage'
import EventCard from './EventCard'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button'
import Calendar from './Calendar';
import CreateEvent from './CreateEvent';


function Homepage({ events, setEvents, newEvent, setNewEvent }) {

    // const [newEvent, setNewEvent] = useState({
    //     event_title: '',
    //     date:'',
    //     purpose: '',
    //     supplies: '',
    //     location: '',
    //     start_time: '',
    //     end_time: '',
    //     community: ''
 
    //  })

    // const [events, setEvents] = useState([])//create event obj to post

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then(data => setEvents(data))
        // .then(data => console.log(data))
    }, [])
    
// const allEvents = events.map( e => {
//     return (
//         <EventCard 
//             eventTitle = {e.event_title}
//             key = {e.id}
//             date = {e.date}
//             purpose = {e.purpose}
//             supplies = {e.supplies}
//             location = {e.location}
//             startTime = {e.start_time}
//             endTime = {e.end_time}
//             community = {e.community_id}
//         />
//     )
// })
// how do I get to see the difference between neighborhood events & my event.
// 1 fetch for each user
// 1 fetch for all the events.
// each user fetch, conditionally render based on a match 
// ---would I do this on the front end?


  return (
      <>
      <div id='navbar_home'>
      <NavBar/>
      </div>
        <div className='home'>Homepage
        <div className='event_container'>
            {/* {allEvents} */}
            <Calendar />
        
            {/* <CreateEvent newEvent={newEvent} setNewEvent={setNewEvent} /> */}
            <a className='link'>
        <button> 
            <Link to='/newEventForm' style={{ textDecoration: 'none' }}> 
            Create New Event
            </Link> 
            </button>
            </a>
        </div>
    </div>
    </>
  )
}

export default Homepage