import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styled from "styled-components"

interface Props{
    event: any
    closeButton: (state:boolean)=> void
}

const showEvent: React.FC<Props> = ({event, closeButton}) => {
    console.log(event)
  return (
    <Container>
        <div className={"icon"} onClick={()=> closeButton(false)}>
            <AiOutlineCloseCircle size={20} />
        </div>
        <h2>{event.title}</h2>
        <div className="timestamp">
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
        </div>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: 15vh;
    left: 15vw;
    z-index: 9999;
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 1rem;
    font-size: 13px;

    & > .icon{
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        cursor: pointer;
    }

    .event-time{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.7rem;
        margin-top: -1.5rem;
    }

    .timestamp{
        display: flex;
        flex-direction: column;
        gap: -1rem;
    }

`

export default showEvent