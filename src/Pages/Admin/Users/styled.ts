import styled from 'styled-components'

export const Container = styled.div`
    min-height:100vh;
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;

    @media screen and (max-width: 450px){
        width: 90%;
        overflow-x: scroll;
    }
`
export const Table = styled.table`
    border-collapse:collapse;
    width: 100%;
    margin: 0 auto;

   
`
export const TH = styled.th`
    border-bottom: 1px solid grey;
    height: 40px;
`

export const TD = styled.td`
    text-align: center;
    padding-inline: 10px;
    height: 40px;

    & > img{
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
`

export const TR = styled.tr`

`
export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
`

export const AddUserSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding-inline: 0.9rem;  
    border-bottom: 1px solid #000;
`

export const ActionIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`
