import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;

  @media (min-width: 760px) {
    width: 100%;
  }

  & > span {
    font-family: Poppin;
    font-size: 14px;
    font-weight: 500;
    color: #228558;
  }

  & > input,
  select {
    border: 1px solid #228558;
    border-radius: 10px;
    height: 30px;
    outline: none;
    padding-left: 10px;
  }
`;
export const Container = styled.div`
  width: 100%;
  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "names "
      "basicInfo "
      "dateArea "
      "AdressATCD "
      "Allergie "
      "SecondaryInfo "
      "ContactPerson ";
  }
`;

export const Names = styled.div`
  @media (min-width: 760px) {
    grid-area: "names";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BasicInfo = styled.div`
  @media (min-width: 760px) {
    grid-area: "basicInfo";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DateArea = styled.div`
  @media (min-width: 760px) {
    grid-area: "dateArea";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AdressATCD = styled.div`
  @media (min-width: 760px) {
    grid-area: "AdressATCD";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }
`;

export const Allergie = styled.div`
  @media (min-width: 760px) {
    grid-area: "Allergie";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SecondaryInfo = styled.div`
  @media (min-width: 760px) {
    grid-area: "SecondaryInfo";
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactPerson = styled.div`
  @media (min-width: 760px) {
    grid-area: "ContactPerson";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }
`;
