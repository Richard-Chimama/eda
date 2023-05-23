import React from 'react'
import styled from 'styled-components'
import API from '../../../API'
import { useQuery } from '@apollo/client'

const Profile = () => {
    const profileId = localStorage.getItem("userId")
    const {loading, error, data} = useQuery(API.Queries.findAllUsers)

    console.log(data)
    console.log(profileId)

  return (
    <Container>
        Profile
    </Container>
  )
}


const Container = styled.div`
    min-height: 100vh;
`

export default Profile