import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recherche = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3>Recherche</h3>
        This page is under development!!!
        <br />
        <button onClick={()=>navigate("/main")}>Go back</button>
    </div>
  )
}

export default Recherche