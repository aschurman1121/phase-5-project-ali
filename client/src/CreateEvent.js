import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function CreateEvent() {

       let navigate = useNavigate();

       //this page is on the /newEventForm


    const [newEvent, setNewEvent] = useState({
       eventTitle: '',
       date:'',
       purpose: '',
       supplies: '',
       location: '',
       startTime: '',
       endTime: '',
       community: ''

    })

    function handleEventSubmit(e){
        e.preventDefault();
        fetch('/newEventForm', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent)
        })
        .then(r => r.json()) 
        .then(data => setNewEvent((currentEvent) => [...currentEvent, data]))
        .then(navigate('/homepage'))
       //  .then(navigate.push('/homepage'))
    }


    function handleNewEventChange(e){
           setNewEvent((newEvent) => ({...newEvent, [e.target.name]:e.target.value}))
           console.log(e.target)
    }




  return (
       <>
       <div id='navbar_home'>
       <NavBar/>
       </div>
    <div>Create Event
        <Form>
         <Form.Group>
                <Form.Label>Event Title:</Form.Label>
                <Form.Control
                type="text"
                placeholder='Add event title here'
                value={newEvent.eventTitle}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control
                type="date"
              //   placeholder='Add event title here'
                value={newEvent.date}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Purpose:</Form.Label>
                <Form.Control
                type='text'
                placeholder='Please add a short description for the event'
                value={newEvent.purpose}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Supplies:</Form.Label>
                <Form.Control
                type='text'
                placeholder='List supplies here'
                value={newEvent.supplies}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>Start Time:</Form.Label>
                <Form.Control
                type='time'
                value={newEvent.startTime}
                onChange={handleNewEventChange}
                />
         </Form.Group>
         <Form.Group>
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                type='time'
                value={newEvent.endTime}
                onChange={handleNewEventChange}
                />
        </Form.Group>

        </Form>

        <Button onSubmit={handleEventSubmit}>Submit Event</Button>
    </div>
    </>
  )
}

export default CreateEvent