import { useMutation } from '@apollo/client'
import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import API from '../../API'

const FormNewPost = ({refetch}:{refetch:()=>void}) => {
    const userInfo = localStorage.getItem('user')
    const user = userInfo !== null ? JSON.parse(userInfo): null
    const hospitalId = localStorage.getItem('hospitalID')
    const [inputs, setInputs] = useState<any>({content:""})
    const [newPost,{ loading , error, data}] = useMutation(API.Mutations.NEW_POST)


    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]:value})
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        if(inputs.content !== "" && hospitalId !== null){
            newPost({
                variables:{
                    content: inputs?.content,
                    author: user.id,
                    hospital: hospitalId
                },
                onCompleted:(data)=>{
                    setInputs({content:""})
                    refetch()
                }
            }
            )
        } 
        setInputs({content:""})
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="addComment">
        <Form.Label className='font-weight-bold display-6'>Nouveau poste</Form.Label>
        <Form.Control name="content" required value={inputs?.content} onChange={handleChange} as="textarea" rows={3} placeholder="Écrire un message" />
        <Form.Text className="text-muted">
            Qu'y a-t-il dans votre esprit?
        </Form.Text>
        
        </Form.Group>
        <button  className="btn btn-primary me-3 col-3" style={{height:"38px"}}>
            Entrer
            </button>
    </Form>
  )
}

export default FormNewPost