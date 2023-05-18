import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUsers } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { IoIosPeople } from "react-icons/io"
import { FcStatistics } from "react-icons/fc"
import { MdMedicalServices } from "react-icons/md"
import * as S from './styled'


const Dashboard = () => {
    const Size = 480
    const [screenWidth, setScrrenWidth] = useState(0);
    const navigate = useNavigate();

    const handleScreenResize = () => {
        const GET_WINDOW_WIDTH = window.screen.width;
        setScrrenWidth(GET_WINDOW_WIDTH);
      };

      const handleOpenNewTab = () => {
        window.open('/main', '_blank');
      };

      window.onresize = handleScreenResize;

  return (
    <S.container >
        <p style={{color:"red", textAlign:"center"}}>
            This page is under development😉
        </p>

        <h1 style={{textAlign:"center"}}>TABLEAU DE BORD ADMINISTRATIF</h1>

        <S.MenuComponent className="menu">
        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/profile")}>
            <CgProfile className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            Profile
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/patients")} >
            <IoIosPeople className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            PATIENT
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/users")}>
            <FiUsers className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            USERS
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => handleOpenNewTab()}>
            <MdMedicalServices className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            MAIN
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
            whileHover={{ scale: 1.1}}
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/statistic")}>
            <FcStatistics className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            STATISTICS
          </div>
        </S.Menu>
        </motion.div>
      </S.MenuComponent>




    </S.container>
  )
}

export default Dashboard