import React from 'react'
import styled from "styled-components"
import Loading from "../../assets/icons8-loading-circle-96.png"

interface Props{
    children?: React.ReactElement
    loading?: boolean
}

const StateMessage:React.FC<Props> = ({children, loading}) => {
  return (
    <Container>
        {loading && <Image src={Loading} alt="loading" /> }
        {!loading && children}
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
const Image = styled.img`
  height: 100px;
  width: 100px;
`

export default StateMessage