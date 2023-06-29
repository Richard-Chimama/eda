import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUsers } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { IoIosPeople } from "react-icons/io"
import { FcStatistics } from "react-icons/fc"
import { MdMedicalServices } from "react-icons/md"
import { SlCalender } from "react-icons/sl"
import { RiServiceFill } from "react-icons/ri"
import * as S from './styled'
import Title from '../../../Components/Title'
import WelcomeSticker from '../../../Components/WelcomeSticker'


const Dashboard = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const userInfo = user ? JSON.parse(user): "Eda"

    console.log(userInfo)

  return (
    <S.container >
      <div className="title">
        <Title label="Dashboard" />
      </div>

  {/*     <div className="welcome">
       <WelcomeSticker name={userInfo.username}  />
      </div> */}


        <S.MenuComponent className="menu">
        <motion.div
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/patients")} >
            <IoIosPeople className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            PATIENT
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/users")}>
            <FiUsers className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            USERS
          </div>
        </S.Menu>
        </motion.div>

        <motion.div
        >
        <S.Menu className="menu-button" onClick={()=> navigate("/main")}>
            <MdMedicalServices className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            MAIN
          </div>
        </S.Menu>
        </motion.div>
      

       {/*  <motion.div
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/services")}>
            <RiServiceFill className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            SERVICES
          </div>
        </S.Menu>
        </motion.div> */}
      

        <motion.div
        >
        <S.Menu className="menu-button" onClick={() => navigate("/admin/statistic")}>
            <FcStatistics className="icon-menu" color={"white"} size={110} />
          <div className="label-menu" >
            RAPPORT
          </div>
        </S.Menu>
        </motion.div>
      </S.MenuComponent>



    </S.container>
  )
}

export default Dashboard