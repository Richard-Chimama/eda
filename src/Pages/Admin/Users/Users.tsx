import React from 'react'
import * as S from "./styled"
import api from "../../../API"
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const Users = () => {
    let result:any
    const { loading, error, data } = useQuery(api.Queries.findAllUsers);
    const id = localStorage.getItem("hospitalID")

    if(data){
         result = data.users.filter((user:any) => {
            if(user.hospital.length > 0){
                return user.hospital.some((hospital:any) => hospital.id === id)
            }
        } )
    }

   

    if(loading){
        return <div style={{textAlign: 'center', height:"100vh"}}>Loading...</div>
    }
  
    if(error){
        return <div style={{textAlign: 'center',height:"100vh"}}>Error{error.message}</div>
    }

  return (
    <S.Container>
        <p style={{color: "red", textAlign: "center"}}>This page is under development 😉   
        <Link to={".."} style={{textAlign: "center"}}>
            <button>Go back</button>
        </Link>
        </p>
            <>
            <S.Title>Utilisateurs enristrés dans cet hôpital</S.Title>
            <S.AddUserSection>
                <p>Ajouter un utilisateur</p>
                <Link to={"/enregistrer/signup/"+id}>
                    <button>Ajouter</button>
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
                {result ? 
                    result.map((user:any) =>{
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
                                <button>réviser</button>
                                <button>supprimer</button>
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