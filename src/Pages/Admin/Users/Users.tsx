import React, { useEffect, useState } from 'react'
import * as S from "./styled"
import api from "../../../API"
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import StateMessage from '../../../Components/StateMessage'
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { BsPersonAdd } from "react-icons/bs"
import Title from '../../../Components/Title'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'

const Users = () => {
    const [results, setResults] = useState<any>([])
    const [isSync, setIsSync ] = useState<boolean>(false)
    const { loading, error, data, refetch } = useQuery(api.Queries.findAllUsers);
    const id = localStorage.getItem("hospitalID")

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
            <S.Table>
                <thead>
                    <S.TR>
                        <S.TH></S.TH>
                        <S.TH>Nom</S.TH>
                        <S.TH>E-mail</S.TH>
                        <S.TH>Rôle</S.TH>
                        <S.TH>Action</S.TH>
                    </S.TR>
                </thead>
                <tbody>
                {results ? 
                    results.map((user:any) =>{
                        return <S.TR key={user.id}>
                            <S.TD>
                            <img src={user.avatar} alt={user.username} />
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
                                    <FiEdit color={"#228558"} style={{cursor:"pointer"}} size={25} />
                                    <AiOutlineDelete color={"red"} style={{cursor:"pointer"}}  size={25} />
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
            </>
    </S.Container>
  )
}

export default Users