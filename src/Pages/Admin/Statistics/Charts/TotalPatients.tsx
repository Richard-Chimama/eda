import React from 'react'
import { VictoryPie } from 'victory';

interface props{
    data: any[]    
}

const TotalPatients: React.FC<props> = ({data}) => {
  return (
    <div>
        <VictoryPie data={data} />
    </div>
  )
}

export default TotalPatients