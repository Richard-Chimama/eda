import React from 'react'
import { useNavigate } from 'react-router-dom'

const Rapport = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3>Rapport</h3>
        This page is under development!!!
        <br />
        <button onClick={()=>navigate("/main")}>Go back</button>
    </div>
  )
}

export default Rapport