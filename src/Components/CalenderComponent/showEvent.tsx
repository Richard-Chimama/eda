import React from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styled from "styled-components"

interface Props{
    event: any,
    closeButton: (state:boolean)=> void,
    show: boolean
}

const showEvent: React.FC<Props> = ({event, closeButton, show}) => {
  return (
    <Modal show={show} onHide={()=> closeButton(false)}>
         <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <TimeStamp className="timestamp">
            <span>{event.desc}</span>
                <p>Temps:</p>
            <div className="event-time">
                <p><span>Start:</span><span>{new Date(event.start).toLocaleTimeString()}</span></p>
                <p><span>End:</span><span>{new Date(event.end).toLocaleTimeString()}</span></p>
            </div>
            <div className="event-time">
             <p><span>From:</span> <span>{new Date(event.start).toLocaleDateString()}</span></p>
            <p><span>To:</span> <span>{new Date(event.end).toLocaleDateString()}</span></p>
            </div>
            <div>
                <p><span>Auteur:</span> {event.user.username}</p>
            </div>
        </TimeStamp>
        </Modal.Body> 
    </Modal>
  )
}

const TimeStamp = styled.div`
        display: flex;
        flex-direction: column;
        gap: -1rem;

    .event-time{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.7rem;
        margin-top: -1.5rem;
    }


`

export default showEvent