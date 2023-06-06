import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-top: 2rem;

    @media screen and (max-width: 450px){
        width: 95%;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media screen and (max-width: 450px){
        width: 100%;
    }
`

export const UserImage = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`;

export const UserContainer = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    padding: 0 0.7rem;
    text-decoration: none;
    border: 1px solid #228558;
    border-radius: 15px;
    color: black;
    background-color: white;
    height: 70px;
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    cursor: pointer;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media screen and (min-width: 750px){
        font-size: 16px;
    }
`

export const Info = styled.div`
    display: flex;
    gap: 0.1rem;
`
export const Label = styled.label`
    width: 90%;
    margin: 0.5rem auto;
    & > input[type="search"]{
        width: 100%;
        margin: 0 auto;
        height: 40px;
        outline: none;
        border: 2px solid #228558;
        border-radius: 15px;
        padding-left: 10px;
    }
`