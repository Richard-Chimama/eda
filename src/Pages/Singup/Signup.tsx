import { useMutation, gql, useApolloClient } from '@apollo/client';
import React, {FunctionComponent, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from "./styled"
import api from "../../API"




const Signup: FunctionComponent = () => {
  const navigate = useNavigate()
  const hospitalID = useParams()
  const client = useApolloClient()
  const userState = {isLoggedIn:true}

  const [show, setShow] = useState(false)
  const [isMatch, setIsMatch] = useState(false)
  const [inputs, setInputs] = useState({
    username: '',
    email: " ",
    cnop: " ",
    role: " ",
    password1: "",
    password2: "",
  })

  const [registerUSER, {loading, error, data}] = useMutation(api.Mutations.REGISTER_USER)



  const handleChange = (event: any) => {
    const name = event.target.name
    let value = event.target.value
    if(name === "password2"){
      if(inputs.password1 === value) {
        value = inputs.password1
        setIsMatch(false)
      }
      else if(value.length <= 0) setIsMatch(false)
      else setIsMatch(true)
    }
    setInputs(values => ({...values, [name]: value}))
  }


  useEffect(() => {
    document.title="Sign Up - Eda"
  })





  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    registerUSER({
      variables:{
        username: inputs.username,
        email: inputs.email,
        password: inputs.password2,
        role: inputs.role,
        hospital: hospitalID.id,
        cnop: inputs.cnop
      },
      onCompleted: data =>{
        localStorage.setItem("token", data.signUp)
        navigate("/main")
      }
    })
    
  }


if(error){
  console.log(error)
}

if(data){
  console.log(data)
}
    
   
  return (
    <S.Content>
       <i style={{color:"red"}}>This page is under development 😉</i>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.Label htmlFor='username'>
         <span>Nom du medecin:</span> 
          <input
            type="text"
            name="username"
            value={inputs.username || " "}
            onChange={handleChange}
            required
          />
        </S.Label>
        <S.Label htmlFor='email'>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={inputs.email || " "}
            onChange={handleChange}
            required
          />
        </S.Label>
        <S.Label htmlFor='cnop'>
          <span>Cnop:</span>
          <input
            type="text"
            name="cnop"
            value={inputs.cnop || " "}
            onChange={handleChange}
            required
          />
        </S.Label>
        <S.Label htmlFor='role'>
          <span>Role:</span>
          <select
            name="role"
            defaultValue={inputs.role}
            onChange={handleChange}
          >
            <option value="admin">ADMIN</option>
            <option value="staff">STAFF</option>
          </select>
        </S.Label>
        <S.Label htmlFor='password'>
          <span>Nouveau mot de passe:</span>
          <div style={{display:'flex',width: '90%'}}>
            <input
              type={show ? "text": "password"}
              name="password1"
              className='password1'
              value={inputs.password1}
              onChange={handleChange}
              required
            />
            <div style={{display:'flex', alignItems: 'center'}}>
            <input type="checkbox" onClick={()=> setShow(!show)} />
            <span style={{fontSize:'12px'}}>montrer</span>
            </div>
          </div>
        </S.Label>
        <S.Label htmlFor='password'>
          <span>Confirmer mot de passe:</span>
          <input
            type={show ? "text": "password"}
            name="password2"
            value={inputs.password2}
            onChange={handleChange}
            required
          />
          {isMatch && <span style={{color: "red"}}>Le mot de passe ne correspond pas!</span>}
        </S.Label>
        <br />
        <input type="submit" value="send" />
      </S.Form>
      <br />
      <button onClick={() => navigate("/")}>Go back</button>
    </S.Content>
  );
}

export default Signup