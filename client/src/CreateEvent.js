import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function CreateEvent( { newEvent, setNewEvent, setEvents }) {

       let navigate = useNavigate();

       //this page is on the /newEventForm



// showing the data upon refresh, erring out when submit is pressed
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

/// move the onChange to  a higher level  - not DRY  --loook at the default states of form, how it reads it

  return (
    <div>Create Event
        <Form>
         <Form.Group>  
                <Form.Label>Event Title:</Form.Label>
                <Form.Control
                type="text"
                name="event_title"
                placeholder='Add event title here'
                value={newEvent.eventTitle}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Purpose:</Form.Label>
                <Form.Control
                type='text'
                name="purpose"
                placeholder='Please add a short description for the event'
                value={newEvent.purpose}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Supplies:</Form.Label>
                <Form.Control
                type='text'
                name="supplies"
                placeholder='List supplies here'
                value={newEvent.supplies}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Location:</Form.Label>
                <Form.Control
                type='text'
                name="location"
                placeholder="Please add the location here"
                value={newEvent.location}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Start Time:</Form.Label>
                <Form.Control
                type='time'
                name="start_time"
                value={newEvent.startTime}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                type='time'
                name="end_time"
                value={newEvent.endTime}
                onChange={handleNewEventChange}
                />
        </Form.Group>

        </Form>

        <Button onClick={handleEventSubmit}>Submit Event</Button>
    </div>
  )
}

export default CreateEvent