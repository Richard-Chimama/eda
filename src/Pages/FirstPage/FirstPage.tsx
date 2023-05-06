import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'
import * as S from "./styled"
import Button from '../../Components/Button'

const FirstPage = () => {
  return (
    <S.container>
      <Nav />
      <S.content>
        <h1>
          Bienvenue au projet <b>Eda</b>
        </h1>
        <br />
        <br />
        <p>Pour gére votre hôpital et vos donné, créez un compte</p>
        <Link to="/enregistrer">
          <Button label="Commencer" />
        </Link>

        <br />
        <br />
        <i style={{color:"red"}}>This page is under development 😉</i>
      </S.content>
      <Footer />
    </S.container>
  );
}

export default FirstPage