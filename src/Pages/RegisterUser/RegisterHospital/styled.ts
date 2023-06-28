import styled from 'styled-components'
import Theme from '../../../Theme';

export const Container = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    padding-inline: 5rem;

    @media screen and ( max-width: 450px){
      width: 90%;
      padding-inline: 0.5rem;
    }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

 
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;

  @media (min-width: ${Theme.Devices.Mobile}px) {
    text-align: left;
  }

  & > span {
    font-family: Poppin;
    font-size: 14px;
    font-weight: 500;
    color: #228558;
  }

  & > input,select, .password1 {
    border: 1px solid #228558;
    border-radius: 10px;
    height: 30px;
    outline: none;
    padding-left: 10px;
  }
`;