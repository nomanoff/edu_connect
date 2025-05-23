import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import {
  getStudentListAsync,
  postStudentAsync,
  deleteStudentAsync,
} from "../../utils/redux/studentSlice";
import { getClassListAsync } from "../../utils/redux/classSlice";

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
  padding-left: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  height: 700px;
  overflow-y: auto;
  background-color: white;

  margin-top: 20px;
`;

const Section = styled.div`
  width: 45%;
  padding: 30px;
  border-radius: 20px;
  height: 100%;
  background-color: #1c94f6;

  color: white;
  box-shadow: 0 8px 24px rgba(47, 47, 47, 0.2);
  height: 350px;
`;

const LeftSection = styled(Section)`
  flex: 1;
  height: 500px;
 

`;

const RightSection = styled(Section)`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  height: 500px;

`;
const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* max-height: 600px; */
  height: 100%;
  overflow-y: auto;
  padding-right: 8px;

`;

const StudentCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  justify-content: space-between;
  padding: 16px 30px;
  border-left: 6px solid #1976d2;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
  margin-top: 5px;
  overflow: hidden;



`;

const SubmitButtonWrapper = styled.div`
  height: ${({ isActive }) => (isActive ? '40px' : '0')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  justify-content: flex-end;

  button {
  background-color: #1976d2;
  color: white;
  border: none;
  width: 100%;
  padding: 10px 0px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-weight: 700;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #1565c0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

`;

const StudentInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

span {
  font-size: 14px;
  color: #888;
}
`;



// const Button = styled.button `

// `;

const ClassOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 16px;

  &:hover {
    background: #e0e0e0;
    transform: scale(1.03);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 10px;
`;

const ManageStudent = () => {
  const dispatch = useDispatch();
  const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [open, setOpen] = useState(false);


  const handleCardClick = (id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

  const [activeCardId, setActiveCardId] = useState(null);


  const chooseButtonRef = useRef();

  useEffect(() => {
    dispatch(getClassListAsync()).unwrap().then(setClassList);

    refreshStudentList();
  }, [dispatch]);

  const refreshStudentList = () => {
    dispatch(getStudentListAsync()).unwrap().then(setStudentList);
  };

  const handleAddStudent = () => {
    if (studentName && selectedClass) {
      const newStudent = {
        name: studentName,
        classIds: [selectedClassId],
      };

      dispatch(postStudentAsync(newStudent))
        .unwrap()
        .then(() => {
          refreshStudentList();
          setStudentName("");
          setSelectedClass(null);
        })
        .catch((err) => {
          alert("Error while adding student: " + err);
        });
    }
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudentAsync(id))
      .unwrap()
      .then(() => {
        refreshStudentList();
      })
      .catch((err) => {
        alert("Error while deleting student: " + err);
      });
  };





  return (
    <Container>
      <ContentWrapper>
        {/* Left Section: Add Student */}
        <LeftSection>
          <Typography variant="h6">Add Student</Typography>


          <input
            label="Student Name"
            variant="outlined"
            fullWidth
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            margin="normal"
            placeholder="Student Name..."
            style={{
              border: "none",
              borderRadius: "30px",
              width: "100%",
              height: "40px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
              marginTop: "40px",
              paddingLeft: "15px",
              fontSize: "16px",
            }}
          />




          {/* new not work code */}

          <FlexContainer>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(true)}
              ref={chooseButtonRef}
              style={{
                margin: "15px 0",
                fontSize: "14px",
                backgroundColor: "white",
                color: "green",
                borderRadius: "20px",
              }}
            >
              Choose
            </Button>

            <input
              label="Choose Class"
              variant="outlined"
              fullWidth
              value={selectedClass ? selectedClass.name : ""}
              InputProps={{ readOnly: true }}
              margin="normal"
              type="text"
              readOnly
              style={{
                border: "0px solid white",
                borderRadius: "30px",
                width: "100%",
                height: "40px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
                marginTop: "10px",
                paddingLeft: "15px",
              }}
            />
          </FlexContainer>



          <textarea
            placeholder="About Student..."
            style={{
              border: "none",
              borderRadius: "5px",
              width: "100%",
              height: "100px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
              marginTop: "40px",
              padding: "15px",
              fontSize: "12px",
              resize: "none"
            }}
          />



          <Button
            variant="contained"
            color="primary"
            onClick={handleAddStudent}
            fullWidth
            disabled={!studentName || !selectedClass}
            style={{
              padding: "15px",
              fontSize: "17px",
              backgroundColor: "white",
              color: "black",
              height: "40px",
              marginTop: "40px",
              cursor: "pointer",
            }}
          >
            Create
          </Button>
        </LeftSection>

        {/* Right Section: Student List */}
        <RightSection>
          <Typography variant="h6">Student List</Typography>
          <StudentList>
            {studentList.map((student) => (
              <StudentCard key={student.id} onClick={() => handleCardClick(student.id)}>
                <StudentInfo>
                  <div>
                    <h3>{student.name}</h3>
                    <span>{student.className}</span>
                  </div>
                  <IconButton
                    onClick={() => handleDeleteStudent(student.id)}
                    color="error"
                    aria-label="delete student"
                  >
                    <DeleteIcon />
                  </IconButton>
                </StudentInfo>

                <SubmitButtonWrapper className="submit-wrapper" isActive={activeCardId === student.id}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleSubmit(student.id);
                      alert("copy token");
                    }}
                  >
                    Copy Token
                  </button>

                </SubmitButtonWrapper>
              </StudentCard>
            ))}
          </StudentList>

        </RightSection>
      </ContentWrapper>





      {/* Dialog: Choose Class */}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setTimeout(() => chooseButtonRef.current?.focus(), 0); // ✅ Focus back to the button
        }}
      >
        <DialogTitle>Class List</DialogTitle>
        <DialogContent>
          {classList.map((teacher) => (
            <ClassOption
              key={teacher.id}
              onClick={() => {
                setSelectedClass(teacher);
                setSelectedClassId(teacher.id);
                setOpen(false);
              }}
            >
              <Typography>
                <strong>Class:</strong> {teacher.name}
              </Typography>
              <Button variant="contained">Select</Button>
            </ClassOption>
          ))}
        </DialogContent>
      </Dialog>




    </Container>
  );
};

export default ManageStudent;
