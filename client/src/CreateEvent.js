import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './NavBar'

function CreateEvent() {

       //this page is on the /newEventForm

       // const newEventObj = {
       // 'event title',
       // 'date',
       // 'purpose',
       // 'supplies',
       // 'location',
       // ''
       // }

    const [newEvent, setNewEvent] = useState("")

    function handleEventSubmit(e){
        e.preventDefault();
        fetch('/newEventForm', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newEvent})
        })
        .then(r => r.json()) 
        .then(data => setNewEvent(data))
    }



    // function handleEventSubmit(e) {
    //     setNewEvent(e.target.value)
    //     console.log(newEvent)
    // }


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
                onChange={handleEventSubmit}>
                    
                </Form.Control>
         </Form.Group>
         <Form.Group>
                <Form.Label>Purpose:</Form.Label>
                <Form.Control
                type='text'
                placeholder='Please add a short description for the event'
                ></Form.Control>
         </Form.Group>
         <Form.Group>
                <Form.Label>Supplies:</Form.Label>
                <Form.Control
                type='text'
                placeholder='List supplies here'
                ></Form.Control>
         </Form.Group>
         <Form.Group>
                <Form.Label>Start Time:</Form.Label>
                <Form.Control
                type='time'
                ></Form.Control>
         </Form.Group>
         <Form.Group>
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                type='time'
                ></Form.Control>
         </Form.Group>

        </Form>

        <Button onSubmit={handleEventSubmit}>Submit Event</Button>
    </div>
    </>
  )
}

export default CreateEvent