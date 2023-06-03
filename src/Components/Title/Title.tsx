import React from 'react'
import styled from 'styled-components'

interface Props{
    label: string
}

const Title: React.FC<Props> = ({label}) => {
  return (
    <Content>{label}</Content>
  )
}

 const Content = styled.h4`
    color: #228558;
    padding: 0.5rem;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    text-align: center;
`

export default Title