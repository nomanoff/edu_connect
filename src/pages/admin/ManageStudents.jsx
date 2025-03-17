import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  max-width: 120px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: -15px;
`;

const Subtitle = styled.p`
  margin-bottom: -12px;
  color: #666;
  font-size: 18px;
`;

const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: -16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  font-size: 18px;
`;

const Th = styled.th`
  background: #007bff;
  color: #fff;
  padding: 12px;
  text-align: left;
  font-size: 18px;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Form = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const Input = styled.input`
  padding: 8px;
  width: 200px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export default function ManageStudents() {
  const [students, setStudents] = useState([
    { name: "John Doe", email: "john@example.com", class: "Grade 10 - Math" },
    { name: "Jane Smith", email: "jane@example.com", class: "Grade 9 - Science" },
  ]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", class: "" });
  const [assignClass, setAssignClass] = useState("");
  const [assignEmail, setAssignEmail] = useState("");

  const addStudent = () => {
    if (newStudent.name && newStudent.email && newStudent.class) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", email: "", class: "" });
    }
  };

  return (
    <Container>
      <Title>Manage Students</Title>
      <Subtitle>Assign and manage students in your classes.</Subtitle>
      <Card>
        <h2 style={{ fontWeight: "bold", marginBottom: "8px" }}>Add New Student</h2>
        <Form>
          <Input
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <Input
            placeholder="Student Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <Select
            value={newStudent.class}
            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
          >
            <option value="">Select Class</option>
            <option value="Grade 10 - Math">Grade 10 - Math</option>
            <option value="Grade 9 - Science">Grade 9 - Science</option>
      <Content>

        <h2>Manage Student</h2>
        <p>View, add, and manage student.</p>

        <Section>
          <h3>Student List</h3>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Subject</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>John Doe</Td>
                <Td>john@example.com</Td>
                <Td>Mathematics</Td>
                <Td>
                  <Button>Edit</Button>
                  <Button>Remove</Button>
                </Td>
              </tr>
              <tr>
                <Td>Sarah Smith</Td>
                <Td>sarah@example.com</Td>
                <Td>Science</Td>
                <Td>
                  <Button>Edit</Button>
                  <Button>Remove</Button>
                </Td>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <h3>Add New Teacher</h3>
          <Input type="text" placeholder="Enter teacher's name" />
          <Input type="email" placeholder="Enter teacher's email" />
          <Select>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>History</option>
          </Select>
          <Button onClick={addStudent}>+ Add Student</Button>
        </Form>
      </Card>
      <Card>
        <h2 style={{ fontWeight: "bold", marginBottom: "8px" }}>My Students</h2>
        <Table>
          <thead>
            <tr>
              <Th>Student Name</Th>
              <Th>Email</Th>
              <Th>Class</Th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <Td>{student.name}</Td>
                <Td>{student.email}</Td>
                <Td>{student.class}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <Card>
        <h2 style={{ fontWeight: "bold", marginBottom: "8px" }}>Assign Students to Class</h2>
        <Form>
          <Select value={assignClass} onChange={(e) => setAssignClass(e.target.value)}>
            <option value="">Select Class</option>
            <option value="Grade 10 - Math">Grade 10 - Math</option>
            <option value="Grade 9 - Science">Grade 9 - Science</option>
          </Select>
          <Input
            placeholder="Enter Student Email"
            value={assignEmail}
            onChange={(e) => setAssignEmail(e.target.value)}
          />
          <Button>+ Assign Student</Button>
        </Form>
      </Card>
    </Container>
  );
}