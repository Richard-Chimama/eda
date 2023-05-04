import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import {useQuery, gql } from "@apollo/client"


//local query
/* const IS_LOGGED_IN = gql`
  query isLoggedIn{
    isLoggedIn @client
  }
` */

const Nav = () => {
  // const {data:userState} = useQuery(IS_LOGGED_IN)

  return (
    <Container>
      <Auth>
        {false ? (
          <Link to="/enregistrer/signin">
            <button>deconnecter</button>
          </Link>
        ) : (
          <div>
            <Link to="/enregistrer">
              <button>inscrire</button>
            </Link>
            <Link to="/enregistrer/signin">
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