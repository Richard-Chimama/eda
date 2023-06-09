import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { AiOutlineCloseCircle } from "react-icons/ai"

interface Props{
    CloseButton: (state:boolean)=>void,
    returnInputs: (data:any)=> void
}

const Event: React.FC<Props> = ({CloseButton, returnInputs}) => {
    const [inputs, setInputs ] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]:value})
    }

    const handlePress = ()=>{
        CloseButton(false)
        returnInputs(inputs)
    }

  return (
    <Container>
        <div className={"icon"} onClick={()=> CloseButton(false)}>
            <AiOutlineCloseCircle size={20} />
        </div>
        <Label><span className="input-label">Titre:</span>
            <input type="text" name="title" value={inputs.title} onChange={handleChange} />
        </Label>
        <Label>
            <span className="input-label">Description:</span>
            <input type="text" name="description" value={inputs.description} onChange={handleChange} />
        </Label>
        <Button value={"Sauvegarder"} onPress={handlePress} />
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: 15vh;
    left: 10vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 250px;
    width: 300px;
    margin: 0 auto;
    z-index: 9999;
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 1rem;

    & > .icon{
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        cursor: pointer;
    }
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & > input{
        height:30px;
        padding-left: 5px;
        outline: none;
        border: 1px solid #228558;
        border-radius: 8px;

    }

`

export default Event