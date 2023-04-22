import React, { FunctionComponent, useState} from 'react'
import styled from 'styled-components';

interface props{
    title: string
}

const TextArea: FunctionComponent<props> = ({title}) => {
    const [textArea, setTextArea] = useState("")
    const date = new Date();
    const weekday = new Array('Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi')
	const dayOfWeek = weekday[date.getDay()]
    const dd = String(date.getDate());
    const mm = String(date.getMonth());
    const yy = String(date.getFullYear());
    const todayDate = dayOfWeek + "    " + dd + "/" + mm + "/" + yy;

  return (
    <Content>
        <Header>
            <p className='title'>{title}</p>
            <p className='date'>{todayDate}</p>
        </Header>
        <textarea rows={10} value={textArea} onChange={(e)=>setTextArea(e.target.value)}>

        </textarea>
    </Content>
  )
}

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    & > .title{
        color: #228558;
        font-weight: 600;
        font-size: 18px;
    }
    & > .date{
        font-size: 14px;
    }
`

const Content = styled.div`
    width: 90%;
    margin-left: auto;
        margin-right: auto;
    & > textarea{
        width: 100%;
        border: 1px solid #228558;
        border-radius: 10px;
        outline: none;
        padding: 15px;
    }
`

export default TextArea