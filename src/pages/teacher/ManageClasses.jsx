import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
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
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
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
  margin-top: 5px;
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

const RemoveIcon = styled.span`
  color: red;
  font-weight: bold;
`;

const ManageClasses = () => {
  return (
    <Container>
      <Section>
        <Title>Create New Class</Title>
        <Form>
          <Input type="text" placeholder="Class Name" />
          <Select>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Biology</option>
          </Select>
          <Button>+ Add Class</Button>
        </Form>
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
            <tr>
              <Td>Grade 10 - Math</Td>
              <Td>Mathematics</Td>
              <Td>25 Students</Td>
              <Td>
                <Button>Edit</Button>
                <Button danger>
                  <RemoveIcon>❌</RemoveIcon> Remove
                </Button>
              </Td>
            </tr>
            <tr>
              <Td>Grade 9 - Science</Td>
              <Td>Physics</Td>
              <Td>30 Students</Td>
              <Td>
                <Button>Edit</Button>
                <Button danger>
                  <RemoveIcon>❌</RemoveIcon> Remove
                </Button>
              </Td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section>
        <Title>Assign Students</Title>
        <Form>
          <Select>
            <option>Select Class</option>
          </Select>
          <Input type="email" placeholder="Enter Student Email" />
          <Button>+ Assign Student</Button>
        </Form>
        <Title>Students in Grade 10 - Math</Title>
        <ul style={{marginLeft: '20px'}}>
          <li>
            John Doe{" "}
            <Button danger>
              <RemoveIcon>❌</RemoveIcon> Remove
            </Button>
          </li>
          <li>
            Jane Smith{" "}
            <Button danger>
              <RemoveIcon>❌</RemoveIcon> Remove
            </Button>
          </li>
        </ul>
      </Section>
    </Container>
  );
};

export default ManageClasses;
