import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    min-height: 1000px;
    padding-top: 2rem;
    padding-bottom: 10rem;
`



export const FicheHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const FicheContent= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    border: 1px solid #228558;
    border-radius: 8px;
    background-color: #fff;
    color: #228558;
`
export const Info= styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 16px;
    width: 50%;
    padding: 0.3rem;

    & > p{
        display: inline;
    }

    @media screen and (max-width: 750px){
        font-size: 12px;
    }

`

export const Icons = styled.div`
    display: flex;
    gap:0.5rem;
`



