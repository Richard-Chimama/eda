import React, { useState } from 'react'
import * as S from "./styled"
import api from '../../../../../API'
import { useQuery } from '@apollo/client'
import StateMessage from '../../../../../Components/StateMessage'
import FichContent from './FicheContent'

interface Props{
    patientID?: any
}

const PatientFiches: React.FC<Props> = ({patientID}) => {

    const {loading, error, data} = useQuery(api.Queries.findAllFiches)

    if(loading){
        <StateMessage loading />
    }

    if(error){
        <StateMessage><h3>{error.message}</h3></StateMessage>
    }

    const results = data?.form_attendances.filter((fiche:any)=>{
        if(fiche.patient.id.includes(patientID.id)){
            return fiche
        }
    })


  return (
    <S.Container>
        <S.Title>History</S.Title>
      {results !== undefined && (
        <S.FicheHistory>
          {results.length > 0
            ? results.reverse().map((result: any) => {
                return <FichContent key={result.id} data={result} />;
              })
            : "No data found for the patient!"}
        </S.FicheHistory>
      )}
    </S.Container>
  );
}

export default PatientFiches