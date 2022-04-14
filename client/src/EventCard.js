import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'


function EventCard({ eventTitle, date, purpose, supplies, location, startTime, endTime }) {

  

  return (
    <div className='event_card'>
    
      Event title: {eventTitle}
      <br></br>
      Date: {date}
      <br></br>
      Purpose: {purpose}
      <br></br>
      Supplies: {supplies}
      <br></br>
      Location: {location}
      <br></br>
      Start Time: {startTime}
      <br></br>
      End Time: {endTime}
 
    </div>
  )
}

export default EventCard