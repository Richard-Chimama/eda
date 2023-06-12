import React, { useCallback, useState, useMemo, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import styled from 'styled-components'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Event from './Event';
import ShowEvent from './showEvent';
import { useMutation, useQuery } from '@apollo/client';
import API from '../../API';
import StateMessage from '../StateMessage';

const CalendarWrapper = styled.div`
  position: relative;
  height: 600px;

  .rbc-calendar {
    height: 100%;
  }
`

const events:any = []

const Calender = ({localizer, dayLayoutAlgorithm = 'no-overlap', selectable = true}:{localizer?:any, dayLayoutAlgorithm?:any, selectable?: boolean}) => {
    const hospitalId = localStorage.getItem('hospitalID')
    const [NewEvent, {loading, error, data}] = useMutation(API.Mutations.NEW_EVENT)
    const {loading: loadingEvents, error: errorEvents, data: dataEvents} = useQuery(API.Queries.findCalendarByHospital, {variables: {hospitalId: hospitalId}})



    const user = localStorage.getItem('user')
    const userInfo = user !== null ? JSON.parse(user) : "no-user-found"
    const [myEvents, setEvents] = useState<any>([])
    const [isOpen, setIsOpen ] = useState(false)
    const [isEventOpen, setIsEventOpen ] = useState(false)
    const [openEvent, setOpenEvent] = useState({})
    const [eventInput, setEventInput ] = useState({title:null, description:null})
    const [durations, setDurations] = useState<any>({start:"", end:""})

    useEffect(()=>{
      if(!loadingEvents && !errorEvents && dataEvents){
        const process = dataEvents.calendar_by_hospital.map((event:any)=>{
            const newStart = createDateFromTimestamp(event.start)
            const newEnd = createDateFromTimestamp(event.end)
            return {
                ...event,
                start: newStart,
                end: newEnd
              }     
        })
        setEvents([...process])
      }
    },[loadingEvents, errorEvents, dataEvents])

    useEffect(()=>{
      if(eventInput.title || eventInput.description){
        handleSelectSlot({ start:durations.start, end:durations.end });
        setIsOpen(false)
        setEventInput({title:null, description:null})
      }
    }, [eventInput])
    
    
    function createDateFromTimestamp(timestamp:any) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
    
      return new Date(year, month, day, hour, minute, second);
    }
    


  const handleSelectSlot = useCallback(
    ({ start, end }:{start:any, end:any}) => {
      setIsOpen(true)
      setDurations({start, end})
      const {title, description } = eventInput

      if (title) {
        try{
          NewEvent({
            variables:{
              start: start,
              end: end,
              title: title,
              desc: description,
              user: userInfo.id,
              hospital: hospitalId
            },
            onCompleted: res =>{
              setEvents((prev:any) => [...prev, { start, end, title, desc:description, user: userInfo.username, hospitalId: hospitalId}])
            },
            onError: err =>{
              console.log(err.message)
            }
          })
        }catch(err){

        }
      }
    },
    [setEvents, eventInput]
  )

  const handleSelectEvent = useCallback(
    (event:any) => {
      setIsEventOpen(true)
      setOpenEvent(event)
    },
    [openEvent, isEventOpen]
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(),
    }),
    []  )
  
    if(loadingEvents){
      return <StateMessage loading />
    }

    if(errorEvents){
      return <StateMessage error={errorEvents.message}><h1>{errorEvents.message}</h1></StateMessage>
    }

    return (
        <Fragment>
          <CalendarWrapper>
            <Calendar
              dayLayoutAlgorithm={dayLayoutAlgorithm}
              defaultDate={defaultDate}
              defaultView={Views.WEEK}
              events={myEvents}
              localizer={localizer}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable={selectable}
              popup
              scrollToTime={scrollToTime}
            />
            {isOpen && <Event CloseButton={setIsOpen} returnInputs={setEventInput} />}
            {isEventOpen && <ShowEvent event={openEvent} closeButton={setIsEventOpen} />}
          </CalendarWrapper>
        </Fragment>
      )
}

 Calender.prototype = {
    localizer: PropTypes.instanceOf(DateLocalizer),
    dayLayoutAlgorithm: PropTypes.string,
}

export default Calender