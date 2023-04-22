import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
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
    <div style={{height: "500px"}}>
      <S.H1>MAIN MENU</S.H1>
      <S.MenuComponent className="menu">
        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/fiche")}>
          {screenWidth > Size && (
            <CgFileDocument className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            FICHE DE CONSULTATION
          </div>
        </S.Menu>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/recherche")} >
          {screenWidth > Size && (
            <TbReportSearch className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            RECHERCHE PATIENT
          </div>
        </S.Menu>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/rapport")}>
          {screenWidth > Size && (
            <TbReport className="icon-menu" color={"white"} size={110} />
          )}
          <div className="label-menu" >
            RAPPORT
          </div>
        </S.Menu>
        </motion.div>
      </S.MenuComponent>
    </div>
  );
};

export default Menu;
