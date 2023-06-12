import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import API from '../../../API'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import profile from "../../../assets/user-img.png"

const Profile = () => {
    const profileId = localStorage.getItem("userId")
    const [User, setUser] = useState<any>({})
    const {loading, error, data} = useQuery(API.Queries.findAllUsers)

   
    
    useEffect(()=>{
      const GET_USER = localStorage.getItem('user')
  
      if(GET_USER){
        setUser(JSON.parse(GET_USER))
      }
    }, [])

    console.log(User)
  

    if(loading){
        <StateMessage><h3>Loading...</h3></StateMessage>
    }


    if(error){
        <StateMessage><h3>{error.message}</h3></StateMessage>
    }

    let result
    if(data != undefined){
      result  = data.users.filter((user:any) => user.id === profileId || user.email === User.email)
    }
    
    console.log(result)

  return (
    <Container>
         <p>
            This page is under development 😉 <Link to="..">Go back</Link>
          </p>
      {(data != undefined && result.length > 0) && (
        <div>
         
          <h1>Profile</h1>
         {/*  <div>
            <img src={result[0].avatar? result[0].avatar : profile} alt="profile " />
          </div> */}
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