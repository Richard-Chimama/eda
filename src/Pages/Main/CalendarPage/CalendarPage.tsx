import React, { Fragment } from 'react'
import Calender from '../../../Components/CalenderComponent'
import moment from 'moment'
import { momentLocalizer } from 'react-big-calendar'
import * as S from "./styled"
import Title from '../../../Components/Title'


const CalenderPage = () => {
    const localizer = momentLocalizer(moment)
    
  return (
    <S.Container >
        <Title label={"CALENDRIER"} />
        <Calender localizer={localizer} dayLayoutAlgorithm={"no-overlap"} selectable={false} />
    </S.Container>
  )
}

export default CalenderPage