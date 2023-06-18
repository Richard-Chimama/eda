import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { TbReport, TbReportSearch } from "react-icons/tb";
import { CgFileDocument, CgProfile } from "react-icons/cg";
import {FaUserPlus} from "react-icons/fa"
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";
import Title from "../Title";


const Menu = () => {
  const navigate = useNavigate();


  return (
    <S.Container >
      <div className="title">
       <Title label="Main" />
      </div>
      <S.MenuComponent className="menu">
      <S.Menu className="menu-button" onClick={() => navigate("/main/enregistrer_patient")}>
            <FaUserPlus className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            ENREGISTRER UN PATIENT
          </div>
        </S.Menu>
      
        <S.Menu className="menu-button" onClick={() => navigate("/main/recherche")} >
            <TbReportSearch className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            RECHERCHE PATIENT
          </div>
        </S.Menu>
        <S.Menu className="menu-button" onClick={() => navigate("/main/rapport")}>
            <TbReport className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            RAPPORT
          </div>
        </S.Menu>
      
      </S.MenuComponent>
      
    </S.Container>
  );
};

export default Menu;
