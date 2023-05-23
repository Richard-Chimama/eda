import styled from "styled-components";

export const container = styled.div`
 
`

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
      color: #f8f4f4;
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
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  margin-inline: 1.3rem;
  padding-bottom: 5rem;

  & > div{
    width: 100%;
  }


`;