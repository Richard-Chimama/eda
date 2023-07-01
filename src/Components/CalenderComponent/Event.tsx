import React, { useState } from 'react'
import styled from 'styled-components'
//import Button from '../Button'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


interface Props{
    CloseButton: (state:boolean)=>void,
    returnInputs: (data:any)=> void,
    show : boolean
}

const Event: React.FC<Props> = ({CloseButton, returnInputs, show}) => {
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
    <Modal show={show} onHide={()=>CloseButton(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Label><label className="input-label ">Titre:</label>
                <input type="text" name="title" className='form-control' value={inputs.title} onChange={handleChange} />
            </Label>
            <Label>
                <span className="input-label">Description:</span>
                <textarea name="description" className='form-control' value={inputs.description} onChange={handleChange} />
            </Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> CloseButton(false)}>
            Annuler
          </Button>
          <Button variant="success" onClick={handlePress}>
            Confirmer
          </Button>
        </Modal.Footer>
    </Modal>
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

  

`

export default Event