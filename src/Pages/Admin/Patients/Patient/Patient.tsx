import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import { useQuery } from '@apollo/client'
import api from '../../../../API'
import StateMessage from '../../../../Components/StateMessage'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CalculateAge from '../../../../Functions/CalculateAge'
import PatientFiches from './PatientFiches'
import { IoIosArrowForward } from "react-icons/io"
import Title from '../../../../Components/Title'
import ReturnAndSyncButtons from '../../../../Components/ReturnAndSyncButtons'
import UserImg from "../../../../assets/user-img.png"

const Patient = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const patientId = useParams()
    const navigate = useNavigate()
    const [results, setResults] = useState<any>([])
    const [isSync, setIsSync] = useState(false)
    const {loading, error, data, refetch} = useQuery(api.Queries.findAllPatients)

    useEffect(()=>{
        if(!loading && !error && data){
           filterResult(data)
           setIsSync(false)
        }
    }, [isSync, loading, error, data])


    const filterResult = (data:any)=>{
        const result = data.patients.filter((patient:any) => {
            if(patient.hospital.some((h:any) => h.id.includes(hospitalID))){
                if(patient.id.includes(patientId.id)){
                    return patient
                }
            }
        })
        setResults(result)
    }

    const handleSycn = ()=>{
        setIsSync(true)
        refetch()
    }
   

  return (
    <S.Container>
        <ReturnAndSyncButtons navigateTo={`/admin/patients`} syncFunction={handleSycn}/>
        <Title label={"Profile de patient"} />
        {loading &&   <StateMessage loading/>}
        {error &&  <StateMessage><h3>{error.message}</h3></StateMessage>}
       { results.length > 0 && <S.Profile>
            <S.ProfileImage>
            <S.Image src={results[0].avatar? results[0].avatar: UserImg} alt={results[0].first_name} />
            </S.ProfileImage>
            <S.ProfileInfo>
                <div><span>Nom:</span> {results[0].first_name} {results[0].middle_name} {results[0].last_name}</div>
                <div><span>DoB:</span> {new Date(results[0].date_of_birth).toLocaleDateString()}</div>
                <div><span>Id-card:</span> {results[0].id_card}</div>
                <div><span>Age:</span> {CalculateAge(results[0].date_of_birth)}</div>
                <div><span>Sexe:</span> <div>{results[0].gender}</div></div>
                <div><span>Adress:</span> <div>{results[0].street_address}</div></div>
                <div><span>Contact:</span> {results[0].patient_phone_number}</div>

            </S.ProfileInfo>    
            
        </S.Profile>
        }

        <div className="options"  onClick={()=> navigate(`/admin/patients/${patientId.id}/visits`)} ><span>Des visites</span><IoIosArrowForward size={20} /></div>
        <div onClick={()=> navigate(`/admin/patients/${patientId.id}/history`)} className="options"><span>Antécédents médicaux</span><IoIosArrowForward size={20} /></div>
        {(results.length > 0 && results[0].gender.toLowerCase() === "f") && <div className="options" onClick={()=> navigate(`/admin/patients/${patientId.id}/test-prenatale`)}><span>Fiche Prenatale</span><IoIosArrowForward size={20} /></div>}
        <div className="options" onClick={()=> navigate(`/admin/patients/${patientId.id}/complaint`)}><span>Plainte</span><IoIosArrowForward size={20} /></div>
        <div className="options" onClick={()=> navigate(`/admin/patients/${patientId.id}/exams`)}><span>Examen</span><IoIosArrowForward size={20} /></div>
        <div className="options" onClick={()=> navigate(`/admin/patients/${patientId.id}/medicine`)}><span>Médicine</span><IoIosArrowForward size={20} /></div>

    </S.Container>
  )
}

export default Patient