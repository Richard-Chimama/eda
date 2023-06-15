import React, { useEffect, useState, useContext} from 'react'
import styled from "styled-components"
import { Link, redirect, useNavigate } from 'react-router-dom'
import { gql, useApolloClient, useLazyQuery} from "@apollo/client"
import API from '../../API'
import Eda_logo from "../../assets/eda_logo.png"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { FiLogIn, FiLogOut, FiUsers } from "react-icons/fi"
import { FcStatistics } from "react-icons/fc"
import { IoIosPeople } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { MdDomain, MdOutlineDashboardCustomize } from "react-icons/md"
import { slide as Menu } from "react-burger-menu"
import './Nav.css'
import { FaUserPlus } from 'react-icons/fa'
import { TbReport, TbReportSearch } from 'react-icons/tb'


//local query
const IS_LOGGED_IN = gql`
  query isLoggedIn{
    isLoggedIn @client
  }
`


interface propData{
  isLoggedIn: any
}


const data: propData = {
  isLoggedIn: !!localStorage.getItem('token')
}



const Nav: React.FC= () => {
  const client = useApolloClient()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [hospitalData, setHospitalData] = useState({hospital:{logo: null, name: ""}})
  const [buttonClicked,  setButtonClicked] = useState(false)
  const [user, setUser ]:any = useState(null)

  

  useEffect(() => {
    const state = client.readQuery({query: IS_LOGGED_IN })
    setIsLoggedIn(()=>state.isLoggedIn)
    
  },[])

  const [fetchHospitalData,{ loading, error, data}] = useLazyQuery(API.Queries.findHospitalById,{
    onCompleted:(data)=>{
      setHospitalData(data)
    }
  })
 
 

  useEffect(()=>{
    if(isLoggedIn){
      const hospitalId = localStorage.getItem('hospitalID')
      fetchHospitalData({
        variables:{
          hospitalId: hospitalId
        }
      })
    }

  }, [isLoggedIn, fetchHospitalData])
  
  useEffect(()=>{
    const GET_USER = localStorage.getItem('user')

    if(GET_USER){
      setUser(JSON.parse(GET_USER))
    }
  }, [isLoggedIn])


  const handleButtonClick = ()=>{
    setButtonClicked(!buttonClicked)
  }

const handleLogout = (e:any)=>{
  e.preventDefault()
  localStorage.removeItem("token")
  localStorage.removeItem("hospitalID")
  localStorage.removeItem("userId")
  localStorage.removeItem("user")
  client.writeQuery({
    query: gql`
    query isLoginStatus{
      isLoggedIn @client
    }
    `,
    data: data
  })
  navigate("/", {state: redirect})
}



  return (
    <Menu>
      <Content>
        <div>
          <div className="logo">
            {hospitalData.hospital.logo ? (
              <Logo to="/">
                <Image height={35} width={35} src={hospitalData?.hospital.logo} />
                <p>{hospitalData.hospital.name}</p>
              </Logo>
            ) : (
              <Logo to="/">
                <Image height={35} width={35} src={Eda_logo} />
                <p>{hospitalData.hospital.name == ""? "Eda project":hospitalData.hospital.name}</p>
              </Logo>
            )}
          </div>

          {user?.role === "admin" && (
            <div className="navigation">
              <NavLink to="/admin">
                <MdOutlineDashboardCustomize size={35} />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/main">
                <MdDomain size={35} />
                <span>Main</span>
              </NavLink>
              <NavLink to="/admin/patients">
                <IoIosPeople size={35} />
                <span>Patient</span>
              </NavLink>
              <NavLink to="/admin/users">
                <FiUsers size={35} />
                <span>Users</span>
              </NavLink>
              <NavLink to="/admin/profile">
                <CgProfile size={35} />
                <span>Profile</span>
              </NavLink>
              <NavLink to="/main">
                <FcStatistics size={35} />
                <span>Rapport</span>
              </NavLink>
            </div>
          )}

          {user?.role === "staff" && (
            <div className="navigation">
              <NavLink to="/main">
                <MdOutlineDashboardCustomize size={35} />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/main/recherche">
                <TbReportSearch size={35} />
                <span>Recherche</span>
              </NavLink>
              <NavLink to="/main/rapport">
                <TbReport size={35} />
                <span>Rapport</span>
              </NavLink>
              <NavLink to="/main/enregistrer_patient">
                <FaUserPlus className="icon-menu" size={35} />
                <span>Enregistrer patient</span>
              </NavLink>
              <NavLink to="/main/profile">
                <CgProfile  size={35} />
                <span>Profile</span>
              </NavLink>
            </div>
          )}
          {user?.role === "lab" && (
            <div className="navigation">
              <NavLink to="/main">
                <MdOutlineDashboardCustomize size={35} />
                <span>Dashboard</span>
              </NavLink>
            </div>
          )}

          {user?.role !== "admin" && user?.role !== "staff" && (
            <div className="navigation">
              <NavLink to="/admin/patients">
                <IoIosPeople size={35} />
                <span>About us</span>
              </NavLink>

              <NavLink to="/admin/patients">
                <IoIosPeople size={35} />
                <span>Contact us</span>
              </NavLink>
            </div>
          )}
        </div>

        <Auth>
          {isLoggedIn ? (
            <NavLink to="/" onClick={handleLogout}>
              <FiLogOut size={35} />
              <span>Deconnecter</span>
            </NavLink>
          ) : (
            <div>
              <NavLink to="/enregistrer/signin" onClick={handleButtonClick}>
                <FiLogIn size={35} />
                <span>Connecter</span>
              </NavLink>
            </div>
          )}
        </Auth>
      </Content>
    </Menu>
  );
}


const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  

  & > div .navigation{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

const Auth = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
`

const Image = styled.img`
  height: 15px
  width: 15px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: 0.5rem;

`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  margin-left: -0.5rem;
  margin-bottom: 1.5rem;

  & > p{
    overflow-x: hidden;
  }

`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  
`

export default Nav