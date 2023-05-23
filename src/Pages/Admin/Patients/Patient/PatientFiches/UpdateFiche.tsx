import React from 'react'
import styled from 'styled-components'
import { MdOutlineCancel } from "react-icons/md"
import TwoActionButtons from '../../../../../Components/TwoActionButtons'

interface Props{
    data?: any,
    close: (txt:boolean)=> void
}

const UpdateFiche: React.FC<Props> = ({data, close}) => {

    const handleUpdate = (e:any)=>{
        e.preventDefault();
    }

  return (
    <Container>
        <Cancel onClick={()=>close(false)}>
            <MdOutlineCancel size={30}/>
        </Cancel>
        <h2>Réviser</h2>
        <FormContent>
            <Label><span>Allergie:</span>
                <input type="text" name="allergie" value={data.allergie} disabled />
            </Label>
            <Label><span>Atcd Chirurgicaux:</span>
                <input type="text" name="atcd_chirurgicaux" value={data.atcd_chirurgicaux}  disabled/>
            </Label>
            <Label><span>Atcd Medicaux:</span>
                <input type="text" name="atcd_medicaux" value={data.atcd_medicaux}  disabled/>
            </Label>
            <Label><span>GS:</span>
                <input type="text" name="gs" value={data.gs}  disabled/>
            </Label>
            <Label><span>Intoxication:</span>
                <input type="text" name="intoxication" value={data.intoxication}  disabled/>
            </Label>
            <Label><span>Poids:</span>
                <input type="text" name="poids" value={data.poids}  disabled/>
            </Label>
            <Label><span>Pouls:</span>
                <input type="text" name="pouls" value={data.pouls}  disabled/>
            </Label>
            <Label><span>RH:</span>
                <input type="text" name="rh" value={data.rh}  disabled/>
            </Label>
            <Label><span>TA:</span>
                <input type="text" name="ta" value={data.ta}  disabled/>
            </Label>
            <Label><span>Taille:</span>
                <input type="text" name="taille" value={data.taille}  disabled/>
            </Label>
            <Label><span>Temperature:</span>
                <input type="text" name="temperature" value={data.temperature}  disabled/>
            </Label>
            
        </FormContent>

        <TextArea>
            <Label><span>Observation:</span>
                <textarea name="observations" value={data.observations} cols={50} rows={5} disabled></textarea>
            </Label>
            <Label>
                    <span>Prescription:</span>
                <textarea name="prescription" value={data.prescription} cols={50} rows={5} ></textarea>
            </Label>
        </TextArea>

  
        <TwoActionButtons 
            label1='Annuler' 
            label2='Réviser' 
            action1={()=>close(false)} 
            action2={handleUpdate}
            />
    </Container>
  )
}


const Container = styled.div`
  position: absolute;
  top: 2rem;
  left: 5%;
  z-index: 9999;
  width: 90%;
  background-color: #f6f0f0;
  box-shadow: 0 4px 10px #98989cd1;
  padding-bottom: 5rem;

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