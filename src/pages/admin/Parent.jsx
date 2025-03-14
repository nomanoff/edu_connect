



import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.h2`
  color: #007bff;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 15px;
  border: 1px solid #ddd;
  margin: 0 10px;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const MessageBox = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Header>Child: Alice Johnson</Header>
      <InfoContainer>
        <InfoBox>Attendance: 95% This Month</InfoBox>
        <InfoBox>Performance: Grade A</InfoBox>
        <InfoBox>Homework Completion: ✅ 8/10 Assignments Done</InfoBox>
      </InfoContainer>
      
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>March 1</Td>
            <Td>✅ Present</Td>
          </tr>
          <tr>
            <Td>March 2</Td>
            <Td>✅ Present</Td>
          </tr>
          <tr>
            <Td>March 3</Td>
            <Td>⚠️ Tardy</Td>
          </tr>
        </tbody>
      </Table>
      
      <Table>
        <thead>
          <tr>
            <Th>Subject</Th>
            <Th>Homework Status</Th>
            <Th>Performance</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Math</Td>
            <Td>✅ Completed</Td>
            <Td>Grade A</Td>
          </tr>
          <tr>
            <Td>Science</Td>
            <Td>❌ Not Submitted</Td>
            <Td>Grade B</Td>
          </tr>
        </tbody>
      </Table>
      
      <MessageBox>
        <p><strong>Teacher:</strong> Please ensure Alice submits the next assignment.</p>
        <p><strong>Parent:</strong> Thanks for the update! I will remind her.</p>
        <InputContainer>
          <Input type="text" placeholder="Type your message..." />
          <Button>Send</Button>
        </InputContainer>
      </MessageBox>
    </Container>
  );
};

export default Dashboard;
