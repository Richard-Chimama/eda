import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUsers } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { IoIosPeople } from "react-icons/io"
import { FcStatistics } from "react-icons/fc"
import * as S from './styled'


const Dashboard = () => {
    const Size = 480
    const [screenWidth, setScrrenWidth] = useState(0);
    const navigate = useNavigate();

    const handleScreenResize = () => {
        const GET_WINDOW_WIDTH = window.screen.width;
        setScrrenWidth(GET_WINDOW_WIDTH);
      };

      window.onresize = handleScreenResize;

  return (
    <div style={{height:"60vh"}}>
        <p style={{color:"red", textAlign:"center"}}>
            This page is under development😉
            <Link to='..'>
            <button>Go back</button>
            </Link>

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
        <S.Menu className="menu-button" onClick={() => navigate("/admin/patient")} >
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
        <S.Menu className="menu-button" onClick={() => navigate("/admin/users")}>
            <FcStatistics className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            STATISTICS
          </div>
        </S.Menu>
        </motion.div>
      </S.MenuComponent>




    </div>
  )
}

export default Dashboard