import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 20%;
  background-color: #0082f5;
  color: white;
  padding: 20px;
`;

const SidebarTitle = styled.h1`
  font-size: 1.8rem;N
  font-weight: bold;
  
`;

const SidebarMenu = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0066cc;
  }
`;

const Content = styled.div`
  width: 80%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30%;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  background: white;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const LargeButton = styled(Button)`
  width: 100%;
  padding: 12px;
  background: #0082f5;
  color: white;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    background: #0066cc;
  }
`;

const Section = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #0082f5;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const ManageStudets = () => {
  return (
    <Container>
      <Content>
        <Header>
          <SearchInput type="text" placeholder="Search teachers..." />
          <div>
            <Button>🔔 Notifications</Button>
            <Button>👤 Admin</Button>
          </div>
        </Header>

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
          <LargeButton>Add Teacher</LargeButton>
        </Section>
      </Content>
    </Container>
  );
};

export default ManageStudets;
