import React from 'react'
import * as S from "./styled"
import api from '../../API'
import { useQuery } from '@apollo/client'

const Header = () => {
  const hospitalID = localStorage.getItem("hospitalID")
  const {loading, error, data } = useQuery(api.Queries.findHospitalById,{
    variables: {hospitalId: hospitalID}
  })
  if(error) console.log(error)
  return (
    <>
    { data &&
    <S.container>
    <div className="title">{data.hospital.name.toUpperCase()}</div>
    <div className='address'>Avenue: {data.hospital.address}, Commun: {data.hospital.city}</div>
  </S.container>
}
  </>
)
  
}

export default Header 