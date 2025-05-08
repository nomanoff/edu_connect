import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 14px;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  background: #fff;
  padding: 14px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 14px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
`;

const Form = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
  min-width: 200px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;




const Button = styled.button`
  background: ${(props) => (props.danger ? "#d9534f" : "#007bff")};
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: ${(props) => (props.danger ? "#c9302c" : "#0056b3")};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 15px;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const StudentList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;

const StudentItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 10px;
`;

const ManageStudent = () => {
  return (
    <Container>

      {/* Add New Student */}
      <Section>
        <Title>Add New Student</Title>
        <Form>
          <Input type="text" placeholder="Student Name" />
          <Input type="email" placeholder="Student Email" />
          <Select>
            <option>Select Class</option>
            <option>Grade 10 - Math</option>
            <option>Grade 9 - Science</option>
          </Select>
          <Button>Add Student</Button>
        </Form>
      </Section>

      {/* My Students */}
      <Section>
        <Title>My Students</Title>
        <Table>
          <thead>
            <tr>
              <Th>Student Name</Th>
              <Th>Email</Th>
              <Th>Class</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>John Doe</Td>
              <Td>john@example.com</Td>
              <Td>Grade 10 - Math</Td>
              <Td>
                <Button>Edit</Button> <Button danger>Remove</Button>
              </Td>
            </tr>
            <tr>
              <Td>Jane Smith</Td>
              <Td>jane@example.com</Td>
              <Td>Grade 9 - Science</Td>
              <Td>
                <Button>Edit</Button> <Button danger>Remove</Button>
              </Td>
            </tr>
          </tbody>
        </Table>
      </Section>

      {/* Assign Students to Class */}
      <Section>
        <Title>Assign Students to Class</Title>
        <Form>
          <Select>
            <option>Select Class</option>
            <option>Grade 10 - Math</option>
          </Select>
          <Input placeholder="Enter Student Email" />
          <Button>Assign Student</Button>
        </Form>

        <Title>Students in Grade 10 - Math</Title>
        <StudentList>
          <StudentItem>
            John Doe <Button danger>Remove</Button>
          </StudentItem>
          <StudentItem>
            Jane Smith <Button danger>Remove</Button>
          </StudentItem>
        </StudentList>
      </Section>
    </Container>
  );
};

export default ManageStudent;











