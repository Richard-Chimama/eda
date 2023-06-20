import React from 'react'
import { useParams } from 'react-router-dom'
import ReturnAndSyncButtons from '../../../../../../Components/ReturnAndSyncButtons'
import Title from '../../../../../../Components/Title'
import styled from 'styled-components'

const PatientComplaint = () => {
    const param = useParams()

  return (
    <Container>
        <ReturnAndSyncButtons navigateTo={`/admin/patients/${param.id}`} syncFunction={function (): void {
              throw new Error('Function not implemented.')
          } } />
        <Title label={"Plainte"} />
        PatientComplaint
        
    </Container>
  )
}

const Container = styled.div`
    width: 90%;
    margin: 2rem auto 0 auto;
    min-height: 100vh;

    @media screen and (max-width:450px){
        width: 95%;
    }
`

export default PatientComplaint