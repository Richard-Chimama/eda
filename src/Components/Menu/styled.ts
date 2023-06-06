import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: #228558;
  border-radius: 10px;
  min-width: 300px;
  border: 1px solid #228558;
  padding-top: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {}   

  & .label-menu {
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
    }
  }
`;

export const MenuComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  justify-items: center;
  gap: 1rem;
  width: 100%;
  


  @media screen and (max-width: 480px) {
    min-width: none;
    margin-top: -0.6rem;
    & > div{
    height: 40px;
    }

    &> div{
        height: 120px;
  }
  }
`;

export const H1 = styled.h1`
    text-align: center;
    color: #228558;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1rem;
  margin-bottom: 5rem;
  padding-top: 2rem;
`
