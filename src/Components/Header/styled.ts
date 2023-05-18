import styled from 'styled-components'

export const container = styled.div`
    border-bottom: 3px solid #228558;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 3rem auto 1rem auto;
    min-width: 480px;


    @media screen and (max-width: 480px) {
        min-width: 100px;
        }     

    .title{
        font-weight: 600;
        font-size: 26px;
        font-family: "Poppins", sans-serif;
    }
    .address{
        text-align: center;
        font-size: 18px;
        line-height: 19px;
    }
`