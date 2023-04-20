import React from 'react'
import * as S from "./styled"
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate()
  return (
    <>
    <S.MenuComponent>
        <h1>MAIN MENU</h1>
        <S.Menu>
            <button onClick={()=> navigate("/fiche")}>FICHE DE CONSULTATION</button>
        </S.Menu>
        <S.Menu>
            <button onClick={()=>  navigate("/recherche")}>RECHERCHE PATIENT</button>
        </S.Menu>
        <S.Menu>
            <button onClick={()=> navigate("/rapport")}>RAPPORT</button>
        </S.Menu>
    </S.MenuComponent>
    </>
  )
}

export default Menu