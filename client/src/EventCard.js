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

      <p className='event_card_text'>
      Purpose: </p>{purpose}

      <p className='event_card_text'>
      Supplies: </p> {supplies}


      <p className='event_card_text'>
      Location: </p> {location}

      <p className='event_card_text'>
      Start Time: </p> {start_time} 

      <p className='event_card_text'>
        Date:</p> 
        {date}

      <p className='event_card_text'>
      End Time:</p> {end_time}
      </div>
      <div id='card_buttons'>
      <button className='button' id='btn1' onClick={handleEmailClick}> 
        Invite your friends!
      </button>
      <button className='button'> 
        Edit
      </button>
      </div>

    </div>
  )
}

export default EventCard