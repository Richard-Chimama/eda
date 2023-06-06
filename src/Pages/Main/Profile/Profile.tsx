import React from 'react'
import styled from 'styled-components'
import API from '../../../API'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import Title from '../../../Components/Title'

const Profile = () => {
    const profileId = localStorage.getItem("userId")
    const {loading, error, data} = useQuery(API.Queries.findAllUsers)

  

    if(loading){
        <StateMessage loading />
    }


    if(error){
        <StateMessage error={error.message}><h3>{error.message}</h3></StateMessage>
    }

    let result
    if(data != undefined){
      result  = data.users.filter((user:any) => user.id === profileId)
    }
    

  return (
    <Container>
         <Title label={"Profile"} />
      {data != undefined && (
        <div>
          <div>
            <Image src={result[0].avatar} alt="profile " />
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
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
    min-height: 100vh;

    & > div{
      display: flex;
      justify-content:center;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 450px){
      width: 90%;
    }
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    margin-left: 0.5rem;

    & > span{
        display: flex;
        justify-content: space-between;
        width: 400px;

        @media screen and (max-width:450px){
          width: 100%;
        }

    }

`

const Image = styled.img`
  height: 300px;
  width: 300px;
`

export default Profile