import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'


function EventCard({ event_title, date, purpose, supplies, location, start_time, end_time }) {

  
  // const [events, setEvents] = useState([])
  
  // useEffect(() => {
  //     fetch('/event')
  //     .then(r => r.json())
  //     .then(data => setEvents(data))
  // }, [])

  //event's ( i.e. {allEvents}) do not render when a user signs up, need to create an access point between events & neighbors on the front end. Backend macros in place. 
  
  // const allEvents = events.map( e => {
  // return (
  //     <EventPage 
  //         eventTitle = {e.event_title}
  //         key = {e.id}
  //         date = {e.date}
  //         purpose = {e.purpose}
  //         supplies = {e.supplies}
  //         location = {e.location}
  //         startTime = {e.start_time}
  //         endTimee = {e.end_time}
  //         community = {e.community_id}
  //     />
  // )
  // })
  return (
    <div className='event_card'>
    
      Event title: {event_title}
      <br></br>
      Date: {date}
      <br></br>
      Purpose: {purpose}
      <br></br>
      Supplies: {supplies}
      <br></br>
      Location: {location}
      <br></br>
      Start Time: {start_time}
      <br></br>
      End Time: {end_time}
 
    </div>
  )
}

export default EventCard