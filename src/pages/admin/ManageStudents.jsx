import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import styled from "styled-components";
import {
  getStudentListAsync,
  postStudentAsync,
} from "../../utils/redux/studentSlice";
import { getTeacherListAsync } from "../../utils/redux/teacherSlice";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
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
`;

const Section = styled.div`
  border: 2px solid #ccc;
  padding: 25px;
  width: 450px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ClassCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #e0e0e0;
  border-radius: 8px;
`;

const ClassOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e0e0e0;
  padding: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 18px;
  width: 400px;

  &:hover {
    background: #d6d6d6;
    transform: scale(1.05);
  }

  button {
    margin-left: 50px;
  }
`;

const LeftSection = styled(Section)`
  flex: 1;
`;

const RightSection = styled(Section)`
  flex: 1;
`;

const ManageStudent = () => {
  const dispatch = useDispatch();
  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getTeacherListAsync())
      .unwrap()
      .then((data) => {
        setTeacherList(data);
      });

    dispatch(getStudentListAsync())
      .unwrap()
      .then((data) => {
        setStudentList(data);
      });
  }, [dispatch]);

  const handleAddStudent = () => {
    if (studentName && selectedClass) {
      const newStudent = {
        name: studentName,
        className: selectedClass,
      };

      dispatch(postStudentAsync(newStudent))
        .unwrap()
        .then(() => {
          dispatch(getStudentListAsync())
            .unwrap()
            .then((data) => {
              setStudentList(data);
              setStudentName("");
              setSelectedClass("");
            });
        })
        .catch((err) => {
          alert("Error while adding student: " + err);
        });
    }
  };

  return (
    <div>
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
              value={selectedClass}
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
              {studentList.map((student, index) => (
                <ClassCard key={index}>
                  <CardContent>
                    <Typography>{student.name}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>{student.className}</Typography>
                  </CardContent>
                </ClassCard>
              ))}
            </StudentList>
          </RightSection>
        </ContentWrapper>

        {/* Dialog: Choose Class from Teachers */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Class List</DialogTitle>
          <DialogContent>
            {teacherList.map((teacher) => (
              <ClassOption
                key={teacher.id}
                onClick={() => {
                  setSelectedClass(teacher.subject);
                  setOpen(false);
                }}
              >
                <div>
                  <Typography><strong>Subject:</strong> {teacher.subject}</Typography>
                  <Typography><strong>Teacher:</strong> {teacher.name}</Typography>
                </div>
                <Button variant="contained">Select</Button>
              </ClassOption>
            ))}
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default ManageStudent;
