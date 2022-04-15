import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function CreateEvent( { newEvent, setNewEvent }) {

       let navigate = useNavigate();

       //this page is on the /newEventForm


//     const [newEvent, setNewEvent] = useState({
//        eventTitle: '',
//        date:'',
//        purpose: '',
//        supplies: '',
//        location: '',
//        startTime: '',
//        endTime: '',
//        community: ''

//     })

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
       //  .then((data) => console.log(data))
       //  .then(data => setNewEvent((currentEvent) => [...currentEvent, data]))
        .then(data => setNewEvent(data))
        .then(navigate('/homepage'))
       //  .then(navigate('/homepage').push)
    }


    function handleNewEventChange(e){
           setNewEvent((newEvent) => ({...newEvent, [e.target.name]:e.target.value}))
           console.log(e.target)
    }




  return (
    <div>Create Event
        <Form>
         <Form.Group>
                <Form.Label>Event Title:</Form.Label>
                <Form.Control
                type="text"
                name="eventTitle"
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
                name="startTime"
                value={newEvent.startTime}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                type='time'
                name="endTime"
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