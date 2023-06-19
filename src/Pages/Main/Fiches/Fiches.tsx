import React from 'react'
import Title from '../../../Components/Title'
import styled from "styled-components"
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'
import { SlChemistry } from 'react-icons/sl'
import { HiOutlineDocumentText, HiDocumentText} from 'react-icons/hi'
import { GrDocumentTest } from 'react-icons/gr'

const Fiches = () => {
    const params = useParams()
    const navigate = useNavigate()

    console.log(params.id)
  return (
    <Container className='container'>
        <ReturnAndSyncButtons navigateTo='/main/recherche' />
        <Title label="Fiches" />
        <MenuComponent>
            <Menu className='menu-button' onClick={()=> navigate("/main/fiche/"+params.id)} >
                <HiOutlineDocumentText className='icon-menu' color={"white"} size={110} />
                <div className="label-menu" >
                    FICHE DE CONSULTATION
                </div>
            </Menu>
            <Menu className='menu-button' onClick={()=> navigate("/main/ficheprenatale/"+params.id)} >
                <HiDocumentText className='icon-menu' color={"white"} size={110} />
                <div className="label-menu" >
                    FICHE DE CONSULTATION PRENATALE
                </div>
            </Menu>
            <Menu className='menu-button' onClick={()=> navigate("/main/laboratory/"+params.id)} >
                <SlChemistry className='icon-menu' color={"white"} size={110} />
                <div className="label-menu" >
                    LABORATOIRE
                </div>
            </Menu>
        </MenuComponent>
    </Container>
  )
}


const Container = styled.div`
    margin: 1rem auto 0 auto;

    @media screen and (max-width: 450px){
        width: 90%;
    }
`



const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: #228558;
  border-radius: 10px;
  width: 300px;
  min-width: 135px;
  border: 1px solid #228558;
  padding-top: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    position: unset;
    height: 80px;
    width: 95%;
    margin: 0 auto;

  }
  

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

const MenuComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  align-items: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  margin-inline: 1.3rem;
  padding-bottom: 5rem;

  & > div{
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    margin-top: 1rem;
    gap: 0.6rem;
  }

`;

export default Fiches