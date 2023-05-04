import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../Components/FormComponent/Form'
import TextArea from '../../Components/TextArea/TextArea'
import * as S from "./styled"

const Fiche = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState("19960101-9009")
  return (
    <S.Container>
        <p style={{color:"red"}}>This page is under development😉</p>

        <button onClick={()=>navigate("/main")}>Go back</button>
        <br />
      <S.Title>FICHE</S.Title>
      <Form />
      <S.Code>
        <label>CODE : </label>
        <input type="text" name="code" id="code" value={code} disabled/>
      </S.Code>
      <S.Cutter></S.Cutter>
      <S.Area>
        <TextArea title={"OBSERVATION"} />
      </S.Area>
      <S.Area>
        <TextArea title={"PRESCRIPTION"} />
      </S.Area>

      <S.SubmitButton>ENREGISTRER</S.SubmitButton>
    </S.Container>
  )
}


export default Fiche