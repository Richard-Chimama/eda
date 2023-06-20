import React, { useEffect, useState, useContext} from 'react'
import styled from "styled-components"
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { gql, useApolloClient, useLazyQuery} from "@apollo/client"
import API from '../../API'
import Eda_logo from "../../assets/eda_logo.png"
import { FiLogIn, FiLogOut, FiUsers } from "react-icons/fi"
import { FcStatistics } from "react-icons/fc"
import { IoIosPeople } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { MdDomain, MdOutlineDashboardCustomize } from "react-icons/md"
import { slide as Menu } from "react-burger-menu"
import './Nav.css'
import { FaUserPlus } from 'react-icons/fa'
import { TbReport, TbReportSearch } from 'react-icons/tb'
import 'bootstrap/dist/css/bootstrap.css'
import { ToolTip } from '../../Functions/utility/FormValidationBoostrap'
import { SlCalender } from 'react-icons/sl'


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

interface Props{
  screenSize: number,
  toggleCollapsed: (text:boolean)=> void
}

const Nav: React.FC<Props>= ({screenSize, toggleCollapsed}) => {
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
      <Container
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar `}
        id="offcanvasExample" 
        style={{ width: "280px" }}
       
      >

        {screenSize < 800 && <button type="button" className="btn-close custom-close-btn" onClick={()=> toggleCollapsed(true)} id="closeButton" data-bs-dismiss="offcanvas" aria-label="Close"></button>}
     

        
        
        <div className="logo offcanvas-header">
          {hospitalData.hospital.logo ? (
            <Logo
              to="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <Image height={45} width={45} src={hospitalData?.hospital.logo} />
              <span className="fs-4">{hospitalData.hospital.name}</span>
            </Logo>
          ) : (
            <Logo to="/">
              <Image height={45} width={45} src={Eda_logo} />
              <span className="fs-4">
                {hospitalData.hospital.name == ""
                  ? "Eda project"
                  : hospitalData.hospital.name}
              </span>
            </Logo>
          )}
        </div>
        <hr />
        <div className="panels">
          {user?.role === "admin" && (
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLinks to="/admin" className={"nav-link"} end>
                  <MdOutlineDashboardCustomize size={35} />
                  <span>Dashboard</span>
                </NavLinks>
              </li>

              <li className="nav-item">
                <NavLinks to="/main" className="nav-link">
                  <MdDomain size={35} />
                  <span>Main</span>
                </NavLinks>
              </li>

              <li className="nav-item">
                <NavLinks to="/admin/patients" className="nav-link" >
                  <IoIosPeople size={35} />
                  <span>Patient</span>
                </NavLinks>
              </li>

              <li className="nav-item">
                <NavLinks to="/admin/users" className="nav-link" end>
                  <FiUsers size={35} />
                  <span>Users</span>
                </NavLinks>
              </li>

              <li className="nav-item">
                <NavLinks to="/admin/rapport" className="nav-link" end>
                  <FcStatistics size={35} />
                  <span>Rapport</span>
                </NavLinks>
              </li>
            </ul>
          )}

          {user?.role === "staff" && (
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLinks to="/main" className="nav-link" end>
                  <MdOutlineDashboardCustomize size={35} />
                  <span>Dashboard</span>
                </NavLinks>
              </li>
              <li className="nav-item">
                <NavLinks to="/main/recherche" className="nav-link" end>
                  <TbReportSearch size={35} />
                  <span>Recherche</span>
                </NavLinks>
              </li>
              <li className="nav-item">
                <NavLinks to="/main/rapport" className="nav-link" end>
                  <TbReport size={35} />
                  <span>Rapport</span>
                </NavLinks>
              </li>
              <li className="nav-item">
                <NavLinks to="/main/enregistrer_patient" className="nav-link" end>
                  <FaUserPlus className="icon-menu" size={35} />
                  <span>Enregistrer patient</span>
                </NavLinks>
              </li>
            
            </ul>
          )}

          {user?.role === "lab" && (
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" >
              <NavLinks to="/main" className="nav-link" end>
                <MdOutlineDashboardCustomize size={35} />
                <span>Dashboard</span>
              </NavLinks>
              </li>
            </ul>
          )}

          {user?.role !== "admin" && user?.role !== "staff" && (
            <ul className="nav nav-pills flex-column mb-auto" >
              <li className="nav-item">
                <NavLinks to="/admin/patients" className="nav-link">
                  <IoIosPeople size={35} />
                  <span>About us</span>
                </NavLinks>
              </li>

              <li className="nav-item">
                <NavLinks to="/admin/patients" className="nav-link" end>
                  <IoIosPeople size={35} />
                  <span>Contact us</span>
                </NavLinks>
              </li>
            </ul>
          )}
        </div>

        <div className="dropdown userActions">
        <hr />
          {isLoggedIn ? (
            <NavLinks
              to="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={ToolTip}
            >
              <Image src={user.avatar} width="35px" height="35px" alt="user image" />
              <strong>{user.username}</strong>
            </NavLinks>
          ) : (
            <div>
              <NavLinks to="/enregistrer/signin">
                <FiLogIn size={35} />
                <span>Connecter</span>
              </NavLinks>
            </div>
          )}
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <NavLinks to={user?.role==='admin' ? "/admin/profile":"/main/profile"} className="dropdown-item " end>
                <CgProfile size={18} />
                Profile
              </NavLinks>
            </li>
            <li>
              <NavLinks to={user?.role === 'admin' ?"/admin/calender": "/main/calendar"} className="dropdown-item " end>
                <SlCalender size={18}/>
                Calendrier
              </NavLinks>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={handleLogout}>
              <button className="dropdown-item" >
                Deconnecter
              </button>
            </li>
          </ul>
        </div>
        
      </Container>
  );
}

const Container = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 280px;
      z-index: 9999;
      transition: transform 0.3s ease-in-out;


      .userActions{
        margin-top: auto;
      }

      .custom-close-btn{
        background-color: white;
        position: absolute;
        right: 0.5rem;
      }

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

  & > p{
    overflow-x: hidden;
  }

`

const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  
`

export default Nav