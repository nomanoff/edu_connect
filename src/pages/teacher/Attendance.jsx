import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: white;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const SendMessageForm = () => {
  const [message, setMessage] = useState("");


  return (
    <Container>
      <Title>Send Message to Parents</Title>
      <p>Select a class and a parent to send a message.</p>

      <Label>Select Class:</Label>
      <Select>
        <option>Grade 10 - Math</option>
        <option>Grade 11 - Science</option>
      </Select>

      <Label>Select Parent:</Label>
      <Select>
        <option>Alice Johnson's Parent</option>
        <option>John Doe's Parent</option>
      </Select>

      <Label>Write Message:</Label>
      <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button
        onClick={() => {
          setMessage("");
        }}
      >
        Send Message
      </Button>
    </Container>
  );
};

export default SendMessageForm;
