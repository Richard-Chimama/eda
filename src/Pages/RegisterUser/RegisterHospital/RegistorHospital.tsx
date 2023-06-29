import React, {FunctionComponent, useState} from 'react'
import * as S from "./styled.js"
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import api from "../../../API"
import LogoUpload from '../../../Components/LogoUpload/';
import LogoImage from "../../../assets/logo.png"
import StateMessage from '../../../Components/StateMessage/StateMessage.js';
import Title from '../../../Components/Title/';
import path from 'path';




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
        let value = name === "logo"? event.target.files[0] : event.target.value
        setInput(values => ({...values, [name]:value}))
    }

    const handleSubmit = async (event:any)=>{
        event.preventDefault()
        setIsError(false)
     
        let logoVariable = null;
        if (inputs.logo !== "") {
          logoVariable = inputs.logo;
        }

        await registerHospital({
            variables:{
                name: inputs.hospital_name,
                address: inputs.address_name,
                city: inputs.city_name,
                logo: logoVariable,
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
    <S.Container className='container'>
      <Title label={"ENREGISTRER L'HÔPITAL"} />
      {isError && <div>{errorMessage}</div>}
      <S.Form encType='multipart/form-data' className='col-md-10 col-lg-12 p-2 need-validation' method="POST" onSubmit={handleSubmit} >
       
          <LogoUpload method={handleChange} />
       
        <div className='mt-3'>
          <label htmlFor="hospital_name" className="form-label">NOM DE STRUCTURE MEDICALE:</label>
          <input
            type="text"
            id="hospital_name"
            name="hospital_name"
            className='form-control'
            placeholder="nom"
            value={inputs.hospital_name}
            onChange={handleChange}
            required
          />
          {checkHospitalLoading && <div>loading..</div>}
          {!checkHospitalLoading && checkHospitalData?.checkHospital && (
             <div style={{display:"block"}} className="invalid-feedback">name already registered</div>
          )}
        </div>
        <div className='mt-3'>
          <label htmlFor="address-name" className="form-label">ADRESSE:</label>
          <input
            type="text"
            id="address-name"
            name="address_name"
            className="form-control"
            placeholder="adress"
            value={inputs.address_name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className='mt-3'>
          <label htmlFor="city" className="form-label">COMMUNE:</label>
          <select
            id="city"
            name="city_name"
            className='form-select'
            value={inputs.city_name}
            onChange={handleChange}
            required
          >
            <option>...</option>
            {COMMUNE.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='mt-3' >
          <label  htmlFor="category" className="form-label">CATEGORIE:</label>
          <select
            id="category"
            name="category"
            className='form-select'
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
        </div>

        {/* <Button styles={{width: "80%"}} type="submit" value="Enregistrer" />*/}
        <button className="btn btn-primary w-100 mt-5 py-2" type="submit">Envoyer</button>
      </S.Form>
    </S.Container>
  );
}

export default RegistorHospital