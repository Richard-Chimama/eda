import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import styled from "styled-components"
import Nav from '../Components/Nav/Nav'



const RegisterTemplate = () => {
  return (
    <Container>
      <Content>
        <Nav />
        <Section>
          <Outlet />
        </Section>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: #d2cccc;
 

  & > header{
    grid-row: 1;
  }

  & > section{
    grid-row: 2;
  }

  

  @media screen and (max-width:420px){
    font-size: 12px;

  }

`
const Section = styled.section`
    position: relative;
    background-color: #f6f0f0;
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 756px){
      margin-top: 0;
      margin-bottom: 3rem;
      width: 95%;
    }
`
const Content = styled.div`
  display:flex;
  position: relative;
`

export default RegisterTemplate