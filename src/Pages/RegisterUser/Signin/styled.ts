import styled from 'styled-components'
import Theme from '../../../Theme';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: 3rem;
    min-height: 100vh;
    @media (max-width: ${Theme.Devices.Mobile}px) {
    padding-inline: 0.5rem;
  }
`

export const Form = styled.form`
    width: 70%;
    @media (max-width: ${Theme.Devices.Mobile}px) {
    width: 95%;
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
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
    width: 90%;
  }
`;
