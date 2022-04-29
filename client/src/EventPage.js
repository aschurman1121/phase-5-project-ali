import React from 'react'
import Form from 'react-bootstrap/Form'

function EventPage() {

  //this page is linked to the /:id/edit page



  

  return (
    <>

    <div>EventPage
    <Form className='form'>
         <Form.Group>
              <label>Event Title:</label>
              <Form.Control
                type="text"
                name="event_title"
                placeholder='Add event title here'
                // value={newEvent.eventTitle}
                // onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Date:</label>
          <Form.Group>
              <Form.Control
                type="date"
                name="date"
                // value={newEvent.date}
                // onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Purpose:</label>
          <Form.Group>
              <Form.Control
                type='text'
                name="purpose"
                placeholder='Please add a short description for the event'
                // value={newEvent.purpose}
                // onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Supplies:</label>
          <Form.Group>
              <Form.Control
                type='text'
                name="supplies"
                placeholder='List supplies here'
                // value={newEvent.supplies}
                // onChange={handleNewEventChange}
                />
          </Form.Group>
              <label>Location:</label>
          <Form.Group>
                <Form.Control
                type='text'
                name="location"
                placeholder="Please add the location here"
                // value={newEvent.location}
                // onChange={handleNewEventChange}
                />
            </Form.Group>
              <label>Start Time:</label>
            <Form.Group>
              <Form.Control
                type='time'
                name="start_time"
                // value={newEvent.startTime}
                // onChange={handleNewEventChange}
                />
            </Form.Group>
              <label>End Time:</label>
            <Form.Group>
              <Form.Control
                type='time'
                name="end_time"
                // value={newEvent.endTime}
                // onChange={handleNewEventChange}
                />
            </Form.Group>
        </Form>

    </div>
    </>
  )
}

export default EventPage