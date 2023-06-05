import React, { useState } from 'react';
import styled from 'styled-components';
import localImage from "../../assets/user-img.png"
import Button from '../Button';

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

  const handleUpload = (e:any)=>{
    e.preventDefault()
    document.getElementById("upload-image")?.click()
  }

  return (
    <Container>
      <IMG src={imageUrl ? imageUrl : localImage} alt="Selected file" />
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="upload-image"
        name="avatar"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      <Upload onClick={handleUpload} >Upload</Upload>
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

const Upload = styled.button`
  width: 60%;
  height: 30px;
  background-color: #2cb7ea;
  border: none;
  color: #fff;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  padding: 5px;
  cursor: pointer;
`

export default ImageUpload;
