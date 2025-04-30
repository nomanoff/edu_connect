import React, { useState, useEffect } from "react";
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
  gap: 20px;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
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
  max-height: 700px;
  overflow-y: auto;
`;

const Section = styled.div`
  border: 2px solid #e0e0e0;
  padding: 25px;
  width: 100%;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
`;

const LeftSection = styled(Section)`
  flex: 1;
`;

const RightSection = styled(Section)`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: hidden;
`;

const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-top: 10px;
`;

const StudentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-left: 6px solid #1976d2;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

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

const ManageStudent = () => {
  const dispatch = useDispatch();
  const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getClassListAsync())
      .unwrap()
      .then(setClassList);

    refreshStudentList();
  }, [dispatch]);

  const refreshStudentList = () => {
    dispatch(getStudentListAsync())
      .unwrap()
      .then(setStudentList);
  };

  const handleAddStudent = () => {
    if (studentName && selectedClass) {
      const newStudent = {
        name: studentName,
        className: selectedClass.name,
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
      <Header>Manage Students</Header>
      <ContentWrapper>
        {/* Left Section: Add Student */}
        <LeftSection>
          <Typography variant="h6">Add Student</Typography>
          <TextField
            label="Student Name"
            variant="outlined"
            fullWidth
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Choose Class"
            variant="outlined"
            fullWidth
            value={selectedClass ? selectedClass.name : ""}
            InputProps={{ readOnly: true }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            Choose
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddStudent}
            fullWidth
            disabled={!studentName || !selectedClass}
            style={{ marginTop: "10px" }}
          >
            Create
          </Button>
        </LeftSection>

        {/* Right Section: Student List */}
        <RightSection>
          <Typography variant="h6">Student List</Typography>
          <StudentList>
            {studentList.map((student) => (
              <StudentCard key={student.id}>
                <StudentInfo>
                  <h3>{student.name}</h3>
                  <span>{student.className}</span>
                </StudentInfo>
                <IconButton
                  onClick={() => handleDeleteStudent(student.id)}
                  color="error"
                  aria-label="delete student"
                >
                  <DeleteIcon />
                </IconButton>
              </StudentCard>
            ))}
          </StudentList>
        </RightSection>
      </ContentWrapper>

      {/* Dialog: Choose Class */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Class List</DialogTitle>
        <DialogContent>
          {classList.map((teacher) => (
            <ClassOption
              key={teacher.id}
              onClick={() => {
                setSelectedClass(teacher);
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
