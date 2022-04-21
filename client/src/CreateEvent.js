import React from 'react'
import Form from 'react-bootstrap/Form'

import { useNavigate } from 'react-router-dom'

function CreateEvent( { newEvent, setNewEvent, setEvents }) {
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
    <div id='create_event_form'>
      
       <Form className='form'>
         <Form.Group>
              <label>Event Title:</label>
              <Form.Control
                type="text"
                name="event_title"
                placeholder='Add event title here'
                value={newEvent.eventTitle}
                onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Date:</label>
          <Form.Group>
              <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Purpose:</label>
          <Form.Group>
              <Form.Control
                type='text'
                name="purpose"
                placeholder='Please add a short description for the event'
                value={newEvent.purpose}
                onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Supplies:</label>
          <Form.Group>
              <Form.Control
                type='text'
                name="supplies"
                placeholder='List supplies here'
                value={newEvent.supplies}
                onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Location:</label>
          <Form.Group>
                <Form.Control
                type='text'
                name="location"
                placeholder="Please add the location here"
                value={newEvent.location}
                onChange={handleNewEventChange}
                />
            </Form.Group>
              <label>Start Time:</label>
            <Form.Group>
              <Form.Control
                type='time'
                name="start_time"
                value={newEvent.startTime}
                onChange={handleNewEventChange}
                />
            </Form.Group>
              <label>End Time:</label>
            <Form.Group>
              <Form.Control
                type='time'
                name="end_time"
                value={newEvent.endTime}
                onChange={handleNewEventChange}
                />
            </Form.Group>
        </Form>
      <div id='event_submit'> 
        <button className='button' onClick={handleEventSubmit}>Submit Event</button>
      </div>
    </div>
  )
}

export default CreateEvent