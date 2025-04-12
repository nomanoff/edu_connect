import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { selectAdmin } from "../../utils/redux/adminSlice";
import { useSelector } from "react-redux";


const ManageClasses = () => {
  const { classList } = useSelector(selectAdmin);
  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dayType, setDayType] = useState(0);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [openTeacherDialog, setOpenTeacherDialog] = useState(false);
  const [students, setStudents] = useState([]);

  const teachers = ["Azizbek", "Farxod", "Ali", "Bekzod"];

  const handleAddStudent = () => {
    if (className && startTime && endTime && selectedTeacher) {
      const newStudent = {
        className,
        startTime,
        endTime,
        dayType,
        selectedTeacher,
      };
      setStudents([...students, newStudent]);
      console.log("Yangi sinf ma'lumotlari:", newStudent);
      setClassName("");
      setStartTime("");
      setEndTime("");
      setSelectedTeacher("");
    }
  };

  useEffect(() => {}, [students]);

  return (
    <Container>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Welcome, Admin
      </Typography>
      <ContentWrapper>
        <FormSection>
          <Typography variant="h6">Add Class</Typography>
          <TextField
            label="Class Name"
            fullWidth
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Start Time"
            fullWidth
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            margin="normal"
          />
          <TextField
            label="End Time"
            fullWidth
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            margin="normal"
          />
          <Typography variant="subtitle1">Class Days:</Typography>
          <RadioGroup
            row
            value={dayType}
            onChange={(e) => setDayType(e.target.value === "0" ? 0 : 1)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Odd" />
            <FormControlLabel value={1} control={<Radio />} label="Even" />
          </RadioGroup>
          <Typography variant="subtitle1">
            Selected Day Type: {dayType === 0 ? "Odd" : "Even"}
          </Typography>
          <TextField
            label="Teacher"
            fullWidth
            value={selectedTeacher}
            InputProps={{ readOnly: true }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenTeacherDialog(true)}
            style={{ margin: "15px 0", padding: "8px", fontSize: "14px" }}
          >
            Choose
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddStudent}
            fullWidth
            disabled={!className || !startTime || !endTime || !selectedTeacher}
            style={{ marginTop: "10px", padding: "15px", fontSize: "16px" }}
          >
            Create
          </Button>
        </FormSection>

        <ClassListSection>
          <Typography variant="h6">Class List</Typography>
          <ClassList>
            {classList?.map((_class, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "15px",
                  background: "#e0e0e0",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <p>{_class.name}</p>
                  <p>{_class.time}</p>
                  <p>{_class.teacher}</p>
                </CardContent>
              </Card>
            ))}

            {/* Students massivini chiqaramiz */}
            {students.map((student, index) => (
              <Card
                key={`student-${index}`}
                style={{
                  marginBottom: "10px",
                  padding: "15px",
                  background: "#d1ffd6",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <p><strong>{student.className}</strong></p>
                  <p>
                    {student.startTime} - {student.endTime}
                  </p>
                  <p>{student.selectedTeacher}</p>
                  <p>Days: {student.dayType === 0 ? "Odd" : "Even"}</p>
                </CardContent>
              </Card>
            ))}
          </ClassList>
        </ClassListSection>
      </ContentWrapper>

      <Dialog
        open={openTeacherDialog}
        onClose={() => setOpenTeacherDialog(false)}
      >
        <DialogTitle>Teacher List</DialogTitle>
        <DialogContent style={{ padding: "30px", width: "500px" }}>
          {teachers.map((teacher, index) => (
            <TeacherItem
              key={index}
              onClick={() => {
                setSelectedTeacher(teacher);
                setOpenTeacherDialog(false);
              }}
            >
              <Typography>{teacher}</Typography>
              <Button
                variant="contained"
                style={{ fontSize: "14px", padding: "8px 16px" }}
              >
                Select
              </Button>
            </TeacherItem>
          ))}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

// Styled components o'zgarishsiz
const Container = styled.div`
  padding: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const FormSection = styled.div`
  width: 45%;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
`;

const ClassListSection = styled.div`
  width: 45%;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  height: 400px;
`;

const ClassList = styled.div`
  max-height: 350px;
  padding-right: 10px;
  overflow-y: auto;
`;

const TeacherItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

export default ManageClasses;
