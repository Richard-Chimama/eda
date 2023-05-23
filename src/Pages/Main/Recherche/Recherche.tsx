import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../API'
import {useQuery } from "@apollo/client"
import User_img from "../../../assets/user-img.png"
import * as S from "./styled"

const Recherche = () => {
    const navigate = useNavigate()
    const [searchKey, setSearchKey] = useState("")
    const {loading, error, data } = useQuery(api.Queries.findAllPatients)
    const [ results, setResults] =useState([])
    const hospitalId = localStorage.getItem("hospitalID")


        const patients = data?.patients.filter((result:any)=>{
            if(result.hospital.some((d:any)=> d.id.includes(hospitalId))){
              if(result.code.includes(searchKey) || result.first_name.includes(searchKey) ||
                  result.last_name.includes(searchKey) || result.middle_name.includes(searchKey)){
                  return result
                  }
            }
          })

    
    if(loading){
      return <div style={{height:"100vh", textAlign: "center"}}>Loading...</div>
    }

    if(error){
      return <div style={{height:"100vh", textAlign: "center"}}>{error.message}</div>
    }
    

  return (
    <S.container>
        <h3>Recherche patient</h3>
        This page is under development!!!
        <br />
        <button onClick={()=>navigate("/main")}>Go back</button>
        <br />
        <S.Label>
          <input type="search" name="search" id="search" onChange={(e)=> setSearchKey(e.target.value.toLowerCase())} placeholder='search...' />
        </S.Label>
        {
           <S.Content>
            {data !== undefined &&
            patients.map((data:any, index:any) => <S.UserContainer to={"/main/fiche/"+data.id} key={index}>
                <S.UserImage src={data.avatar != null ? data.avatar: User_img} height="70px" width="70px" />
                <div>
                  <p><b>Nom's:</b> {data.first_name} {data.middle_name} {data.last_name} </p>
                  <p><b>Sexe:</b> {data.gender}    <b>Code:</b>{data.code} </p>
                </div>
                <div>
                  <p>Établi</p>
                  <p>{new Date(data.createdAt).toLocaleDateString()}</p>
                </div>
            </S.UserContainer>)
          }
          </S.Content>
        }
    </S.container>
  )
}

export default Recherche