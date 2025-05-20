import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #196ff9;
`;

const Table = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  padding: 30px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled(TableRow)`
  font-weight: bold;
  font-size: 18px;
  background: #f1f1f1;
  border-radius: 8px;
`;

const ChildName = styled.span`
  font-size: 18px;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 40px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ParentDashboard = () => {
  const [children, setChildren] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedChildren = JSON.parse(localStorage.getItem("addedChildren")) || [];
    setChildren(storedChildren);
  }, []);

  const goToSettings = () => {
    navigate("/parent/settings");
  };

  return (
    <Container>
      <Title>Dashboard</Title>

      {children.length > 0 ? (
        <Table>
          <TableHeader>
            <span>#</span>
            <span>Child Name</span>
            <span>ID</span>
          </TableHeader>

          {children.map((child, index) => (
            <TableRow key={index}>
              <ChildName>{index + 1}</ChildName>
              <ChildName>{child.name}</ChildName>
              <ChildName>{child.id}</ChildName>
            </TableRow>
          ))}
        </Table>
      ) : (
        <p>No children added yet.</p>
      )}

      <BackButton onClick={goToSettings}>Add More</BackButton>
    </Container>
  );
};

export default ParentDashboard;
