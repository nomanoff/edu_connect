import React, { useState } from "react";
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

const ManageClasses = () => {
  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dayType, setDayType] = useState("Odd");
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
      const studentWithPrototype = Object.getPrototypeOf(newStudent);
      console.log("Yangi sinf ma'lumotlari:\n", JSON.stringify(newStudent, null, 2));
      console.log("Prototip:", studentWithPrototype);

      setClassName("");
      setStartTime("");
      setEndTime("");
      setSelectedTeacher("");
    }
  };

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
          <RadioGroup row value={dayType} onChange={(e) => setDayType(e.target.value)}>
            <FormControlLabel value="Odd" control={<Radio />} label="Odd" />
            <FormControlLabel value="Even" control={<Radio />} label="Even" />
          </RadioGroup>
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
            {students.map((student, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "20px",
                  background: "#e0e0e0",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  {Object.entries(student).map(([key, value]) => (
                    <Typography key={key}>
                      <b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b> {value}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            ))}
          </ClassList>
        </ClassListSection>
      </ContentWrapper>

      <Dialog open={openTeacherDialog} onClose={() => setOpenTeacherDialog(false)}>
        <DialogTitle>Teacher List</DialogTitle>
        <DialogContent style={{ padding: "30px", width: "500px" }}>
          {teachers.map((teacher, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                cursor: "pointer",
                background: "#e0e0e0",
                marginBottom: "10px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
              onClick={() => {
                setSelectedTeacher(teacher);
                setOpenTeacherDialog(false);
              }}
            >
              <Typography>{teacher}</Typography>
              <Button variant="contained" style={{ fontSize: "14px", padding: "8px 16px" }}>
                Select
              </Button>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </Container>
  );
};


const Container = styled.div`
  padding: 40px;
  position: relative;
  top: -20px;
  height: 100vh; 
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
`;

const FormSection = styled.div`
  width: 45%;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  position: relative;
  top: 0;
  box-sizing: border-box;
  height: auto; 
`;

const ClassListSection = styled.div`
  width: 45%;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  position: relative;
  top: 0;
  height: auto;
  box-sizing: border-box;
`;
export default ManageClasses;
