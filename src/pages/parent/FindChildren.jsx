import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import styled from "styled-components";

import {
  getStudentByTokenAsync,
  selectStudent,
} from "../../utils/redux/studentSlice";
import { postParentAsync, selectParent, setSelectedStudentId } from "../../utils/redux/parentSlice";

// Styled Components
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 75px;
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
  margin-top: 30px;
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

const AddButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "added",
})`
  padding: 12px 20px;
  background-color: ${({ added }) => (added ? "#2ecc71" : "#27ae60")};
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: ${({ added }) => (added ? "default" : "pointer")};
  transition: 0.3s;

  &:hover {
    background-color: ${({ added }) => (added ? "#2ecc71" : "#1e8449")};
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #0390f4;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  text-align: center;

  &:hover {
    background-color: #196ff9;
  }
`;

const ResultContainer = styled.div`
  margin-top: 50px;
  padding: 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
`;

const StudentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  padding: 20px 30px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const StudentName = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
`;

const DashboardButton = styled.button`
  margin-top: 30px;
  padding: 15px 25px;
  background: linear-gradient(to right, #ff9966, #ff5e62);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background: linear-gradient(to right, #ff5e62, #ff9966);
    transform: translateY(-2px);
  }
`;

const DashboardIcon = styled.span`
  font-size: 20px;
`;

export const FindChildren = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { studentDetail } = useSelector(selectStudent);
  const { parentList } = useSelector(selectParent);

  const [selectedStudentToken, setSelectedStudentToken] = useState("");
  const [added, setAdded] = useState(false);

  const handleFindChild = () => {
    if (selectedStudentToken.trim() !== "") {
      dispatch(getStudentByTokenAsync(selectedStudentToken));
      setAdded(false);
    }
  };

  const handleGoToDashboard = () => {
    navigate("/parent");
  };

  const handleAdd = () => {
    setAdded(true);

    if (studentDetail) {
      dispatch(postParentAsync(studentDetail.id))
        .unwrap()
        .then(() => {
          setAdded(true);
          dispatch(setSelectedStudentId(studentDetail.id));
        })
        .catch((error) => alert(error));
    }
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
        <Label>Enter child ID</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex: ad124d"
            value={selectedStudentToken}
            onChange={(e) => setSelectedStudentToken(e.target.value)}
          />
          <Button onClick={handleFindChild}>Find</Button>
        </InputWrapper>
      </InputContainer>

      {studentDetail?.name && (
        <ResultContainer>
          <StudentRow>
            <StudentName>{studentDetail.name}</StudentName>
            <AddButton onClick={handleAdd} added={added}>
              {added ? "✔ Added" : "Add"}
            </AddButton>
          </StudentRow>

          <DashboardButton onClick={handleGoToDashboard}>
            Go to Dashboard
          </DashboardButton>
        </ResultContainer>
      )}
    </>
  );
};

export default FindChildren;
