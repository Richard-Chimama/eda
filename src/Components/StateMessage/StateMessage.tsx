import React from 'react'
import styled from "styled-components"

interface Props{
    children: React.ReactElement
}

const StateMessage:React.FC<Props> = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 80vh;
`

export default StateMessage