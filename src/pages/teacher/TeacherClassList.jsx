import { Margin } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  gap: 20px;

`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.danger ? "#dc3545" : "#007bff")};
  color: white;
  margin-top: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const ManageClasses = () => {
  const [classes, setClasses] = useState([
    { name: "Grade 10 - Math", subject: "Mathematics", students: 25 },
    { name: "Grade 9 - Science", subject: "Physics", students: 30 }
  ]);

  const [students, setStudents] = useState([
    { name: "John Doe", class: "Grade 10 - Math" },
    { name: "Jane Smith", class: "Grade 10 - Math" },
  ]);

  return (
    <Container>
      <Section>
        <Title>Manage Classes</Title>
        <Input placeholder="Class Name" />
        <Select>
          <option>Mathematics</option>
          <option>Physics</option>
        </Select>
        <Button>+ Add Class</Button>
      </Section>

      <Section>
        <Title>My Classes</Title>
        <Table>
          <thead>
            <tr>
              <Th>Class Name</Th>
              <Th>Subject</Th>
              <Th>Students</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={index}>
                <Td>{cls.name}</Td>
                <Td>{cls.subject}</Td>
                <Td>{cls.students} Students</Td>
                <Td>
                  <Button>Edit</Button>
                  <Button danger>Remove</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <Title>Assign Students</Title>
        <Select>
          <option>Select Class</option>
        </Select>
        <Input placeholder="Enter Student Email" />
        <Button>+ Assign Student</Button>
        <ul style={{marginLeft: '10px'}}>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} <Button danger>Remove</Button>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
};

export default ManageClasses;
