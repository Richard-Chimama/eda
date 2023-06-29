import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { FiPrinter } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import API from '../../../../../../API'
import ReturnAndSyncButtons from '../../../../../../Components/ReturnAndSyncButtons'
import StateMessage from '../../../../../../Components/StateMessage'
import Title from '../../../../../../Components/Title'
import { GET_DATE_TIME } from '../../../../../../Functions/utility/UseFullFC'

const PatientTestPrenatale = () => {
    const param = useParams()
    const [results, setResults] = useState<any>([])
    const {loading, error, data, refetch} = useQuery(API.Queries.findPatientFichePrenatale, 
        {variables:{patientId: param.id}})

    useEffect(()=>{
      if(!loading && !error && data){
          setResults(data.fiche_prenatale)
      }
    },[data, loading, error, refetch])
        
    const handleSync = ()=>{
      refetch()
    }

 
    if(loading){
      return <StateMessage loading />
    }

    if(error){
      return <StateMessage error={error.message}><h4>{error.message}</h4></StateMessage>
    }
  return (
    <Container>
      <ReturnAndSyncButtons
        navigateTo={`/admin/patients/${param.id}`}
        syncFunction={handleSync}
      />
      <Title label={"Consultation Prenatale"} />
      {results.length > 0 ? (
        <div className="">
          {[...results].reverse().map((result: any) => (
            <Item
              className=" rounded-3 d-flex gap-3 mt-2 py-2"
              key={result.id}
              aria-current="true"
            >
              <ItemInfo>
                <div>
                  <strong>Assisté par:</strong>
                  <span>{result.users[0].username}</span>
                </div>
                <div>
                  <strong>Date:</strong>
                  <span>{GET_DATE_TIME(result.createdAt)}</span>
                </div>
              </ItemInfo>
              <ItemIcons>
                <FiPrinter size="25" onClick={() => alert("Print")} />
                <AiOutlineEye
                  size="25"
                  onClick={() => alert("View")}
                />
              </ItemIcons>
            </Item>
          ))}
        </div>
      ) : (
        <p>Il n'y a pas de données pour l'instant!!</p>
      )}
    </Container>
  );
}

const Container = styled.div`
    width: 80%;
    margin: 2rem auto 0 auto;
    text-align:center;
    min-height: 100vh;

    @media screen and (max-width:450px){
        width: 90%;
    }
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 0.7rem;
  background-color: #fff;
  border: 1px solid #228558;
  color: #228558;
`

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const ItemIcons = styled.div`
  display: flex;
  gap:.5em;
`

export default PatientTestPrenatale