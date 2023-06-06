import React, {FunctionComponent, useState} from 'react'
import * as S from "./styled.js"
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import api from "../../../API"
import LogoUpload from '../../../Components/LogoUpload/';
import LogoImage from "../../../assets/eda_logo.png"
import StateMessage from '../../../Components/StateMessage/StateMessage.js';
import Title from '../../../Components/Title/';




const RegistorHospital: FunctionComponent = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const [inputs, setInput] = useState({
        hospital_name:"",
        address_name:"",
        city_name:"",
        logo: "",
        category: ""
    })

    const COMMUNE = ["bandalungwa", "Barumbu", "Gombe", "Kalamu", "Kasa-Vubu", "Kimbanseke",
                    "kinshasa", "kintambo", "kisenso", "lemba", "limete", "lingwala", "makala",
                    "maluku", "masina", "matete","mont-ngafula", "ndjili", "ngaba", "ngaliema",
                    "ngiri-ngiri", "nsele", "selembao"]
    
    const {
      loading: checkHospitalLoading,
      error: checkHospitalError,
      data: checkHospitalData,
    } = useQuery(api.Queries.checkHospital, {
      variables: { name: inputs.hospital_name.trim().toLowerCase() },
    });
   const [registerHospital, {loading, error, data}] = useMutation(api.Mutations.REGISTER_HOSPITAL)

    const handleChange = (event: any) => {
        const name = event.target.name
        const value = name === "logo"? event.target.files[0] : event.target.value
        setInput(values => ({...values, [name]:value}))
    }

    const handleSubmit =(event:any)=>{
        event.preventDefault()
        setIsError(false)
        registerHospital({
            variables:{
                name: inputs.hospital_name,
                address: inputs.address_name,
                city: inputs.city_name,
                logo: inputs.logo,
                category: inputs.category
            }
        }).then((res)=> {
            navigate("/enregistrer/signup/"+ res.data.newHospital.id)
        })
        .catch((err)=> {
          setIsError(true)
          setErrorMessage("Failed to register the hospital")
          console.log(err)
        })
    }

    if(loading){
      return <StateMessage loading />
    }

    if(error){
      return <StateMessage error={error.message}><>
        {error.message}
        </></StateMessage>
    }


  return (
    <S.Container>
      <Title label={"ENREGISTRER L'HÔPITAL"} />
      {isError && <div>{errorMessage}</div>}
      <S.Form encType='multipart/form-data' method="POST" onSubmit={handleSubmit} >
       
          <LogoUpload method={handleChange} />
       
        <S.Label>
          <span>NOM DE STRUCTURE MEDICALE:</span>
          <input
            type="text"
            id="hospital_name"
            name="hospital_name"
            placeholder="nom"
            value={inputs.hospital_name}
            onChange={handleChange}
            required
          />
          {checkHospitalLoading && <div>loading..</div>}
          {!checkHospitalLoading && checkHospitalData?.checkHospital && (
            <span> name already registered</span>
          )}
        </S.Label>
        <S.Label>
          <span>ADRESSE:</span>
          <input
            type="text"
            id="address-name"
            name="address_name"
            placeholder="adress"
            value={inputs.address_name}
            onChange={handleChange}
            required
          />
        </S.Label>
        <S.Label>
          <span>COMMUNE:</span>
          <select
            name="city_name"
            value={inputs.city_name}
            onChange={handleChange}
            required
          >
            <option>select</option>
            {COMMUNE.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </S.Label>
        <S.Label>
          <span>CATEGORIE:</span>
          <select
            name="category"
            value={inputs.category}
            onChange={handleChange}
            required
          >
            <option >...</option>
            <option value="clinique">Clinique</option>
            <option value="polyclinique">Polyclinique</option>
            <option value="centre de santé">Centre de santé</option>
            <option value="hopital de référence">Hopital de référence</option>
          </select>
        </S.Label>

        <Button type="submit" value="Enregistrer" />
      </S.Form>
    </S.Container>
  );
}

export default RegistorHospital