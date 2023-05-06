import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import * as S from "./styled"
import api from "../../API"
import Button from '../../Components/Button';



const Signin: React.FC = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [signinUSER, {loading, error, data}] = useMutation(api.Mutations.SIGNIN_USER)

    const handleChange = (event:any)=>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event:any)=>{
        event.preventDefault()
        signinUSER({
            variables:{
                email: inputs.email,
                password: inputs.password
            },
            onCompleted:(data)=>{
                localStorage.setItem("token", data.signIn)
                navigate("/main")
            }
        })
    }

  return (
    <S.Container>
        <S.Form onSubmit={handleSubmit}>
        <i style={{color:"red"}}>This page is under development 😉</i>
            <S.Label>
                <span>Email:</span>
                <input type="email" name="email" value={inputs.email} onChange={handleChange}  />
            </S.Label>
            <S.Label>
                <span>Mot de passe:</span>
                <input type="text" name="password"  value={inputs.password} onChange={handleChange}  />
            </S.Label>

            <Button type="submit" value="envoyer" />
        </S.Form>
    </S.Container>
  )
}

export default Signin