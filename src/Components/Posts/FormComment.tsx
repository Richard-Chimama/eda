import { useMutation, useSubscription } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import API from '../../API'

interface Props{
    postId: String,
    userId: String,
    CommentSent: (text:String) => void
}

const FormComment: React.FC<Props> = ({postId, userId, CommentSent}) => {
    const [inputs, setInputs] = useState({comment:""})
    const [newComment, {loading, error, data}] = useMutation(API.Mutations.NEW_COMMENT)


    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs,[name]: value})
    }

    

    const handleComment = (e:any)=>{
        e.preventDefault()
        newComment({
            variables:{
                comment: inputs.comment,
                post: postId,
                user:userId
            },
            onCompleted:(data)=>{
                CommentSent(postId)
                setInputs({comment:""})
            }
        })
    }
  return (
    <form onSubmit={handleComment} className="col-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="comment"
                      className="form-control"
                      value={inputs.comment}
                      onChange={(event)=> handleChange(event)}
                      placeholder="Ajouter un commentaire"
                    />
                    <button type="submit" className="btn btn-primary">
                      Entrer
                    </button>
                  </div>
                </form>
  )
}

export default FormComment