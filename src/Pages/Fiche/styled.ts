import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 760px) {
    width: 80%;
  }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    font-family: Poppins;
    width: 100%;
    text-align: center;
`

export const Code = styled.div`
  display: block;

  @media (min-width: 760px) {
  }

  & > label {
    font-family: Poppin;
    font-size: 14px;
    font-weight: 500;
    color: #228558;
  }

  & > input {
    border: none;
    border-bottom: 2px solid #228558;
    height: 30px;
    outline: none;
    font-weight: 600;
    color: red;
    padding-left: 10px;
  }
`;

export const Cutter = styled.div`
  border: 1px solid #282828;
  width: 90%;
  margin: 1rem auto;
`;

export const Area = styled.div`
    width: 100%;
`

export const SubmitButton = styled.button`
    width: 70%;
    height: 40px;
    background-color: #228558;
    color: #fff;
    border: 1px solid #228558;
    border-radius: 15px;
    margin: 2rem auto;
    cursor: pointer;
`