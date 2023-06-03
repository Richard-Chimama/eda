import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import api from '../../../../../API'
import { useQuery } from '@apollo/client'
import StateMessage from '../../../../../Components/StateMessage'
import FichContent from './FicheContent'
import { Link, useParams } from 'react-router-dom'
import { IoSync } from "react-icons/io5"
import { IoIosArrowBack } from 'react-icons/io'
import Title from '../../../../../Components/Title'
import ReturnAndSyncButtons from '../../../../../Components/ReturnAndSyncButtons'



const PatientFiches: React.FC= () => {
  const patientID = useParams()
  const [ result, setResults ] = useState<any>(null)
  const [ syncClicked, setSyncClicked ] = useState(false)
  const [displayedItems, setDisplayedItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loadedItems, setLoadedItems] = useState(25);


    const {loading, error, data, refetch} = useQuery(api.Queries.findAllFiches)

    useEffect(()=>{
      if(!loading && !error && data){
        processData(data)
        setSyncClicked(false)
      } 
    },[syncClicked, loading, error, data])

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [loadedItems, totalItems]);


    const handleSyncClick = ()=> {
      setSyncClicked(true)
      refetch()
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  
      if (scrollTop + windowHeight >= documentHeight) {
        if (loadedItems < totalItems) {
          const newLoadedItems = Math.min(loadedItems + 25, totalItems);
          setDisplayedItems(result.slice(0, newLoadedItems));
          setLoadedItems(newLoadedItems);
        }
      }
    };

 

    const processData = (data:any)=>{
      const results = data.form_attendances.filter((fiche:any)=>{
        if(fiche.patient.id.includes(patientID.id)){
            return fiche
        }
      })
      setResults(results)
      setDisplayedItems(results.reverse().slice(0, loadedItems));
      setTotalItems(results.length);
    }


  return (
    <S.Container>
      <ReturnAndSyncButtons
        navigateTo={`/admin/patient/${patientID.id}`}
        syncFunction={handleSyncClick}
      />
      <Title label={"ANTÉCÉDENTS MÉDICAUX"} />
      {loading && <StateMessage loading />}
      {error && (
        <StateMessage>
          <h3>{error.message}</h3>
        </StateMessage>
      )}
      {displayedItems !== undefined && (
        <S.FicheHistory>
          {totalItems > 0
            ? displayedItems.map((result: any) => {
                return <FichContent key={result.id} data={result} />;
              })
            : "No data found for the patient!"}
        </S.FicheHistory>
      )}
    </S.Container>
  );
}

export default PatientFiches