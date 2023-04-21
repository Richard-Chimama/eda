import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: #228558;
  border-radius: 10px;
  width: 100%;
  min-width: 135px;
  border: 1px solid #228558;
  padding-top: 10px;
  cursor: pointer;

  & > .label-menu {
    position: absolute;
    background-color: #fff;
    color: #228558;
    font-size: 16px;
    border: none;
    height: 70px;
    width: 100%;  
    bottom: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
      position: unset;
      background-color: #228558;
      color: #fff;
      height: 100%;
      bottom: none;
      border-radius: 10px;
    }

    & > .icon-menu{
        display: none;
        color: red;
       
        @media screen and (max-width: 480px) {
        }        
    }
  }
`;

export const MenuComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;

  & > div{
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    min-width: none;
    & > div{
    height: 40px;

    &> div{
        height: 40px;
  }
  }
`;

export const H1 = styled.h1`
    text-align: center;
    color: #228558;
`
