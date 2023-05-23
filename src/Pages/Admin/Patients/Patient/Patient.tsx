import React from 'react'
import * as S from "./styled"
import { useQuery } from '@apollo/client'
import api from '../../../../API'
import StateMessage from '../../../../Components/StateMessage'
import { Link, useParams } from 'react-router-dom'
import CalculateAge from '../../../../Functions/CalculateAge'
import PatientFiches from './PatientFiches'

const Patient = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const patientId = useParams()
    const {loading, error, data} = useQuery(api.Queries.findAllPatients)

    const result = data?.patients.filter((patient:any) => {
        if(patient.hospital.some((h:any) => h.id.includes(hospitalID))){
            if(patient.id.includes(patientId.id)){
                return patient
            }
        }
    })


  return (
    <S.Container>
        <h2 style={{textAlign: 'center'}}>Profile de patient</h2>
        {loading &&   <StateMessage><h3>Loading...</h3></StateMessage>}
        {error &&  <StateMessage><h3>{error.message}</h3></StateMessage>}
        <p style={{textAlign: 'center', color:"red"}}>This page is under development <Link to="..">Go back</Link></p>
       { result !== undefined && <S.Profile>
            <S.ProfileImage>
            <S.Image src={result[0].avatar} alt={result[0].first_name} />
            </S.ProfileImage>
            <S.ProfileInfo>
                <div><span>Nom:</span> {result[0].first_name} {result[0].middle_name} {result[0].last_name}</div>
                <div><span>DoB:</span> {new Date(result[0].date_of_birth).toLocaleDateString()}</div>
                <div><span>Id-card:</span> {result[0].id_card}</div>
                <div><span>Age:</span> {CalculateAge(result[0].date_of_birth)}</div>
                <div><span>Sexe:</span> <div>{result[0].gender}</div></div>
                <div><span>Adress:</span> <div>{result[0].street_address}</div></div>
                <div><span>Contact:</span> {result[0].patient_phone_number}</div>

            </S.ProfileInfo>    
            
        </S.Profile>
        }

        <PatientFiches patientID={patientId} />

    </S.Container>
  )
}

export default Patient