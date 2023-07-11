import styled from "styled-components"

const Height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
    height: ${Height+20}px;
    min-height: 100vh;

    @media screen and (max-width: 450px){
        width: 95%;
    }
`