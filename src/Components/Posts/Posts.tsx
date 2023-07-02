
import { useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap'
import API from '../../API';
import userImage from "../../assets/user-img.png"
import StateMessage from '../StateMessage';
import FormComment from './FormComment';
import FormNewPost from './FormNewPost';

const Posts = () => {
  let [results, setResults] = useState<any>([])
  const [post_id, set_post_id] = useState<any>("")
  const hospitalId = localStorage.getItem('hospitalID')
  const {loading, error, data, refetch } = useQuery(API.Queries.findAllHospitalPost, {variables:{
    hospitalId: hospitalId
  }})

  const { data: subscriptionData} = useSubscription(API.Subscription.NEW_POST_BY_HOSPITAL, { variables: {hospitalId:hospitalId}})
  const {data: commentData, error: commentError} = useSubscription(API.Subscription.NEW_COMMENT,{variables:{postId:post_id}})



  useEffect(()=>{
    if(!loading && !error && data){
      setResults(data.postsByHospital)
    }
  },[loading, error, data])

  useEffect(() => {
    if (subscriptionData && subscriptionData.postsByHospital) {
      setResults((prevResults:any) => [...prevResults, subscriptionData.postsByHospital]);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (commentData && commentData.newComment) {       
        updateObjectById(commentData.newComment.post.id, commentData.newComment)
    }
    if(commentError){
      console.log("comment Error: ", commentError)
    }
  }, [commentData]);


  const updateObjectById = (id:any, updatedObject:any) => {
    setResults((prevArray:any) => {
      return prevArray.map((obj:any) => {
        if (obj.id === id) {
          if (Object.isFrozen(obj.comments)) {
            const updatedComments = obj.comments.slice(); // Create a shallow copy of the frozen comments array
            updatedComments.push(updatedObject); // Add the updated object to the copied array
            return { ...obj, comments: updatedComments }; // Return a new object with the updated comments array
          }
          obj.comments.splice(obj.comments.length - 1, 0, updatedObject); // Modify the comments array directly
        }
        return obj; // Return the original or updated object
      });
    });
  };

  return (
    <Container style={styles.container} fluid>
      <div className='card p-3 mt-2 mb-3'>
          <FormNewPost refetch={refetch} />
      </div>

      {loading && <StateMessage loading />}
      {error && <StateMessage error={error.message}><h3>{error.message}</h3></StateMessage>}

      {(results) && (
        [...results].reverse().map((item:any)=>{
            return <div key={item.id} className="card mb-3">
            <div className="card-body">
            <div className="d-flex align-items-center mb-3">
                <img
                  src={item.author.avatar? item.author.avatar: userImage}
                  alt="Author"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <h5 className="card-title">{item.author.username}</h5>
              </div>
              {item.image && (
                <img src={item.image} alt="Post" className="img-fluid mb-3" />
              )}
              {item.content && <p className="card-text">{item.content}</p>}
              <div className="card-footer">
                    <div className='d-flex'>
                      <FormComment userId={item.author.id} postId={item.id} CommentSent={set_post_id} />
                  </div>

              <Accordion >
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.comments.length}  Commentaires </Accordion.Header>
                  <Accordion.Body>
                {item.comments.map((comment:any) => (
                  <p className="card-body" key={comment.id}>{comment.comment}</p>
                  ))}
                  </Accordion.Body>
                </Accordion.Item>
                  
                  </Accordion>

              </div>
            </div>
          </div>
        })
       
      )
      }
      
    </Container>
  );
}

const styles = {
    container:{
        minHeight: "100vh"
    },
    commentContent:{
        border: "1px solid gray",
        marginLeft: "1rem",
        marginRight: "1rem",
        marginTop: "0.5rem"
    }
}

export default Posts