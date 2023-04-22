import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        @Copy right Eda project 2023
    </Container>
  )
}

const Container = styled.div`
    height: 250px;
    background-color: #282828;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default Footer