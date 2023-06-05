import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ReturnAndSyncButtons from '../../../../../../Components/ReturnAndSyncButtons'
import Title from '../../../../../../Components/Title'

const PatientExams = () => {
    const param = useParams()

  return (
    <Container>
        <ReturnAndSyncButtons navigateTo={`/admin/patient/${param.id}`} syncFunction={function (): void {
              throw new Error('Function not implemented.')
          } } />
        <Title label={"Examen"} />
        <p>Not found!!</p>
        
    </Container>
  )
}

const Container = styled.div`
    width: 80%;
    margin: 2rem auto;
    text-align:center;

    @media screen and (max-width:450px){
        width: 90%;
    }
`

export default PatientExams