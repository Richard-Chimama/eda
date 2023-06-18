import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 2.5rem auto 0 auto;
    padding-bottom: 5rem;
    height: 100%;
    min-height: 100vh;

    @media screen and  (max-width: 450px){
        width: 90%;
    }
`
export const UserDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const UserImage = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;

    @media screen and (max-width: 480px){
        height: 50px;
        width: 50px;
    }
`;

export const UserContainer = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    padding: 00.5rem 0.7rem;
    text-decoration: none;
    border: 1px solid #228558;
    border-radius: 15px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    cursor: pointer;
    background-color: #fff;

    @media screen and (min-width: 750px){
        font-size: 16px;
    }
`

export const Label = styled.label`
    width:100%;
    & > input[type="search"], .form-control{
        width: 80%;
        margin: 0 auto;
        height: 40px;
        outline: none;
        border-radius: 15px;
        padding-left: 10px;
        margin-bottom: 2rem;

    @media screen and (max-width: 450px){
        width: 100%;
    }
}
`


export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`