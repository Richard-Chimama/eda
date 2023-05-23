import React from 'react'
import styled from 'styled-components'
import API from '../../../API'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'

const Profile = () => {
    const profileId = localStorage.getItem("userId")
    const {loading, error, data} = useQuery(API.Queries.findAllUsers)

  

    if(loading){
        <StateMessage><h3>Loading...</h3></StateMessage>
    }


    if(error){
        <StateMessage><h3>{error.message}</h3></StateMessage>
    }

    let result
    if(data != undefined){
      result  = data.users.filter((user:any) => user.id === profileId)
    }
    

  return (
    <Container>
         <p>
            This page is under development 😉 <Link to="..">Go back</Link>
          </p>
      {data != undefined && (
        <div>
         
          <h1>Profile</h1>
          <div>
            <img src={result[0].avatar} alt="profile " />
          </div>
          <UserInfo>
            <span>
              <span>Non:</span> <span>{result[0].username}</span>
            </span>
            <span>
              <span>E-mail:</span> <span>{result[0].email}</span>
            </span>
            <span>
              <span>Role:</span> <span>{result[0].role}</span>
            </span>
            <span>
              <span>Cnop:</span> <span>{result[0].cnop}</span>
            </span>
          </UserInfo>
        </div>
      )}
    </Container>
  );
}


const Container = styled.div`
    text-align: center;
    min-height: 100vh;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin: 0 auto;

    & > span{
        display: flex;
        justify-content: space-between;
        gap: 5rem;
        width: 300px;

    }

`

export default Profile