import { useMutation, useQuery } from '@apollo/client'
import React, {useState} from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import * as S from "./styled"
import api from '../../../API'
import CalculateAge from '../../../Functions/CalculateAge'
import StateMessage from '../../../Components/StateMessage'
import Title from '../../../Components/Title'

const Fiche = () => {
  const navigate = useNavigate()
  const patientId = useParams()
  const [inputs, setInputs] = useState({
    gs:"",
    rh: "",
    ta: "",
    poids:"",
    taille:"",
    temperature: "",
    allergie: "",
    intoxication: "",
    atcdChirurgicaux: "",
    atcdMedicaux: "",
    pouls: "",
    observations: "",
    prescription: "",
  })

  const userId = localStorage.getItem('userId')

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
        observations: inputs.observations.trim(),
        ta: inputs.ta.trim(),
        taille: inputs.taille.trim(),
        poids: inputs.poids.trim(),
        temperature: inputs.temperature.trim(),
        allergie: inputs.allergie.trim(),
        intoxication: inputs.intoxication.trim(),
        atcdChirurgicaux: inputs.atcdChirurgicaux.trim(),
        atcdMedicaux: inputs.atcdMedicaux.trim(),
        rh: inputs.rh.trim(),
        gs: inputs.gs.trim(),
        pouls: inputs.pouls.trim(),
        user: userId
      }
    }).then((data) => { 
      console.log("successful")
      navigate("/main")
    })
    .catch(err => console.log(err.message))

  }

  if(Loading || loading){
    return <StateMessage loading />
  }

  if(Error){
    return <StateMessage error={Error.message}><h3>{Error.message}</h3></StateMessage>
  }



  return (
    <S.Container>
      <Title label={"FICHE DE CONSULTATION PATIENT"} />
      <S.PatientInfo>
        <img src={result[0].avatar} height="200px" width="170px" />
        <S.Info>
          <span>Nom: {result[0].first_name}</span>
          <span>Prenom: {result[0].last_name}</span>
          <span>Sexe: {result[0].gender}</span>
          <span>
            Date de naisance:{" "}
            {new Date(result[0].date_of_birth).toLocaleDateString()}
          </span>
          <span>Age: {CalculateAge(result[0].date_of_birth)}</span>
        </S.Info>
      </S.PatientInfo>
      <S.Cutter></S.Cutter>
      <form onSubmit={handleSubmit}>
        <S.FormSection>
          <S.Label htmlFor="gs">
            GS:
            <input
              type="text"
              name="gs"
              value={inputs.gs}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="rh">
            RH:
            <input
              type="text"
              name="rh"
              value={inputs.rh}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="ta">
            TA:
            <input
              type="text"
              name="ta"
              value={inputs.ta}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="poids">
            Poids:
            <input
              type="text"
              name="poids"
              value={inputs.poids}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="taille">
            Taille:
            <input
              type="text"
              name="taille"
              value={inputs.taille}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="temperature">
            Temperature:
            <input
              type="text"
              name="temperature"
              value={inputs.temperature}
              onChange={handleChange}
              required
            />
          </S.Label>
          <S.Label htmlFor="allergie">
            Allergie:
            <input
              type="text"
              name="allergie"
              value={inputs.allergie}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="intoxication">
            Intoxication:
            <input
              type="text"
              name="intoxication"
              value={inputs.intoxication}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="atcdChirurgicaux">
            ATCD Chirurgicaux:
            <input
              type="text"
              name="atcdChirurgicaux"
              value={inputs.atcdChirurgicaux}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="atcdMedicaux">
            ATCD Medicaux:
            <input
              type="text"
              name="atcdMedicaux"
              value={inputs.atcdMedicaux}
              onChange={handleChange}
            />
          </S.Label>
          <S.Label htmlFor="pouls">
            Pouls:
            <input
              type="text"
              name="pouls"
              value={inputs.pouls}
              onChange={handleChange}
            />
          </S.Label>
        </S.FormSection>
        <S.FormSection>
          <S.Label htmlFor="observations">
            Observations:
            <textarea
              name="observations"
              value={inputs.observations}
              onChange={handleChange}
              required
            />
          </S.Label>
        </S.FormSection>
        <S.SubmitButton>
          <input type="submit" value="Enregistrer" />
        </S.SubmitButton>
      </form>
    </S.Container>
  );
}


export default Fiche