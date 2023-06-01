import React from 'react'
import styled from 'styled-components'

interface Props{
    label1: string,
    label2: string | JSX.Element,
    action1: ()=>void,
    action2: (e:any)=>void
}

const TwoActionButtons: React.FC<Props> = ({label1, label2, action1, action2}) => {
  return (
    <Container>
        <button onClick={action1}>{label1}</button>
        <button className="active" onClick={action2}>{label2}</button>
    </Container>
  )
}

const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;

     & > button{
        width: Clamp(200px,20vw + 50px, 300px);
        height: 40px;
        border: 2px solid #228558;
        border-radius: 10px;
        font-size: 16px;
        
        font-weight: bold;
        color: #228558;


        @media screen and (max-width: 480px){
            width: 150px;
            font-size: 14px;
            height: 35px;
        }
     }

     & >.active{
        background-color: #228558;
        color: #fff;

     }


`

export default TwoActionButtons