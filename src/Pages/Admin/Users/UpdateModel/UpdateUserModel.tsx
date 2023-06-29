import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import userImg from "../../assets/user-img.png"
import api from '../../../../API';


interface Props{
    handleShow?: boolean | undefined
    handleClose: () => void,
    refetch: ()=>void,
    title: string,
    content: any,
}


const UpdateUserModel:React.FC<Props> = ({title, content, handleShow, handleClose, refetch}) => {
    const [inputs, setInputs] = useState({ role: '' })

    const [updateUserRole] = useMutation(api.Mutations.UPDATE_USER_ROLE) 
    
    
    function handleChange(e:any){
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]: value})
    }

    const handleUpdate = ()=>{
        updateUserRole({
            variables:{
                user: content.id,
                role:inputs.role,
            },
            onCompleted:(data)=>{
                refetch()
                handleClose()
            }
        })
    }



  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label
            htmlFor="role"
            style={{ display:"block", width: "90%", margin: "0px auto" }}
          >
            Choisir un rôle:
          </label>
          <select
            name="role"
            className="form-control"
            id="role"
            value={inputs.role}
            onChange={handleChange}
            style={{ width: "90%", height: "40px", margin: "0px auto" }}
          >
            <option>...</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="lab">Lab</option>
          </select>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateUserModel