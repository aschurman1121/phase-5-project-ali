import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router-dom'

function CreateEvent( { newEvent, setNewEvent, events, setEvents }) {
//path -> /newEventForm

       let navigate = useNavigate();


    function handleEventSubmit(e){
        e.preventDefault();
        fetch('/events/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent)
        })
        .then(r => r.json()) 
        .then(data => setEvents((events) => [...events, data]))
        .then(navigate('/homepage'))
    }


    function handleNewEventChange(e){
           setNewEvent((newEvent) => ({...newEvent, [e.target.name]:e.target.value}))
           console.log(e.target)
    }

  return (
    <div id='create_event_form'>Create Event
       <form className='form'>
              <label>Event Title:</label>
              <input
                type="text"
                name="event_title"
                placeholder='Add event title here'
                value={newEvent.eventTitle}
                onChange={handleNewEventChange}
                />
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleNewEventChange}
                />
         
              <label>Purpose:</label>
              <input
                type='text'
                name="purpose"
                placeholder='Please add a short description for the event'
                value={newEvent.purpose}
                onChange={handleNewEventChange}
                />
              <label>Supplies:</label>
              <input
                type='text'
                name="supplies"
                placeholder='List supplies here'
                value={newEvent.supplies}
                onChange={handleNewEventChange}
                />

              <label>Location:</label>
                <input
                type='text'
                name="location"
                placeholder="Please add the location here"
                value={newEvent.location}
                onChange={handleNewEventChange}
                />
              <label>Start Time:</label>
              <input
                type='time'
                name="start_time"
                value={newEvent.startTime}
                onChange={handleNewEventChange}
                />
              <label>End Time:</label>
              <input
                type='time'
                name="end_time"
                value={newEvent.endTime}
                onChange={handleNewEventChange}
                />
        </form>

        <button onClick={handleEventSubmit}>Submit Event</button>
    </div>
  )
}

export default CreateEvent