import { useMutation, gql, useApolloClient } from '@apollo/client';
import React, {FunctionComponent, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../../Auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as S from "./styled"



const REGISTER_USER = gql`
  mutation signUp(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
    $hospital: String!
    $cnop: String
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      role: $role
      hospital: $hospital
      cnop: $cnop
    )
  }
`;


const Signup: FunctionComponent = () => {
  const navigate = useNavigate()
  const hospitalID = useParams()
  const client = useApolloClient()
  const userState = {isLoggedIn:true}

  const [show, setShow] = useState(false)
  const [inputs, setInputs] = useState({
    username: '',
    email: " ",
    cnop: " ",
    role: " ",
    password: ""
  })

  const [registerUSER, {loading, error, data}] = useMutation(REGISTER_USER)



  const handleChange = (event: any) => {
    const name = event.target.name
    const value = event.target.value
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
        password: inputs.password,
        role: inputs.role,
        hospital: hospitalID.id,
        cnop: inputs.cnop
      },
      onCompleted: data =>{
        localStorage.setItem("token", data.signUp)
        /* client.writeQuery({
          query: gql`
            query isLoggedIn{
              isLoggedIn
            }
          `,
          data:{
            isLoggedIn: userState
          }
        }) */
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
    <div>
       <i style={{color:"red"}}>This page is under development 😉</i>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Nom du medecin:
          <input
            type="text"
            name="username"
            value={inputs.username || " "}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={inputs.email || " "}
            onChange={handleChange}
          />
        </label>
        <label>
          Cnop:
          <input
            type="text"
            name="cnop"
            value={inputs.cnop || " "}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select
            name="role"
            defaultValue={inputs.role}
            onChange={handleChange}
          >
            <option value="admin">ADMIN</option>
            <option value="staff">STAFF</option>
          </select>
        </label>
        <label>
          Nouveau mot de passe:
          <input
            type={show ? "text": "password"}
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <input type="checkbox" onClick={()=> setShow(!show)} />
        </label>
        <label>
          Confirmer mot de passe:
          <input
            type={show ? "text": "password"}
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="send" />
      </S.Form>
      <br />
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
}

export default Signup