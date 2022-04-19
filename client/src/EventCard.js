import React from 'react'

import { useNavigate } from 'react-router-dom'


function EventCard({ event_title, date, purpose, supplies, location, start_time, end_time }) {

  let navigate = useNavigate();


  function handleEmailClick(e) {
          console.log("click!")
          navigate('/email')
        }


  return (
    <div className='event_card'>
    
      <h1 id='event_title'>{event_title}</h1>
      <br></br>
      <div id='event_card_text'>
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
 
    </div>
  )
}

export default EventCard