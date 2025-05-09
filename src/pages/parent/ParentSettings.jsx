// ParentSettings.jsx
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postParentAsync } from "../../utils/redux/parentSlice";

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 68px;
  margin-bottom: 20px;
  padding-left: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #196ff9;
  text-transform: uppercase;
  margin: 0;
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: -8px;
  color: #000;
  display: block;
  text-align: center;
  margin-left: -35%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px;
  width: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  color: #333;
  background-color: #fffcfc;
  text-align: center;
  outline: none;

  &::placeholder {
    color: #555555;
  }

  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #0390f4;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  text-align: center;

  &:hover {
    background-color: #b0b0b0;
  }
`;

const ResultContainer = styled.div`
  margin-top: 70px;
  padding: 20px;
  background: #ffffff;
  border: 2px solid #ccc;
  border-radius: 8px;
  width: 75%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
`;

const ChildCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  width: 80%;
  margin-top: 10px;
  border: 2px solid #ccc;
`;

const DashboardButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #d87f42;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 50%;

  &:hover {
    background-color: #c96c2b;
  }
`;

export const ParentSettings = () => {
  const [childId, setChildId] = useState("");
  const [children, setChildren] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFindChild = async () => {
    if (!childId) {
      alert("Please enter a child ID!");
      return;
    }

    const parentData = {
      name: "Parent Name", // Replace with actual parent name if available
      email: "parent@example.com", // Replace with actual parent email if available
      children: [
        {
          studentId: childId,
          name: "Child Name" // Replace with actual child name if available
        }
      ]
    };

    try {
      const response = await dispatch(postParentAsync(parentData)).unwrap();
      setChildren((prevChildren) => [...prevChildren, response]);
      setChildId("");
    } catch (error) {
      console.error("Failed to add child:", error);
      alert("Failed to add child. Please try again.");
    }
  };

  const handleGoToDashboard = () => {
    navigate("/parent/dashboard");
  };

  return (
    <>
      <TitleContainer>
        <Title>Welcome, Parent!</Title>
      </TitleContainer>

      <SubtitleContainer>
        <Subtitle>Settings</Subtitle>
      </SubtitleContainer>

      <InputContainer>
        <Label>Enter child id</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex: ad124d"
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
          />
          <Button onClick={handleFindChild}>Find</Button>
        </InputWrapper>
      </InputContainer>

      {children.length > 0 && (
        <ResultContainer>
          {children.map((child, index) => (
            <ChildCard key={index}>
              <span>{child.children[0].name}</span>
              <span>{child.children[0].studentId}</span>
            </ChildCard>
          ))}
          <DashboardButton onClick={handleGoToDashboard}>
            Go to Dashboard
          </DashboardButton>
        </ResultContainer>
      )}
    </>
  );
};

export default ParentSettings;
