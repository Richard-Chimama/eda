import React from 'react'
import styled from "styled-components"

const Nav = () => {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
    height: 50px;
    background-color: #282828;
    margin: 0;
    padding: 0;

    @media (min-width: 480px) {
        height: 150px;
    }
`

export default Nav