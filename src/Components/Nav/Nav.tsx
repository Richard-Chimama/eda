import React, { useEffect, useState, useContext} from 'react'
import styled from "styled-components"
import { Link, redirect, useNavigate } from 'react-router-dom'
import { gql, useApolloClient } from "@apollo/client"
import { MyContext } from '../../main'


//local query
const IS_LOGGED_IN = gql`
  query isLoggedIn{
    isLoggedIn @client
  }
`

interface propData{
  isLoggedIn: any
}

const data: propData = {
  isLoggedIn: !!localStorage.getItem('token')
}


const Nav = () => {
  const client = useApolloClient()
  const user = useContext(MyContext)
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [buttonClicked, setButtonClicked] = useState(false)

  

  
  useEffect(() => {
    const state = client.readQuery({query: IS_LOGGED_IN })
    setIsLoggedIn(()=>state.isLoggedIn)
    
  })

  const handleButtonClick = ()=>{
    setButtonClicked(!buttonClicked)
  }

const handleLogout = (e:any)=>{
  e.preventDefault()
  localStorage.removeItem("token")
  localStorage.removeItem("hospitalID")
  client.writeQuery({
    query: gql`
    query isLoginStatus{
      isLoggedIn @client
    }
    `,
    data: data
  })
  navigate("/", {state: redirect})
}

  return (
    <Container>
      <Auth>
        {isLoggedIn ? (
          <Link to="/" reloadDocument>
          <button onClick={handleLogout}>deconnecter</button>
          </Link>
        ) : (
          <div>
            <Link to="/enregistrer" onClick={handleButtonClick}>
              <button>inscrire</button>
            </Link>
            <Link to="/enregistrer/signin" onClick={handleButtonClick}>
              <button>connecter</button>
            </Link>
          </div>
        )}
      </Auth>
    </Container>
  );
}

const Container = styled.div`
    height: 50px;
    background-color: #282828;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 480px) {
        height: 150px;
    }
`

const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
`

export default Nav