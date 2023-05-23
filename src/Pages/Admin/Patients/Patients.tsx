import React, { useState } from 'react'
import * as S from "./styled"
import api from '../../../API'
import { useQuery } from '@apollo/client'
import User_img from "../../../assets/user-img.png"
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'


const Patients = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const [searchKey, setSearchKey] = useState("")
    const {loading, error, data} = useQuery(api.Queries.findAllPatients)

    if(loading) {
        return <StateMessage><h5>Loading...</h5></StateMessage>
    }

    if(error) {
        return <S.Container><h5>{error.message}</h5></S.Container>
    }

    const patients = data.patients.filter((patient:any) => {
        if(patient.hospital.some((h:any) => h.id.includes(hospitalID))){
            if(patient.code.includes(searchKey) || patient.first_name.includes(searchKey) ||
            patient.last_name.includes(searchKey) || patient.middle_name.includes(searchKey)){
            return patient
            }
        }
    })

  return (
    <S.Container>
        <p style={{color: 'red', textAlign: 'center'}}>This page is under development😉 <Link to="..">Go back</Link></p>

        <h3 style={{color: 'green', textAlign: 'center'}}>LISTE DE CLIENTS</h3>
        <S.Label>
          <input type="search" name="search" id="search" onChange={(e)=> setSearchKey(e.target.value.toLowerCase())} placeholder='search...' />
        </S.Label>

        {
            patients.map((patient:any) =>{
                return (
                  <S.UserContainer
                    to={`/admin/patient/${patient.id}`}
                    key={patient.id}
                  >
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
                    <div>
                      <p>Établi</p>
                      <p>{new Date(patient.createdAt).toLocaleDateString()}</p>
                    </div>
                  </S.UserContainer>
                );
            })
        }
    </S.Container>
  )
}

export default Patients