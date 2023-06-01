import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    
`

export const Profile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
   
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