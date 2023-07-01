import React from 'react'
import { VictoryChart, VictoryHistogram, VictoryLine, VictoryTheme } from 'victory';


interface props{
    obj: any
}

const MonthlyStatistic: React.FC<props> = ({obj}) => {

    const date = new Date();
    const month = date.getMonth() + 1
   
    const data = (obj:any)=>{
        let i:any = 1
        let arr = []
        for(i ; i <= month; i++){
            if(obj[i] === undefined){
                arr.push({x:i,y: 0})
            }else{
                arr.push({x:i,y:obj[i]})
            }
        }
        return arr
    }

  return (
    <div>
        <p>Monthly consultation</p>
        <VictoryChart domainPadding={{x:[0, 0]}}  theme={VictoryTheme.material}>
        <VictoryLine 
             style={{
                data: { stroke: "#c43a31"},
                parent: { border: "1px solid #ccc"}
              }}
            data={data(obj)}
            categories={{x:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}
             />
            
        </VictoryChart> 
    </div>
  )
}

export default MonthlyStatistic