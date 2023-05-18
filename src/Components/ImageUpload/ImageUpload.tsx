import React, { useState } from 'react';
import styled from 'styled-components';
import localImage from "../../assets/user-img.png"

interface props{
    method: (e:any)=> void
}

const ImageUpload: React.FunctionComponent<props>= ({method})=> {
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
      <IMG src={imageUrl?imageUrl:localImage} alt="Selected file" />
      <input type="file" name="avatar" onChange={handleFileSelect} />
    </Container>
  );
}

const IMG = styled.img`
    height: 300px;
    width: 300px;
    
`
const Container = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem;
    border: 1px solid #228558;
    width: 300px;
    margin: 0 auto;

    @media screen and (min-width: 750px){
      width: 350px;
    }
`

export default ImageUpload;
