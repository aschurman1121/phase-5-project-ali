import React from 'react'

import { useNavigate } from 'react-router-dom'


function EventCard({ event_title, date, purpose, supplies, location, start_time, end_time }) {

  let navigate = useNavigate();



  //event's ( i.e. {allEvents}) do not render when a user signs up, need to create an access point between events & neighbors on the front end. Backend macros in place. 
 
        function handleEmailClick(e) {
          console.log("click!")
          navigate('/email')
        }

// look into dstructuring the render -- react specific-- Loops over one value dynamically 

  return (
    <div className='event_card'>
    
      Event title: {event_title}
      <br></br>
      Date: {date}

      <br></br>
      <button onClick={handleEmailClick}> Email to your friends!  </button>
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