import { useMutation, gql, useApolloClient } from '@apollo/client';
import React, {FunctionComponent, useEffect, useState} from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import * as S from "./styled"
import api from "../../../API"
import Button from '../../../Components/Button';
import Title from '../../../Components/Title';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import StateMessage from '../../../Components/StateMessage';




const Signup: FunctionComponent = () => {
  const navigate = useNavigate()
  const hospitalID:any = useParams()
  const client = useApolloClient()
  const userState = {isLoggedIn:true}

  const [show, setShow] = useState(false)
  const [isMatch, setIsMatch] = useState(false)
  const [inputs, setInputs] = useState({
    username: '',
    email: " ",
    cnop: " ",
    role: "",
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
    if(hospitalID.id == undefined || hospitalID.id === "" ){
      throw new Error("your hospital is not registered")
    }else if(isMatch){
      throw new Error("the password does not match!")
    }else{
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
          if(!!localStorage.getItem("token") && !!localStorage.getItem("hospitalID")){
            navigate("/admin/users", {state:redirect})
          }else{
            localStorage.setItem("token", data.signUp)
            localStorage.setItem("hospitalID", hospitalID.id)
            navigate("/main", {state:redirect})
          }
        }
      })

    }
    
  }


  if(loading){
    return <StateMessage loading />
  }

  if(error){
  return <StateMessage><h1>{error.message}</h1></StateMessage>
  }

   
  return (
    <S.Content>
      <Title label={"S'INSCRIRE"}  />
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
            value={inputs.role}
            onChange={handleChange}
          >
            <option>...</option>
            <option value="admin">ADMIN</option>
            <option value="staff">STAFF</option>
            <option value="lab">LAB</option>
          </select>
        </S.Label>
        <S.Label htmlFor='password'>
          <span>Nouveau mot de passe:</span>
          <div className="password-input">
            <input
              type={show ? "text": "password"}
              name="password1"
              className='password1'
              value={inputs.password1}
              onChange={handleChange}
              required
            />
          
              { show && <AiOutlineEye className='icon' onClick={()=> setShow(!show)} size={20} />}
              { !show && <AiOutlineEyeInvisible className='icon'  onClick={()=> setShow(!show)} size={20} />}
           
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
        <Button type="submit" value="Enregister" />
      </S.Form>
  
    </S.Content>
  );
}

export default Signup