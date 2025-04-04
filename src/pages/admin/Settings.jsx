import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectAuth } from "../../utils/redux/authSlice";

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
  const authSliceObj = useSelector(selectAuth);

  console.log("adminId", authSliceObj);
  return (
    <Container>
      <Title>Settings</Title>
      <Card>
        <Label>Academy Name</Label>
        <Input type="text" placeholder="Enter Academy Name" />
        <Label>Academy Address</Label>
        <Input type="text" placeholder="Academy Address" />
        <Button>Save Changes</Button>
      </Card>
    </Container>
  );
};

export default Settings;
