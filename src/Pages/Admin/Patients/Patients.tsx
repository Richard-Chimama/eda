import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import api from '../../../API'
import { useQuery } from '@apollo/client'
import User_img from "../../../assets/user-img.png"
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import Title from '../../../Components/Title'
import { IoIosArrowForward } from 'react-icons/io'


const Patients = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const [searchKey, setSearchKey] = useState("")
    const [results, setResults ] = useState<any>([])
    const {loading, error, data} = useQuery(api.Queries.findAllPatients)


    useEffect(()=>{
      if(!loading && !error && data){
          filterPatients(data)
      }

    }, [loading, error, data, searchKey])

    if(loading) {
        return <StateMessage loading />
    }

    if(error) {
        return <S.Container><h5>{error.message}</h5></S.Container>
    }


    const filterPatients = (data:any)=>{
      const patients = data.patients.filter((patient:any) => {
        if(patient.hospital.some((h:any) => h.id.includes(hospitalID))){
            if(patient.code.includes(searchKey) || patient.first_name.includes(searchKey) ||
            patient.last_name.includes(searchKey) || patient.middle_name.includes(searchKey)){
            return patient
            }
        }
    })
      setResults(patients)
    }


  return (
    <S.Container>
        <Title label="LISTE DE CLIENTS"/>
        <S.Label>
          <input type="search" name="search" id="search" onChange={(e)=> setSearchKey(e.target.value.toLowerCase())} placeholder='search...' />
        </S.Label>

        {
            results.map((patient:any) =>{
                return (
                  <S.UserContainer
                    to={`/admin/patient/${patient.id}`}
                    key={patient.id}
                  >
                    <S.UserDetail>
                      <S.UserImage
                        src={patient.avatar != null ? patient.avatar : User_img}
                        height="70px"
                        width="70px"
                      />
                      <S.UserInfo>
                        <span>
                          <b>Nom's:</b> {patient.first_name} {patient.middle_name}{" "}
                          {patient.last_name}{" "}
                        </span>
                        <span>
                          <b>Sexe:</b> {patient.gender} <b style={{marginLeft:"1.5rem"}}>Code:</b>
                          {patient.code}{" "}
                        </span>
                      </S.UserInfo>

                    </S.UserDetail>

                    <IoIosArrowForward size={25} color={"#228558"} />
                    
                  </S.UserContainer>
                );
            })
        }
    </S.Container>
  )
}

export default Patients