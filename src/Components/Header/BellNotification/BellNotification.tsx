
import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import styled from "styled-components"
import { useSubscription } from '@apollo/client';
import API from '../../../API';
import StateMessage from '../../StateMessage';

interface Props{
    count: number
}

const BellNotification: React.FC<Props> = ({ count }) => {
  const [showModal, setShowModal] = useState(false);
  const [totalNotification, setTotalNotification] = useState(0);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const hospitalId = localStorage.getItem('hospitalID');


/*   const { data, loading } = useSubscription(API.Subscription.HOSPITAL_NOTIFICATION, {variables:{
                          hospitalId: hospitalId}}) */

/*   useEffect(()=>{
   
      console.log(data)
    
  }) */

  //if(loading) return <StateMessage loading />
  //if(error) return<StateMessage error={error.message}><h3>{error.message}</h3></StateMessage>

  return (
    <Container>
        <div className="notification" onClick={handleModalOpen}>
        <FaBell className="bell-icon" />
        {count > 0 && <span className="notification-count">{count}</span>}
        </div>
        <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the list of notifications here */}
          {/* Replace this with your actual notification list component */}
          <p>Notification 1</p>
          <p>Notification 2</p>
          <p>Notification 3</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
    </Container>
  )
};

const Container = styled.div`
.notification {
    position: relative;
    display: inline-block;
  }
  
  .bell-icon {
    font-size: 24px;
  }
  
  .notification-count {
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-size: 12px;
    font-weight: bold;
    background-color: red;
    color: white;
    border-radius: 50%;
  }

`


export default BellNotification;
