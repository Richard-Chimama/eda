import styled from 'styled-components'
import Theme from '../../Theme'

export const container = styled.div`
    display: flex;
    margin-bottom: 10rem;
    .sidebar{
      animation: slideOut 0.9s backwards;

      @keyframes slideOut{
        100%{
          margin-left: 0;
        }
        0%{
          margin-left: -25%;
        }
      }

    }


`
export const content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
    position: relative;
    margin: 0 auto;

    @media (min-width: ${Theme.Devices.Mobile}px) {
    text-align: none;
  }
`

export const Intro = styled.p`

  width: 80%;
  min-width: 350px;
  margin: 0 auto;
  line-height: 40px;
`

export const Title = styled.p`
    font-size: 26px;
    font-weight: 500;
  @media screen and (max-width: 450px){
    font-size: 18px;
    font-weight: 700;
    color: #228558;
    line-height: 20px;
  }
`

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;

  & > div{
    width: Calc(90%/3);
    min-width: 320px;
    text-align: left;
  }
`