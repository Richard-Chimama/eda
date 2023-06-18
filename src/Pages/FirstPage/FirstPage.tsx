import React, {useEffect, useState} from 'react'
import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'
import * as S from "./styled"
import Button from '../../Components/Button'
import TEXT from '../../Functions/text_as_data.json'
import Hamburgur from '../../Components/Hamburger/Hamburgur'
import {motion} from "framer-motion"
import { GiHamburgerMenu } from 'react-icons/gi'

const FirstPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScrrenWidth] = useState(800);


  useEffect(()=>{
    handleScreenResize()
  }, [])

    const projectOffers = TEXT.project_offers.map((data, index)=>{
        return <div key={index*2}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
        </div>
    })


  const handleScreenResize = () => {
    const GET_WINDOW_WIDTH = window.screen.width;
    setScrrenWidth(GET_WINDOW_WIDTH);
  };

  window.onresize = handleScreenResize;

  return (
    <S.container>
        <button className="btn" onClick={()=> setCollapsed(!collapsed)} type="button" >
        <GiHamburgerMenu size={35} color={"#1e2123"} />
      </button>
      <S.NavSide collapsed={collapsed}>
        <Nav screenSize={screenWidth} toggleCollapsed={setCollapsed} />
        </S.NavSide>
      <S.content collapsed={collapsed}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Title>{TEXT.title.toUpperCase()}</S.Title>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Intro>{TEXT.introduction}</S.Intro>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Intro>Tu as un compete?</S.Intro>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Link to="/enregistrer/signin">
          <Button value="Login" />
        </Link>
        </motion.div>


        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Intro>Pour gére votre hôpital et vos donné, créez un compte</S.Intro>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Link to="/enregistrer">
          <Button value="Commencer" />
        </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Title><u>Pourquoi nous choisir?</u></S.Title>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <S.Services>
            {
              projectOffers.map((data)=> data)
            }
           
          </S.Services>

        </motion.div>
      </S.content>
    </S.container>
  );
}

export default FirstPage