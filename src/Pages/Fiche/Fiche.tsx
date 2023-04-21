import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../Components/FormComponent/Form'
import * as S from "./styled"

const Fiche = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
        <p style={{color:"red"}}>This page is under development😉</p>

        <button onClick={()=>navigate("/")}>Go back</button>
        <br />
      <h3>Fiche</h3>
      <Form />
    </S.Container>
  )
}

export default Fiche