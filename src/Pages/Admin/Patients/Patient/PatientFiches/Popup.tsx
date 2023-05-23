import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props{
    message: string
}

const Popup = ({ message }:Props) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <Content className="popup">
          <span>{message}</span>
        </Content>
      )}
    </>
  );
};

const Content = styled.div`
  position: fixed;
  top: 1rem;
  left: -100%;
  width: 50%;
  background-color: #228558;
  color: #fff;
  padding: 20px;
  margin-right: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s forwards;
  z-index: 100000;


@keyframes slideIn {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}
`

export default Popup;
