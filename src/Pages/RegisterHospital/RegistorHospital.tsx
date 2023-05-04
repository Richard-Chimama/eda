import React, {FunctionComponent, useState} from 'react'
import * as S from "./styled.js"
import { useMutation, useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const REGISTER_HOSPITAL = gql`
  mutation NewHospital(
    $name: String!
    $address: String!
    $city: String!
    $category: String!
  ) {
    newHospital(
      name: $name
      address: $address
      city: $city
      category: $category
    ) {
      id
    }
  }
`;

const checkHospital:any = gql`
    query checkHospital($name: String!){
     checkHospital(name:$name)
    }
`

const RegistorHospital: FunctionComponent = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const [inputs, setInput] = useState({
        hospital_name:"",
        address_name:"",
        city_name:"",
        category: ""
    })
    
    const {loading: checkHospitalLoading,error: checkHospitalError,data: checkHospitalData} = useQuery(checkHospital,{
        variables: {name: inputs.hospital_name.trim().toLowerCase()},
    })
   const [registerHospital, {loading, error, data}] = useMutation(REGISTER_HOSPITAL)

    const handleChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value
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



  return (
    <S.Container>
       <i style={{color:"red"}}>This page is under development 😉</i>
       <button onClick={()=> navigate("/")}>Go back</button>
      <h2></h2>
      {isError && <div>{errorMessage}</div>}
      <S.Form onSubmit={handleSubmit}>
        <label>
          NOM DE STRUCTURE MEDICALE:
          <input
            type="text"
            id="hospital_name"
            name="hospital_name"
            placeholder="nom"
            value={inputs.hospital_name}
            onChange={handleChange}
            required
          />
          <br />
          { checkHospitalLoading && <div>loading..</div>}
          { (!checkHospitalLoading && checkHospitalData?.checkHospital) && <span> name already registered</span>}
        </label>
        <label>
          ADRESSE:
          <input
            type="text"
            id="address-name"
            name="address_name"
            placeholder="adress"
            value={inputs.address_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          COMMUNE:
          <input
            type="text"
            id="city_name"
            name="city_name"
            placeholder="nom"
            value={inputs.city_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CATEGORIE:
          <select
            name="category"
            value={inputs.category}
            onChange={handleChange}
            required
          >
            <option value="clinique">Clinique</option>
            <option value="polyclinique">Polyclinique</option>
            <option value="centre de santé">Centre de santé</option>
            <option value="hopital de référence">Hopital de référence</option>
          </select>
        </label>

        <input type="submit" value="Enregistrer" />
      </S.Form>
    </S.Container>
  );
}

export default RegistorHospital