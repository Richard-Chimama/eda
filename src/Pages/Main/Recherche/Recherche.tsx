import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../API'
import {useQuery } from "@apollo/client"
import User_img from "../../../assets/user-img.png"
import * as S from "./styled"
import StateMessage from '../../../Components/StateMessage'
import { IoIosArrowForward } from 'react-icons/io'
import Title from '../../../Components/Title'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'


const Recherche = () => {
    const navigate = useNavigate()
    const [searchKey, setSearchKey] = useState("")
    const [isSync, setIsSync ] = useState(false)
    const [ results, setResults] =useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [loadedItems, setLoadedItems] = useState(25);
    const [displayedItems, setDisplayedItems] = useState([]);
    
    const hospitalId = localStorage.getItem("hospitalID")
    const {loading, error, data, refetch } = useQuery(api.Queries.findAllPatients)


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


    useEffect(()=>{
        if(!loading && !error && data){
          setIsSync(false)
          fetchPatients(data)
        }
    },[isSync, loading, error, data, searchKey])
    

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [loadedItems, totalItems]);

    const fetchPatients = (data:any)=>{
      const patients = data?.patients.filter((result:any)=>{
        if(result.hospital.some((d:any)=> d.id.includes(hospitalId))){
          if(result.code.includes(searchKey) || result.first_name.includes(searchKey) ||
              result.last_name.includes(searchKey) || result.middle_name.includes(searchKey)){
              return result
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


       

    
    if(loading){
      return <StateMessage loading />
    }


    if(error){
      return <StateMessage error={error.message}><h3>{error.message}</h3></StateMessage>
    }
    

  return (
    <S.container>
      <ReturnAndSyncButtons navigateTo={'/main'} syncFunction={handleSync}  />
      <Title label={"RECHERCHE PATIENT"} />
      <S.Label role="search">
        <input
          type="search"
          name="search"
          className='form-control'
          id="search"
          aria-label='Search'
          onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
          placeholder="search..."
        />
      </S.Label>
      {
        <S.Content className='list-group' >
          {results !== undefined &&
            displayedItems.map((data: any, index: any) => (
              <S.UserContainer to={"/main/fiches/"+ data.id} key={index} className="list-group-item list-group-item-action rounded-3 d-flex gap-3 py-3"
              aria-current="true">
                <div>
                  <S.UserImage
                    src={data.avatar != null ? data.avatar : User_img}
                    height="70px"
                    width="70px"
                    className='rounded-circle flex-shrink-0'
                  />
                  <div>
                    <span className='mb-0'>
                      <b>Nom's:</b> {data.first_name} {data.middle_name}{" "}
                      {data.last_name}{" "}
                    </span>
                    <span className='mb-0 opacity-75'>
                      <b>Sexe:</b> {data.gender} <b>Code:</b>
                      {data.code}{" "}
                    </span>
                  </div>
                </div>

                <IoIosArrowForward size={25} color={"#228558"} />
              </S.UserContainer>
            ))}
        </S.Content>
      }
    </S.container>
  );
}

export default Recherche