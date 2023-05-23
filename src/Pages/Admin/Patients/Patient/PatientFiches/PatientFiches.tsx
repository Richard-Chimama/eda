import React, { useState } from 'react'
import * as S from "./styled"
import api from '../../../../../API'
import { useQuery } from '@apollo/client'
import StateMessage from '../../../../../Components/StateMessage'
import UpdateFiche from './UpdateFiche'

interface Props{
    patientID?: any
}

const PatientFiches: React.FC<Props> = ({patientID}) => {

    const {loading, error, data} = useQuery(api.Queries.findAllFiches)

    if(loading){
        <StateMessage><h3>Loading</h3></StateMessage>
    }

    if(error){
        <StateMessage><h3>{error.message}</h3></StateMessage>
    }

    const results = data?.form_attendances.filter((fiche:any)=>{
        if(fiche.patient.id.includes(patientID.id)){
            return fiche
        }
    })


    const FichContent = ({data}:{data:any})=>{
        const [isOpen, setIsOpen] = useState(false)
        return <S.FicheContent >
        <p>crée: {new Date(data.createdAt).toLocaleDateString()}</p>
        <button onClick={()=> setIsOpen(!isOpen)}>View</button>
        {isOpen && <UpdateFiche close={setIsOpen} data={data}/>}
    </S.FicheContent>
    }

  return (
    <S.Container>
        <h4>History</h4>
      {results !== undefined && (
        <S.FicheHistory>
          {results.length > 0
            ? results.map((result: any) => {
                return <FichContent key={result.id} data={result} />;
              })
            : "No data found for the patient!"}
        </S.FicheHistory>
      )}
    </S.Container>
  );
}

export default PatientFiches