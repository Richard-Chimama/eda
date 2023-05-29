import React, {useState} from 'react'
import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'
import * as S from "./styled"
import Button from '../../Components/Button'
import Hamburgur from '../../Components/Hamburger/Hamburgur'

const FirstPage = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = ()=>{
    setIsOpen(!isOpen)
  }

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
          <Button value="Commencer" />
        </Link>

        <br />
        <br />
        <i style={{color:"red"}}>This page is under development 😉</i>
      </S.content>
    </S.container>
  );
}

export default FirstPage