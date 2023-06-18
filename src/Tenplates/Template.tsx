import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import { gql, useApolloClient } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import 'bootstrap/dist/css/bootstrap.css'



const Template = () => {
  const navigate = useNavigate()
  const client = useApolloClient()
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScrrenWidth] = useState(800);


  const state:any = client.cache.readQuery({
    query: gql`
      query isLoginStatus { 
        isLoggedIn @client
      }
    `
  })

  useEffect(()=>{
    if(!state.isLoggedIn){
      navigate("/enregistrer/signin")
    }
    handleScreenResize()
  },[])
  


  const handleScreenResize = () => {
    const GET_WINDOW_WIDTH = window.screen.width;
    setScrrenWidth(GET_WINDOW_WIDTH);
  };

  window.onresize = handleScreenResize;


  return (
    <Container>
      <button className="btn" onClick={()=> setCollapsed(!collapsed)} type="button" >
        <GiHamburgerMenu size={35} color={"#1e2123"} />
      </button>

      <NavSide collapsed={collapsed}>
        <Nav screenSize={screenWidth} toggleCollapsed={setCollapsed}/> 
      </NavSide>

      <Section collapsed={collapsed}>
        <Outlet />
      </Section>
    
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #d2cccc;
  display: flex;
 
  & > button{
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  @media screen and (max-width:420px){
    font-size: 12px;
  }
`

interface props{
  collapsed: boolean;
}

const NavSide = styled.div<props>`
    display: ${(props)=> props.collapsed ? "none" : "block"};
  width: 280px;
  z-index: 9999;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.collapsed ? "-280px" : "0")});


  ${(props) =>
    props.collapsed &&
    css`
      visibility: hidden;
      pointer-events: none;
    `};

`


const Section = styled.section<props>`
    background-color: #f6f0f0;
    margin-left: ${(props)=>props.collapsed ? "0px": "280px"};
    width: ${(props)=>props.collapsed? '100%' :'100%'};
    padding-top: 2rem;
    padding-bottom: 3rem;
    height: 100%;
    min-height: 100vh;

    @media screen and (max-width: 480px){
      width: 100%;
      margin-left: 0;
    }
`


export default Template