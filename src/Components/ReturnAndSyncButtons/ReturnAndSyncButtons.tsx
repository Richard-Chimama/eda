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

    & > .returnSync{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export default ReturnAndSyncButtons