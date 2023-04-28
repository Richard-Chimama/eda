import { useQuery, gql } from '@apollo/client';
import React, {FunctionComponent} from 'react';
import { useNavigate } from 'react-router-dom'


const checkHospital = gql`
    query Hospitals{
      hospitals{
        id
        name
        city
        address 
        createdAt
      }
    }
`

const VerfiryHospital: FunctionComponent = () => {
  const navigate = useNavigate()

    const {loading, error, data} = useQuery(checkHospital)
    if(error){
      console.log(error)
    }
    console.log(data)
  return (
    <div>
        VerfiryHospital
        <button onClick={()=>navigate("/")}>Go back</button>

    </div>
  )
}

export default VerfiryHospital