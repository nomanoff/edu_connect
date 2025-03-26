import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto 40px 30px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #333;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const Section = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const TableWrapper = styled.div`
  margin-top: 25px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TableContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 12px;
  text-align: left;
  width: 33%;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  width: 33%;
`;

const DeleteButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #b02a37;
  }
`;

const classes = ["Frontend-001", "Frontend-002", "Frontend-003", "Frontend-004", "Frontend-005"];

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState("");
  const [homeworkTitle, setHomeworkTitle] = useState("");
  const [homeworkData, setHomeworkData] = useState([]);

  const assignHomework = () => {
    if (selectedClass && homeworkTitle) {
      setHomeworkData([...homeworkData, { className: selectedClass, homework: homeworkTitle }]);
      setHomeworkTitle("");
    }
  };

  const deleteHomework = (index) => {
    setHomeworkData(homeworkData.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Header>
        <Title>Manage Performance & Homework</Title>
        <Subtitle>Assign homework and evaluate student performance.</Subtitle>
      </Header>

      <Section>
        <Label>Select Class:</Label>
        <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">Select Class</option>
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </Select>
      </Section>

      <Section>
        <Label>Assagin Homework:</Label>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter Homework Title"
            value={homeworkTitle}
            onChange={(e) => setHomeworkTitle(e.target.value)}
          />
          <Button onClick={assignHomework}>+ Assign</Button>
        </InputGroup>
      </Section>


      <TableWrapper>
        <h2>Homework</h2>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Class Name</Th>
                <Th>Homework Content</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {homeworkData.map((entry, index) => (
                <tr key={index}>
                  <Td>{entry.className}</Td>
                  <Td>{entry.homework}</Td>
                  <Td>
                    <DeleteButton onClick={() => deleteHomework(index)}>
                      ✖️ Delete
                    </DeleteButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Container>
  );
}
