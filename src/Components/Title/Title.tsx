import React from 'react'
import styled from 'styled-components'

interface Props{
    label: string
}

const Title: React.FC<Props> = ({label}) => {
  return (
    <Content className='mb-3'>{label}</Content>
  )
}

 const Content = styled.h4`
    padding: 0.5rem;
    margin-left: 1rem;
`

export default Title