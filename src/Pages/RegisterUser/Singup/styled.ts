import styled from 'styled-components'
import Theme from '../../../Theme';

const Height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

export const Content = styled.div`
    min-height: ${Height}px;
    width: 80%;
    margin: 2rem auto;
    padding-bottom: 5rem;
  @media (min-width: ${Theme.Devices.Mobile}px) {
    width: 760px;
    margin: 0 auto;
  }

  @media screen and (max-width: 450px){
    width: 90%;
  }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  width: 100%;

  & > .password-input{
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }

  & > .password-input .icon{
    position: absolute;
    right: 5rem;
    cursor: pointer;

    @media screen and (max-width: 450px){
      right: 2rem;
    }
    
  }

  @media (min-width: ${Theme.Devices.Mobile}px) {
    text-align: left;
    width: 100%;
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
  & > select{
    width: 92%;

    @media (max-width: 450px){
      width: 94%;
    }
  }
`;
