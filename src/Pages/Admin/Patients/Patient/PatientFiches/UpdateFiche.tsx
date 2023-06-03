import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdOutlineCancel } from "react-icons/md"
import TwoActionButtons from '../../../../../Components/TwoActionButtons'
import {useMutation } from "@apollo/client"
import API from '../../../../../API'
import { useNavigate } from 'react-router-dom'
import Popup from './Popup'

interface Props{
    data?: any,
    state: string,
    close: (txt:boolean)=> void
}

const UpdateFiche: React.FC<Props> = ({data, state, close}) => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        prescription: ""
    })
    const [edit, setEdit] = useState(true)
    const [updateFiche, {loading, error, data:DATA}] = useMutation(API.Mutations.UPDATE_FICHE)

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]:value})
    }

    const handleUpdate = (e:any)=>{
        e.preventDefault();
        updateFiche({
            variables:{
                updateFicheId: data.id,
                prescription: inputs.prescription
            },
            onCompleted: res =>{
                  close(false)
              
            },
            onError: err =>{
                console.log(err.message)
            }
        })
    }
 

  return (
    <Container>
      <Cancel onClick={() => close(false)}>
        <MdOutlineCancel size={30} />
      </Cancel>
      {loading && (
        <div style={{ position: "relative" }}>
          <Popup message={"The fiche has been updated"} />
        </div>
        
      )}
      <h2>Réviser</h2>
      <FormContent>
        <Label>
          <span>Allergie:</span>
          <input
            type="text"
            name="allergie"
            value={data.allergie}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Atcd Chirurgicaux:</span>
          <input
            type="text"
            name="atcd_chirurgicaux"
            value={data.atcd_chirurgicaux}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Atcd Medicaux:</span>
          <input
            type="text"
            name="atcd_medicaux"
            value={data.atcd_medicaux}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>GS:</span>
          <input
            type="text"
            name="gs"
            value={data.gs}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Intoxication:</span>
          <input
            type="text"
            name="intoxication"
            value={data.intoxication}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Poids:</span>
          <input
            type="text"
            name="poids"
            value={data.poids}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Pouls:</span>
          <input
            type="text"
            name="pouls"
            value={data.pouls}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>RH:</span>
          <input
            type="text"
            name="rh"
            value={data.rh}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>TA:</span>
          <input
            type="text"
            name="ta"
            value={data.ta}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Taille:</span>
          <input
            type="text"
            name="taille"
            value={data.taille}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
        <Label>
          <span>Temperature:</span>
          <input
            type="text"
            name="temperature"
            value={data.temperature}
            onChange={handleChange}
            disabled={edit}
          />
        </Label>
      </FormContent>

      <TextArea>
        <Label>
          <span>Observation:</span>
          <textarea
            name="observations"
            value={data.observations}
            cols={50}
            rows={5}
            onChange={handleChange}
            disabled={edit}
          ></textarea>
        </Label>
        <Label>
          <span>Prescription:</span>
          <textarea
            name="prescription"
            cols={50}
            rows={5}
            value={state=== "view"? data.prescription :inputs.prescription}
            onChange={handleChange}
            disabled={state === "view"? true: false}
          ></textarea>
        </Label>
      </TextArea>
        {
            state === "update" &&
        <TwoActionButtons
            label1="Annuler"
            label2="Réviser"
            action1={() => close(false)}
            action2={(e)=>handleUpdate(e)}
        />
        }
    </Container>
  );
}


const Container = styled.div`
  position: absolute;
  top: 2rem;
  left: 15%;
  z-index: 9999;
  width: 70%;
  margin: 0 auto;
  background-color: #f6f0f0;
  box-shadow: 0 4px 10px #98989cd1;
  padding-bottom: 5rem;
  color: #228558;

  @media screen and (max-width: 480px) {
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
  }
`;
const Cancel = styled.div`
    position: absolute;
    right: 0.5rem;
`
 const FormContent = styled.div`
     display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-inline: 0.5rem;

`

 const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-family: "Roberto", sans-serif;

  & > input{
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid #228558;
    border-radius: 8px;
    padding-left: 10px;
  }

  & > textarea{
    width: 100%;
    outline: none;
    border: 1px solid #228558;
    border-radius: 8px;
    padding-left: 10px;
  }

  `

  const TextArea = styled.div`
    width: 80%;
    margin: 0 auto;
  `

export default UpdateFiche