import { gql, useApolloClient } from '@apollo/client'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Loading from "../../assets/icons8-loading-circle-96.png"

interface Props{
    children?: React.ReactElement
    loading?: boolean
    error?: string
}

const StateMessage:React.FC<Props> = ({children, loading, error}) => {
  const client = useApolloClient()
  const navigate = useNavigate()

  const handleRedirect = ()=>{
    if(error?.includes("code 500")){
      alert("Session expired!! Click okay to be directed to the login page")
      localStorage.removeItem("token")
      localStorage.removeItem("hospitalID")
      localStorage.removeItem("userId")
      localStorage.removeItem("user")

      client.writeQuery({
        query: gql`
        query isLoginStatus{
          isLoggedIn @client
        }
        `,
        data: {isLoggedIn: false}
      })

      navigate("/enregistrer/signin", {state:redirect})
    }else{
      return <div>{children}</div>
    }
  }
  
  return (
    <Container>
        {loading && <Image src={Loading} alt="loading" /> }
        {(!loading || error) && handleRedirect()}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 80vh;
`
const Image = styled.img`
  height: 100px;
  width: 100px;
`

export default StateMessage