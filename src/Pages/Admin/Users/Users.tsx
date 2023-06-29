import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import api from "../../../API"
import { useMutation, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { BsPersonAdd } from "react-icons/bs"
import Title from '../../../Components/Title'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'
import userImg from "../../../assets/user-img.png"
import ModalConfirm from '../../../Components/ModalConfirm'
import UpdateUserModel from './UpdateModel'

const Users = () => {
    const [results, setResults] = useState<any>([])
    const [isSync, setIsSync ] = useState<boolean>(false)
    const [showModal, setShowModal ] = useState<boolean>(false)
    const [showUpdate, setShowUpdate ] = useState<boolean>(false)
    const [toActUser, setToActUser ] = useState(null)
    const id = localStorage.getItem("hospitalID")
    
    const { loading, error, data, refetch } = useQuery(api.Queries.findAllUsers);

    useEffect(()=>{
        if(!loading && !error && data) {
            setIsSync(false)
            fetchUsers(data)
        }

    },[isSync, loading, error, data])

    const fetchUsers = (data:any)=>{
        const result = data.users.filter((user:any) => {
            if(user.hospital.length > 0){
                return user.hospital.some((hospital:any) => hospital.id === id)
            }
        } )
        setResults(result)
    }
   

    const handleSync = ()=>{
        setIsSync(true)
        refetch()
    }

    const handleClose = ()=>{
        setShowModal(false)
    }
    const handleShow = ()=>{
        setShowModal(true)
    }

    const handleUpdateShow = ()=>{
        setShowUpdate(true)
    }
    const handleUpdateClose = ()=>{
        setShowUpdate(false)
    }

    const handleUpdate = (user:any)=>{
        handleUpdateShow()
        setToActUser(user)
        updateModal()
    }

    const handleDelete= (user:any)=>{
        handleShow()
        setToActUser(user)
        returnModal()
    }


    const returnModal = () => {
      return (
        <ModalConfirm
          title="Confirmation de la suppression"
          handleShow={showModal}
          handleClose={handleClose}
          content={toActUser}
          refetch={handleSync}
        />
      );
    };

    const updateModal = ()=>{
        return(
            <UpdateUserModel 
                title="Update l'utilisateur"
                handleShow={showUpdate}
                handleClose={handleUpdateClose}
                content={toActUser}
                refetch={handleSync}
            />
        )
    }
   

    if(loading){
        return <StateMessage loading/>
    }
  
    if(error){
        return <StateMessage error={error.message}><h3>Error{error.message}</h3></StateMessage>
    }

  return (
    <S.Container>
            <>
            <ReturnAndSyncButtons navigateTo={'/admin'} syncFunction={handleSync} />
            <Title label={"UTILISATEURS ENRISTRÉS DANS CET HÔPITAL"} />
            <S.AddUserSection>
                <p>Ajouter un utilisateur</p>
                <Link to={"/enregistrer/signup/"+id}>
                    <BsPersonAdd size={30}/>
                </Link>
            </S.AddUserSection>
            <S.Table className='table table-striped'>
                <thead>
                    <S.TR>
                        <S.TH scope="col">#</S.TH>
                        <S.TH scope="col">Photo</S.TH>
                        <S.TH scope="col">Nom</S.TH>
                        <S.TH scope="col">E-mail</S.TH>
                        <S.TH scope="col">Rôle</S.TH>
                        <S.TH scope="col">Action</S.TH>
                    </S.TR>
                </thead>
                <tbody>
                {results ? 
                    results.map((user:any, index:number) =>{
                        return <S.TR key={user.id}>
                            <th scope="row">{index +1}</th>
                            <S.TD>
                            <img src={user.avatar? user.avatar : userImg} alt={user.username} />
                            </S.TD>
                            <S.TD>
                            <span>{user.username}</span>
                            </S.TD>
                            <S.TD>
                            <span>{user.email}</span>
                            </S.TD>
                            <S.TD>
                            <span>{user.role}</span>
                            </S.TD>
                            <S.TD>
                                <S.ActionIcons >
                                    <FiEdit color={"#228558"} style={{cursor:"pointer"}} onClick={()=>handleUpdate(user)} size={25} />
                                    <AiOutlineDelete color={"red"} style={{cursor:"pointer"}} onClick={()=>handleDelete(user)} size={25} />
                                </S.ActionIcons>
                            </S.TD>
                        </S.TR>
                    }):
                    <S.TR>
                        <S.TD>No user found!</S.TD>
                    </S.TR>
                }

                </tbody>
            </S.Table>
            <div>
                 {returnModal()}
                 {updateModal()}
            </div>
            </>
    </S.Container>
  )
}

export default Users