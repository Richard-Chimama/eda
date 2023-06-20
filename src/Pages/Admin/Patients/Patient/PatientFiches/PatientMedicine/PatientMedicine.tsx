import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ReturnAndSyncButtons from '../../../../../../Components/ReturnAndSyncButtons'
import Title from '../../../../../../Components/Title'

const PatientMedicine = () => {
    const param = useParams()

    return (
      <Container>
          <ReturnAndSyncButtons navigateTo={`/admin/patients/${param.id}`} syncFunction={function (): void {
                throw new Error('Function not implemented.')
            } } />
          <Title label={"Médicine"} />
          Patient Medicine
          
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
export default PatientMedicine