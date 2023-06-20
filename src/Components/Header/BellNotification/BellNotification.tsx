
import React from 'react';
import { FaBell } from 'react-icons/fa';
import styled from "styled-components"

interface Props{
    count: number
}

const BellNotification: React.FC<Props> = ({ count }) => {
  return (
    <Container>
        <div className="notification">
        <FaBell className="bell-icon" />
        {count > 0 && <span className="notification-count">{count}</span>}
        </div>
    </Container>
  );
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
