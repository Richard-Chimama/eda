import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;

  & > .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    border: 1px solid #228558;
    border-radius: 8px;
    height: 40px;
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    color: #228558;
  }

  @media (max-width: 750px) {
    width: 95%;

    & > .options {
        width: 90%;
    }
  }
`;

export const Profile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    width: 97%;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #228558;
    border-radius: 15px;
    padding: 0.5rem;

    @media (max-width: 450px) {
        justify-content: center;
        width: 97%;
        padding-inline: 0;
        gap: 0rem;
    }
   
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 1rem;
    font-family: Roberto, sans-serif;

    & > div{
        display: flex; 

        &> span{
            font-weight: 700;
            width: Clamp(100px, 7vw, 250px);
            min-width: 100px;
        }
    }
    @media (max-width: 480px) {
        width: 90%;
        padding-left: 2rem;

        & > div{
            justify-content: flex-start;
        }
    }
`

export const Image = styled.img`
    height: 200px;
    width: 160px;

    @media screen and (max-width: 480px){
        width: 300px;
    }
   
`
export const ProfileImage = styled.div`
  max-width: 200px;

  @media screen and (max-width: 480px){
        max-width: 300px;
    }


`;