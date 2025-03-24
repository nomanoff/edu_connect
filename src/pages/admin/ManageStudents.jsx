import React, { useState } from "react";
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);

  const classes = ["Frontend 001", "Frontend 002", "Frontend 003","Frontend 004"];

  const handleAddStudent = () => {
    if (studentName && selectedClass) {
      setStudents([...students, { name: studentName, class: selectedClass }]);
      setStudentName("");
      setSelectedClass("");
    }
  };

  return (
    <div>
      <Header>Manage Students</Header>
      <Container>
        <LeftSection>
          <Typography variant="h6">Add class</Typography>
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
          <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
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

        <RightSection>
          <Typography variant="h6">Student List</Typography>
          <StudentList>
            {students.map((student, index) => (
              <ClassCard key={index}>
                <CardContent>
                  <Typography>{student.name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography>{student.class}</Typography>
                </CardContent>
              </ClassCard>
            ))}
          </StudentList>
        </RightSection>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Class List</DialogTitle>
          <DialogContent>
            {classes.map((className, index) => (
              <ClassOption key={index} onClick={() => { setSelectedClass(className); setOpen(false); }}>
                <Typography>{className}</Typography>
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
