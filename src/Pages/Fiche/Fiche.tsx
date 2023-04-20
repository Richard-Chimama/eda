import React from 'react'
import { useNavigate } from 'react-router-dom'

const Fiche = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h3>Fiche</h3>
        This page is under development!!!
        <br />
        <button onClick={()=>navigate("/")}>Go back</button>
    </div>
  )
}

export default Fiche