import styled from 'styled-components'

export const Menu = styled.div`
    & > button {
        background-color: green;
        color: white;
    }
    
    @media (max-width: 320){
        & > button{
            width: 100%;
            color: black;
        }
    }
`

export const MenuComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`