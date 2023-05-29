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
import { MdDomain } from "react-icons/md"
import { slide as MenuSlide } from "react-burger-menu"
import './Nav.css'


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
  const [hospitalData, setHospitalData] = useState(null)
  const [buttonClicked, setButtonClicked] = useState(false)
  

  useEffect(() => {
    const state = client.readQuery({query: IS_LOGGED_IN })
    setIsLoggedIn(()=>state.isLoggedIn)
    
  },[])

  const [fetchHospitalData,{ loading, error, data}] = useLazyQuery(API.Queries.findHospitalById,{
    onCompleted:(data)=>{
      console.log(data)
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
  


  const handleButtonClick = ()=>{
    setButtonClicked(!buttonClicked)
  }

const handleLogout = (e:any)=>{
  e.preventDefault()
  localStorage.removeItem("token")
  localStorage.removeItem("hospitalID")
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
    <MenuSlide >
      <Content>
        <div>
          <div className="logo">
            {hospitalData && hospitalData?.hospital.logo ? <Image height={35} width={35} src={hospitalData?.hospital.logo} />
            :
              <Logo>
                <Image height={35} width={35} src={Eda_logo} />
                <p>Eda project</p>
              </Logo>
            }
          </div>

          {/**other pages */}
          <NavLink to="/main">
                <MdDomain size={35}/>
                <span>Main</span>
            </NavLink>
            <NavLink to="/admin/patients">
                <IoIosPeople size={35}/>
                <span>Patient</span>
            </NavLink>
            <NavLink to="/admin/users">
                <FiUsers size={35}/>
                <span>Users</span>
            </NavLink>
            <NavLink to="/main">
                <FcStatistics size={35}/>
                <span>Statistic</span>
            </NavLink>
            <NavLink to="/admin/profile">
                <CgProfile size={35}/>
                <span>Profile</span>
            </NavLink>

        </div>
        
        <Auth>
          {isLoggedIn ? (
            <NavLink to="/" onClick={handleLogout} >
                <FiLogOut size={35}/>
                <span>Deconnecter</span>
            </NavLink>
          ) : (
            <div>
              <NavLink to="/enregistrer/signin" onClick={handleButtonClick}>
                <FiLogIn size={35}/>
                <span>Connecter</span>
              </NavLink>
            </div>
          )}
        </Auth>

      </Content>
     
    </MenuSlide>
  );
}


const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  

  & > div{
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

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 13px;
  font-weight: bold;

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