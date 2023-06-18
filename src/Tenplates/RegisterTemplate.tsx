import React, {useEffect, useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Outlet } from 'react-router-dom'
import styled, { css } from "styled-components"
import Nav from '../Components/Nav/Nav'



const RegisterTemplate = () => {
  const [screenWidth, setScrrenWidth] = useState(800);
  const [collapsed, setCollapsed] = useState(false);



  useEffect(()=>{
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
          <Nav screenSize={screenWidth} toggleCollapsed={setCollapsed} />
        </NavSide>
        <Section collapsed={collapsed}>
          <Outlet />
        </Section>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: #d2cccc;
  height: 100%;
  box-sizing: border-box;

  & > button{
    z-index: 100;
    position: absolute;
  }

  

  @media screen and (max-width:450px){
    font-size: 12px;
  }

`
interface props{
  collapsed: boolean;
}
const Section = styled.section<props>`
    position: relative;
    background-color: #f6f0f0;
    height: 100%;
    margin-left: ${(props)=>props.collapsed ? "0px": "280px"};
    width: ${(props)=>props.collapsed? '100%' :'100%'};
    @media screen and (max-width: 450px){
      margin-left: 0;
      width: 100%;
    }
`

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

export default RegisterTemplate