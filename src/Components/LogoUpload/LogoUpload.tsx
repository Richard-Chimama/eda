import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from "../../assets/logo.png"

interface props{
    method: (e:any)=> void
}

const LogoUpload: React.FunctionComponent<props>= ({method})=> {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  function handleFileSelect(event:any) {
    const file = event.target.files[0];
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    method(event)
  }

  return (
    <Container>
      <IMG src={imageUrl?imageUrl:logoImage} alt="Selected file" />
      <input type="file" name="logo" onChange={handleFileSelect} />
    </Container>
  );
}

const IMG = styled.img`
    height: 100px;
    width: 150px;
    
`
const Container = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid #228558;
    margin: 0 auto;

    @media screen and (min-width: 750px){
      width: 350px;
    }
`

export default LogoUpload;
