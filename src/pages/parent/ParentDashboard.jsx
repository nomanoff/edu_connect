import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  text-align: center;
  padding-top: 80px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const ParentDashboard = () => {
  const navigate = useNavigate();

  const goToSettings = () => {
    // Bu yerda kerakli parent ID ni dinamik ravishda o‘tkazing
    navigate("/parent/settings/123"); // Masalan: 123 ni haqiqiy ID bilan almashtiring
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      <Button onClick={goToSettings}>Go to Settings</Button>
    </Container>
  );
};

export default ParentDashboard;
