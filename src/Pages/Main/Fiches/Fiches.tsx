import React from 'react'
import Title from '../../../Components/Title'
import styled from "styled-components"
import { Link, useParams } from 'react-router-dom'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'

const Fiches = () => {
    const params = useParams()
    console.log(params.id)
  return (
    <Container>
        <ReturnAndSyncButtons navigateTo='/main/recherche' />
        <Title label="Fiches" />
        <Content>
            <Doc>
                <Fiche to={"/main/fiche/"+params.id}>Fiche de consultation</Fiche>
            </Doc>
            <Doc>
                <Fiche to={"/main/ficheprenatale/"+params.id}>Fiche de consultation prenatale</Fiche>
            </Doc>
        </Content>
    </Container>
  )
}


const Container = styled.div`
    width: 80%;
    margin: 1rem auto 0 auto;

    @media screen and (max-width: 450px){
        width: 90%;
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
`

const Doc = styled.div`

    @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Fiche = styled(Link)`
  background-color: #228558;
  display: block;
  padding: 2rem;
  border: 1px solid #228558;
  text-align: center;
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 1rem;
  }
`;

export default Fiches