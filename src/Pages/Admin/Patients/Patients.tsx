import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import api from '../../../API'
import { useQuery } from '@apollo/client'
import User_img from "../../../assets/user-img.png"
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import Title from '../../../Components/Title'
import { IoIosArrowForward } from 'react-icons/io'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'
import 'bootstrap/dist/css/bootstrap.css'



const Patients = () => {
    const hospitalID = localStorage.getItem("hospitalID")
    const [searchKey, setSearchKey] = useState("")
    const [results, setResults ] = useState<any>([])
    const [isSync, setIsSync ] = useState<boolean>(false)
    const [totalItems, setTotalItems] = useState(0);
    const [loadedItems, setLoadedItems] = useState(25);
    const [displayedItems, setDisplayedItems] = useState([]);

    
    const {loading, error, data, refetch} = useQuery(api.Queries.findAllPatients)

    useEffect(()=>{
      if(!loading && !error && data){
          filterPatients(data)
          setIsSync(false)
      }

    }, [isSync, loading, error, data, searchKey])

 

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  
      if (scrollTop + windowHeight >= documentHeight) {
        if (loadedItems < totalItems) {
          const newLoadedItems = Math.min(loadedItems + 25, totalItems);
          setDisplayedItems(results.slice(0, newLoadedItems));
          setLoadedItems(newLoadedItems);
        }
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [loadedItems, totalItems]);

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
      setDisplayedItems(patients.reverse().slice(0, loadedItems))
      setTotalItems(patients.length)
    }

    const handleSync = ()=>{
      setIsSync(true)
      refetch()
    }

    if(loading) {
      return <StateMessage loading />
  }

  if(error) {
      return <S.Container><h5>{error.message}</h5></S.Container>
  }


  return (
    <S.Container>
        <ReturnAndSyncButtons navigateTo='/admin/' syncFunction={handleSync} />
        <Title label="LISTE DE CLIENTS"/>
        <S.Label role="search">
          <input className='form-control' type="search" aria-label='Search' name="search" id="search" onChange={(e)=> setSearchKey(e.target.value.toLowerCase())} placeholder='search...' />
        </S.Label>
        <div className='list-group'>
        {
            displayedItems.map((patient:any) =>{
                return (
                  <S.UserContainer
                    to={`/admin/patient/${patient.id}`}
                    key={patient.id}
                    className="list-group-item list-group-item-action rounded-3 d-flex gap-3 py-3"
                    aria-current="true"
                  >
                    <S.UserDetail>
                      <S.UserImage
                        src={patient.avatar != null ? patient.avatar : User_img}
                        height="70px"
                        width="70px"
                        className='rounded-circle flex-shrink-0'
                      />
                      <S.UserInfo>
                        <span className='mb-0'>
                          <b>Nom's:</b> {patient.first_name} {patient.middle_name}{" "}
                          {patient.last_name}{" "}
                        </span>
                        <span className='mb-0 opacity-75'>
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
        </div>
    </S.Container>
  )
}

export default Patients