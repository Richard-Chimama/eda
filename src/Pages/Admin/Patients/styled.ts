import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 0 auto 5rem auto;
`


export const UserImage = styled.img`
    height: 85px;
    width: 85px;
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
    height: 90px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    cursor: pointer;

    @media screen and (min-width: 750px){
        font-size: 16px;
    }
`

export const Label = styled.label`
    width:80%;
    & > input[type="search"]{
        width: 100%;
        margin: 0 auto;
        height: 40px;
        outline: none;
        border-radius: 15px;
        padding-left: 10px;
    }
`