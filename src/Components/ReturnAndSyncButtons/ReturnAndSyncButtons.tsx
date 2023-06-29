import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSync } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props{
    navigateTo: string,
    syncFunction?: ()=> void
}

const ReturnAndSyncButtons: React.FC<Props> = ({navigateTo, syncFunction}) => {
  return (
    <ReturnAndSync>
        <Link className='returnSync' to={navigateTo} ><IoIosArrowBack size={20}  /> retour</Link>
        {syncFunction ? <button className='returnSync' onClick={syncFunction}><IoSync size={20} /> sync</button> : <div></div>}
    </ReturnAndSync>
  )
}

 
 const ReturnAndSync = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #000;
    margin-inline: 1rem;
    padding-bottom: 0.5rem;

    & > .returnSync{
        display: flex;
        align-items: center;
        text-decoration: none;
        border: none;
    }
`

export default ReturnAndSyncButtons