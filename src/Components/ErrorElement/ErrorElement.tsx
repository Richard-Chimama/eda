import React from 'react'
import { useRouteError } from 'react-router-dom'
import StateMessage from '../StateMessage'
import styled from 'styled-components'

const ErrorElement = () => {
    let error:any = useRouteError()
  return (
        <StateMessage>
            <Content>
                <h1>{error.status}!!</h1>
                <p>{error.data}</p>
                <i>Oops!! page {error.statusText}</i>
            </Content>
        </StateMessage>
  )
}

const Content = styled.div`
    text-align: center;
`

export default ErrorElement