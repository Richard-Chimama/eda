import { gql, useApolloClient } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Outlet, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Nav from '../Components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../Components/Header/Header'



const AdminTemplate = () => {
  const navigate = useNavigate()
  const client = useApolloClient()
  const [screenWidth, setScrrenWidth] = useState(800);
  const [collapsed, setCollapsed] = useState(false)
  
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

  const handleCollapse = ()=>{
    setCollapsed(!collapsed)
  }

  return (
    <Container >
          <GiHamburgerMenu className='button'  onClick={handleCollapse} size={40} color={"#1e2123"} />
       
      <NavSide collapsed={collapsed}>
        <Nav screenSize={screenWidth} toggleCollapsed={setCollapsed} />
      </NavSide>
      <Section  collapsed={collapsed}>
          <Header onPress={handleCollapse} />
        <Outlet />
      </Section>
    </Container>
  );
}


const Container = styled.div`
  background-color: #d2cccc;
  min-width: 400px;
  margin-top: 0rem;
  position: relative;

  & > .button {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  @media screen and (max-width: 450px){
    font-size: 12px;
  }
`

const Section = styled.section<props>`
  background-color: #f6f0f0;
  margin-left: ${(props)=>props.collapsed ? "0px": "280px"};
  width: ${(props)=>props.collapsed? 'Calc(100%)' :'Calc(100%-290px)'};
  height: 100%;
  padding-top: 0px;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`;
interface props{
  collapsed: boolean;
}

const NavSide = styled.div<props>`
    display: ${(props)=> props.collapsed ? "none" : "block"};
  width: 280px;
  z-index: 9999;
  position: fixed;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.collapsed ? "-280px" : "0")});


  ${(props) =>
    props.collapsed &&
    css`
      visibility: hidden;
      pointer-events: none;
    `};

`

export default AdminTemplate