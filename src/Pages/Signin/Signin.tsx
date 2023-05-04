import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import * as S from "./styled"

const SIGNIN_USER = gql`
    mutation signIn(
        $email: String!,
        $password: String!
    ){
        signIn(
            email: $email,
            password: $password
        )
    }
`

const Signin: React.FC = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [signinUSER, {loading, error, data}] = useMutation(SIGNIN_USER)

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
            <label>
                Email:
                <input type="email" name="email" value={inputs.email} onChange={handleChange}  />
            </label>
            <label>
                Mot de passe:
                <input type="text" name="password"  value={inputs.password} onChange={handleChange}  />
            </label>

            <input type="submit" value="envoyer" />
        </S.Form>
    </S.Container>
  )
}

export default Signin