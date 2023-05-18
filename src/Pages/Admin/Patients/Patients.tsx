import React, { useState } from 'react'
import * as S from "./styled"
import api from '../../../API'
import { useQuery } from '@apollo/client'
import User_img from "../../../assets/user-img.png"
import { Link } from 'react-router-dom'


const Patients = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const [searchKey, setSearchKey] = useState("")
    const {loading, error, data} = useQuery(api.Queries.findAllPatients)

    if(loading) {
        return <S.Container>Loading...</S.Container>
    }

    if(error) {
        return <S.Container>{error.message}</S.Container>
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

        <S.Label>
          <input type="search" name="search" id="search" onChange={(e)=> setSearchKey(e.target.value.toLowerCase())} placeholder='search...' />
        </S.Label>

        {
            patients.map((patient:any) =>{
                return <S.UserContainer to="/admin/patients/:id" key={patient.id}>
                    <S.UserImage src={patient.avatar != null ? patient.avatar: User_img} height="70px" width="70px" />
                     <div>
                  <p><b>Nom's:</b> {patient.first_name} {patient.middle_name} {patient.last_name} </p>
                  <p><b>Sexe:</b> {patient.gender}    <b>Code:</b>{patient.code} </p>
                </div>
                <div>
                  <p>Établi</p>
                  <p>{new Date(patient.createdAt).toLocaleDateString()}</p>
                </div>
                </S.UserContainer>
            })
        }
    </S.Container>
  )
}

export default Patients