import { useMutation, useQuery } from '@apollo/client'
import React, {useState} from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import * as S from "./styled"
import api from '../../../API'

const Fiche = () => {
  const navigate = useNavigate()
  const patientId = useParams()
  const [code, setCode] = useState("19960101-9009")
  const [inputs, setInputs] = useState({
    gs:"",
    rh: "",
    ta: "",
    poids:"",
    taile:"",
    temperature: "",
    allergie: "",
    intoxication: "",
    atcdChirurgicaux: "",
    atcdMedicaux: "",
    pouls: "",
    observations: "",
    prescription: "",
  })


  const handleChange = (e: { target: { name: any; value: any } })=>{
    const name = e.target.name
    const value = e.target.value
    setInputs({...inputs, [name]: value})

  }

  const {loading, error, data} = useQuery(api.Queries.findAllPatients)
  const result = data.patients.filter((p:any) => {
    if(p.id.includes(patientId.id)){
      return p
    }
  })

  const [newFiche, {loading:Loading, error: Error, data: Data}]= useMutation(api.Mutations.NEW_FICHE)

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    newFiche({
      variables:{
        patient: patientId.id,
        prescription: inputs.prescription,
        observations: inputs.observations,
        ta: inputs.ta,
        taile: inputs.taile,
        poids: inputs.poids,
        temperature: inputs.temperature,
        allergie: inputs.allergie,
        intoxication: inputs.intoxication,
        atcdChirurgicaux: inputs.atcdChirurgicaux,
        atcdMedicaux: inputs.atcdMedicaux,
        rh: inputs.rh,
        gs: inputs.gs,
        pouls: inputs.pouls,

      }
    }).then((data) => { 
      console.log("successful")
      navigate("/main")
    })
    .catch(err => console.log(err.message))

  }

  const date = new Date()
  const currentYear = date.getFullYear()
  const DoB = new Date(result[0].date_of_birth).getFullYear()
  const age = currentYear - DoB

  return (
    <S.Container>
        <p style={{color:"red"}}>This page is under development😉</p>

        <button onClick={()=>navigate("/main")}>Go back</button>
        <br />
      <S.Title>FICHE</S.Title>
          <S.PatientInfo>
              <img src={result[0].avatar} height="300px" width="270px"/>
              <div>
                <p>Nom: {result[0].first_name}</p>
                <p>Prenom: {result[0].last_name}</p>
                <p>Sexe: {result[0].gender}</p>
                <p>Date de naisance: {new Date(result[0].date_of_birth).toLocaleDateString()}</p>
                <p>Age: {age}</p>
              </div>
        </S.PatientInfo>
      <S.Cutter></S.Cutter>
      <form>
        <S.FormSection>
          <S.Label htmlFor='gs'>GS:
            <input type="text" name="gs" value={inputs.gs} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='rh'>RH:
            <input type="text" name="rh" value={inputs.rh} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='ta'>TA:
            <input type="text" name="ta" value={inputs.ta} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='poids'>Poids:
            <input type="text" name="poids" value={inputs.poids} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='taile'>Taile:
            <input type="text" name="taile" value={inputs.taile} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='temperature'>Temperature:
            <input type="text" name="temperature" value={inputs.temperature} onChange={handleChange} required/>
          </S.Label>
          <S.Label htmlFor='allergie'>Allergie:
            <input type="text" name="allergie" value={inputs.allergie} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='intoxication'>Intoxication:
            <input type="text" name="intoxication" value={inputs.intoxication} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='atcdChirurgicaux'>ATCD Chirurgicaux:
            <input type="text" name="atcdChirurgicaux" value={inputs.atcdChirurgicaux} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='atcdMedicaux'>ATCD Medicaux:
            <input type="text" name="atcdMedicaux" value={inputs.atcdMedicaux} onChange={handleChange} />
          </S.Label>
          <S.Label htmlFor='pouls'>Pouls:
            <input type="text" name="pouls" value={inputs.pouls} onChange={handleChange} />
          </S.Label>
        </S.FormSection>
          <S.FormSection>
          <S.Label htmlFor='observations'>Observations:
            <textarea name="observations" value={inputs.observations} onChange={handleChange} required/>
          </S.Label>
          <S.Label htmlFor='prescription'>Prescription:
            <textarea name="prescription" value={inputs.prescription} onChange={handleChange} />
          </S.Label>

          </S.FormSection>
        <S.SubmitButton>
          <input type="submit" value="Enregistrer" />
        </S.SubmitButton>
        
      </form>
    </S.Container>
  )
}


export default Fiche