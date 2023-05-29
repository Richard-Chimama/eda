import styled from 'styled-components'


export const Container = styled.div`
    width: 80%;
    margin: 1rem auto;
    min-height: 100vh;
`

export const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    font-family: "Roberto", sans-serif;

    & > input, select{
        width: 100%;
        height: 30px;
        outline: none;
        border: 1px solid #228558;
        border-radius: 8px;
        padding-left: 10px;
    }

    & > input[type="submit"]{
        background-color: #228558;
        border: none;
        border-radius: 8px;
        color: #fff;
        height: 40px;
        cursor: pointer;
        width: 60%;
        margin: 2rem auto;
        font-size: 18px;
        font-weight: bold;

    }
`

export const FormSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    align-items: center;
    gap: 0.5rem;
   
`

export const Header = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    line-height: 30px;
    text-align: center;
    color: #228558;
`