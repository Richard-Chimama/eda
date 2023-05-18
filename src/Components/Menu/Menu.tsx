import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import {FaUserPlus} from "react-icons/fa"
import { motion } from "framer-motion";

const Size = 480

const Menu = () => {
  const navigate = useNavigate();
  const [screenWidth, setScrrenWidth] = useState(0);

  const handleScreenResize = () => {
    const GET_WINDOW_WIDTH = window.screen.width;
    setScrrenWidth(GET_WINDOW_WIDTH);
  };

  useEffect(()=>{
    setScrrenWidth(window.screen.width);
  },[])

  window.onresize = handleScreenResize;

  return (
    <S.Container >
      <S.H1>MAIN MENU</S.H1>
      <S.MenuComponent className="menu">

      <S.Menu className="menu-button" onClick={() => navigate("/main/enregistrer_patient")}>
          {screenWidth > Size && (
            <FaUserPlus className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            ENREGISTRER UN PATIENT
          </div>
        </S.Menu>
      
        <S.Menu className="menu-button" onClick={() => navigate("/main/recherche")} >
          {screenWidth > Size && (
            <TbReportSearch className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            RECHERCHE PATIENT
          </div>
        </S.Menu>
        <S.Menu className="menu-button" onClick={() => navigate("/main/rapport")}>
          {screenWidth > Size && (
            <TbReport className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            RAPPORT
          </div>
        </S.Menu>
      
      </S.MenuComponent>
      
    </S.Container>
  );
};

export default Menu;
