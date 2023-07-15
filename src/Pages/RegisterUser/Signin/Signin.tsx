import React, {useEffect, useState} from 'react'
import { useMutation, gql, useQuery} from '@apollo/client';
import { redirect, useNavigate } from 'react-router-dom';
import * as S from "./styled"
import api from "../../../API"
import { motion, useScroll } from "framer-motion"
import Button from '../../../Components/Button';
import { Form, FloatingLabel, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Cookies from 'universal-cookie';



const Signin: React.FC = () => {
    let userHospital:string
    const navigate = useNavigate()
    const [isError, setisError] = useState(false)
    const cookies = new Cookies();
    const [rememberMe, setRememberMe] = useState(false);
    const { scrollYProgress } = useScroll();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const [signinUSER, {loading, error, data}] = useMutation(api.Mutations.SIGNIN_USER)

    useEffect(() => {
        const storedEmail = cookies.get('email');
        const storedPassword = cookies.get('password');
        const storedRememberMe = cookies.get('rememberMe');
    
        if (storedRememberMe === 'true' && storedEmail && storedPassword) {
          setInputs({...inputs, 
            email: storedEmail,
            password: storedPassword
        });
          setRememberMe(true);
        }
      }, []);
   
    const handleChange = (event:any)=>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        if(inputs.email === "" || inputs.password === ""){
          setisError(false)
        }
    }
    const {error: roleError, data:userRole} = useQuery(api.Queries.findSingleUser, {
        variables:{email: inputs.email.trim()}
    })
   
  

    const handleSubmit = async(event:any)=>{
        event.preventDefault()

        if(userRole){
            userHospital = userRole.user.hospital[0].id
        }

        signinUSER({
            variables:{
                email: inputs.email,
                password: inputs.password
            },
            onCompleted:(data)=>{
                localStorage.setItem("token", data.signIn)
                localStorage.setItem("hospitalID", userHospital)
                localStorage.setItem("userId", userRole.user.id)
                localStorage.setItem("user", JSON.stringify(userRole.user))
                if (rememberMe) {
                    cookies.set('email', inputs.email, { path: '/enregistrer/signin' });
                    cookies.set('password', inputs.password, { path: '/enregistrer/signin' });
                    cookies.set('rememberMe', rememberMe, { path: '/enregistrer/signin' });
                  }else{
                    cookies.remove('email');
                    cookies.remove('password');
                    cookies.remove('rememberMe');

                  }
                if(userRole !== undefined && userRole.user.role =="admin"){
                    navigate("/admin", {state: redirect})
                }else{
                    navigate("/main", {state: redirect})
                }
                 
            },
            onError:(error)=>{
              setisError(true)
            }
        })
    }
  

  return (
    <S.Container className="form-signin w-100 m-auto">
          <motion.div style={{ scaleX: scrollYProgress }} /> 
  <S.Form className="needs-validation" onSubmit={handleSubmit}>
    <h4 className="h3 mb-3 fw-normal">Veuillez vous connecter</h4>

    <div className="form-floating">
      <input type="email" name="email" className="form-control" id="floatingInput" value={inputs.email} onChange={handleChange} placeholder="name@example.com" />
      <label htmlFor="floatingInput">E-mail</label>
    </div>
    <div className="form-floating" style={{marginTop: '10px'}}>
      <input type="password" name="password" value={inputs.password} onChange={handleChange}  className="form-control" id="floatingPassword" placeholder="Mot de passe" />
      <label htmlFor="floatingPassword">Mot de passe</label>
    </div>
      {isError && <Alert style={{marginTop: '10px'}}variant="danger">
        Les informations d'identification invalides.
      </Alert>
     }

    <div className="form-check text-start my-3">
      <input className="form-check-input" checked={rememberMe} type="checkbox" onChange={(e)=> setRememberMe(e.target.checked)} id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Souviens-toi de moi
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Envoyer</button>
    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023–2024</p>
  </S.Form>
</S.Container>
  )
}

export default Signin