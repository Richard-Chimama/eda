import styled, { css } from 'styled-components'
import Theme from '../../Theme'

export const container = styled.div`
    display: flex;
    padding-bottom: 10rem;

    & > button{
      position: absolute;
    }
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
export const content = styled.div<props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
    position: relative;
    margin-left: ${(props)=>props.collapsed ? "1.5rem": "280px"};
    width: ${(props)=>props.collapsed? 'Calc(100%)' :'Calc(100%-290px)'};

    @media (max-width: ${Theme.Devices.Mobile}px) {
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

interface props{
  collapsed: boolean;
}

export const NavSide = styled.div<props>`
    display: ${(props)=> props.collapsed ? "none" : "block"};
  width: 280px;
  z-index: 9999;
  position: fixed;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.collapsed ? "-280px" : "0")});


  ${(props) =>
    props.collapsed &&
    css`
      visibility: hidden;
      pointer-events: none;
    `};

`