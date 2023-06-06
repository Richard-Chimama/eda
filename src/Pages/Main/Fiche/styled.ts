import styled from "styled-components";
import Theme from "../../../Theme";

export const Container = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 450px){
    width: 95%;
  }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    font-family: Poppins;
    width: 100%;
    text-align: center;
`
export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-family: "Roberto", sans-serif;

  & > input,
  select {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid #228558;
    border-radius: 8px;
    padding-left: 10px;
  }
  & > textarea {
    width: 100%;
    height: 60px;
    outline: none;
    border: 1px solid #228558;
    border-radius: 8px;
    padding-left: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

`

export const Code = styled.div`
  display: block;

  @media (min-width: 760px) {
  }
 
`;

export const Cutter = styled.div`
  border: 1px solid #282828;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Area = styled.div`
    width: 100%;
`

export const SubmitButton = styled.div`
    
    &>input{
      width: 70%;
    height: 40px;
    background-color: #228558;
    color: #fff;
    border: 1px solid #228558;
    border-radius: 15px;
    margin: 2rem auto;
    cursor: pointer;
    }
`

export const FormSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    align-items: center;
    gap: 0.5rem;
    margin:0 auto;
`

export const PatientInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto 2rem auto;

    & > div{
      padding-inline: 0.5rem;
      text-align: left;
    }
`