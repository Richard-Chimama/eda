import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageUpload from '../../../Components/ImageUpload'
import * as S from "./styled"
import { useMutation } from '@apollo/client'
import api from '../../../API'
import StateMessage from '../../../Components/StateMessage'

const codeGenrate = ()=>{
  const date = new Date(Date.now())
  const month = date.getUTCMonth() < 10 ?  "0"+date.getUTCMonth() : date.getUTCMonth()
  const year = date.getFullYear()
  const num = Math.floor(Math.random()*10000)
  const fourNum =  num < 1000 ? "0"+num: num
  return `${year}${month}-${fourNum}`
}

const RegisterPatient = () => {
  const [inputs, setInputs] = useState({
    first_name: " ",
    middle_name: "",
    last_name: "",
    id_card: "",
    gender: "",
    area: "",
    street_address: "",
    date_of_birth: "",
    code: codeGenrate(),
    patient_phone_number: "",
    contact_person: "",
    contact_phone_number: "",
    avatar: ""
  })
  const navigate = useNavigate()
  const hospitalId = localStorage.getItem('hospitalID');
  const [registerPatient, {loading, error, data}] = useMutation(api.Mutations.REGISTER_PATIENT)

  const handleInputs = (event:any) => {
    const name = event.target.name
    const value = name === 'avatar'? event.target.files[0] : event.target.value
    setInputs(values => ({...values, [name]:value}))
  }



  const handleSubmit = (e:any) => {
    e.preventDefault()
    registerPatient({
      variables:{
        idCard: inputs.id_card,
        firstName: inputs.first_name,
        middleName: inputs.middle_name,
        lastName: inputs.last_name,
        gender: inputs.gender,
        streetAddress: inputs.street_address,
        dateOfBirth: inputs.date_of_birth,
        code: inputs.code,
        area: inputs.area,
        patientPhoneNumber: inputs.patient_phone_number,
        contactPerson: inputs.contact_person,
        contactPhoneNumber: inputs.contact_phone_number,
        avatar: inputs.avatar,
        hospital: hospitalId
      }
    }).then((res) => {
      navigate("/main")

    })
    .catch(err =>{
      console.error(err);
    })
  }
  if(loading){
    return <StateMessage loading />
  }

  if(error){
    return  <StateMessage error={error.message}><>
    {error.message}
    </></StateMessage>
  }


  return (
    <S.Container>
      <S.Header>ENREGISTRER LES INFORMATIONS DU PATIENT</S.Header>
      <form encType='multipart/form-data' method="POST" onSubmit={handleSubmit}>
        <S.FormSection>
          <S.Label htmlFor="first_name">
            Nom:
            <input
              type="text"
              name="first_name"
              value={inputs.first_name}
              onChange={handleInputs}
              required
            />
          </S.Label>
          <S.Label htmlFor="middle_name">
            Postnom:(optional)
            <input
              type="text"
              name="middle_name"
              value={inputs.middle_name}
              onChange={handleInputs}
            />
          </S.Label>
          <S.Label htmlFor="last_name">
            Prénom:
            <input
              type="text"
              name="last_name"
              value={inputs.last_name}
              onChange={handleInputs}
              required
            />
          </S.Label>
          <S.Label htmlFor="id_card">
            ID card:
            <input
              type="text"
              name="id_card"
              value={inputs.id_card}
              onChange={handleInputs}
              required
            />
          </S.Label>

          <S.Label htmlFor="gender">
            Sexe:
            <select name="gender" value={inputs.gender} onChange={handleInputs}>
              <option value="">select...</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </S.Label>
          <S.Label htmlFor="date_of_birth">
            Date de naissance:
            <input
              type="date"
              name="date_of_birth"
              value={inputs.date_of_birth}
              onChange={handleInputs}
              required
            />
          </S.Label>
          <S.Label htmlFor="code">
            Code:
            <input
              type="text"
              name="code"
              value={inputs.code}
              required
              disabled
              style={{color:"red"}}
            />
          </S.Label>
          <S.Label htmlFor="patient_phone_number">
            Numéro de telefone:
            <input
              type="text"
              name="patient_phone_number"
              value={inputs.patient_phone_number}
              onChange={handleInputs}
              required
            />
          </S.Label>

          <S.Label htmlFor="street_address" className="address">
            avenue:
            <input
              type="text"
              name="street_address"
              value={inputs.street_address}
              onChange={handleInputs}
              required
            />
          </S.Label>
          <S.Label htmlFor="area" className="address">
            zone:
            <input
              type="text"
              name="area"
              value={inputs.area}
              onChange={handleInputs}
              required
            />
          </S.Label>

        </S.FormSection>

        <S.FormSection>
          <S.Label htmlFor="contact_person">
            Personne de contact:
            <input
              type="text"
              name="contact_person"
              value={inputs.contact_person}
              onChange={handleInputs}
              required
            />
          </S.Label>
          <S.Label htmlFor="contact_phone_number">
            Numémo de personne a contacter:
            <input
              type="text"
              name="contact_phone_number"
              value={inputs.contact_phone_number}
              onChange={handleInputs}
              required
            />
          </S.Label>
        </S.FormSection>
        
        <ImageUpload method={handleInputs} />

        <S.Label htmlFor="submit">
          <input type="submit" name="submit" value={"Enregistrer"} />
        </S.Label>
      </form>
    </S.Container>
  );
}

export default RegisterPatient

