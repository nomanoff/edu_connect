import React from "react";
import { useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  font-family: Arial, sans-serif;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Settings = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Container>
      <Title>Settings</Title>
      <Card>
        <Label>Academy Name</Label>
        <Input 
          type="text" 
          name="input1"
          placeholder="Enter Academy Name"  
          value={formData.input1}
          onChange={handleChange} 
        />
        <Label>Academy Address</Label>
        <Input 
          type="text" 
          name="input2"
          placeholder="Academy Address"  
          value={formData.input2}
          onChange={handleChange} 
        />
        <Button onClick={handleClick}>Save Changes</Button>
      </Card>
    </Container>
  );
};

export default Settings;
