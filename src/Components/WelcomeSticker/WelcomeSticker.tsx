import React from 'react'
import welcomeImg from "../../assets/check-up.png"
import styled from "styled-components"

interface props{
    name: String
}

const WelcomeSticker: React.FC<props> = ({name}) => {
  return (
    <Container>
        <Img src={welcomeImg} alt="Welcome sticker" />
        <Info>
            <p>Welcome Dr. {name}</p>
            <div>
                The problem will be solved 
            </div>
        </Info>
    </Container>
  )
}


const Info = styled.div`
    position: absolute;
    top: 3rem;
    right: 10rem;

    & > p{
        color: white;
        font-size: clamp(16px, 9vw, 24px);
        font-weight: bold;
        padding-right: 5rem;
        @media screen and (max-width: 450px){
            padding-right: 0rem;
        }
    }

    @media screen and (max-width: 450px){
        right: 1rem;
        top: 10rem;
    }

`

const Img = styled.img`
    height: 450px;
    width: 380px;
    position: absolute;
    top: -10rem;

    @media screen and (max-width: 450px){
        height: 400px;
        width: 320px;
        top: -10rem;
    }
`

const Container = styled.div`
    background-color: #7fc357;
    position: relative;
    height: 300px;
    width: 80%;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 450px){
       width:90%;
    }
`

export default WelcomeSticker