
import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectClasses, setClassList } from "../../utils/redux/classesSlice";

const ManageClasses = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClasses);

  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dayType, setDayType] = useState(0);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [openTeacherDialog, setOpenTeacherDialog] = useState(false);

  const teachers = ["Azizbek", "Farxod", "Ali", "Bekzod"];

  const handleAddClass = () => {
    if (className && startTime && endTime && selectedTeacher) {
      const newClass = {
        "name": "English",
        "startTime": "09:00",
        "endTime": "10:30",
        "schedule": 1,
        "teacherId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      };
      

      dispatch(setClassList([...classList, newClass]));
      console.log("Yangi sinf qo'shildi:", newClass);

      setClassName("");
      setStartTime("");
      setEndTime("");
      setSelectedTeacher("");
      setDayType(0);
    }
  };

  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
    setOpenTeacherDialog(false);
  };

  return (
    <Container>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Manage Classes
      </Typography>

      <FormSection>
        <Typography variant="h6">Add New Class</Typography>

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
          onChange={(e) => setDayType(parseInt(e.target.value))}
        >
          <FormControlLabel value={0} control={<Radio />} label="Odd" />
          <FormControlLabel value={1} control={<Radio />} label="Even" />
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
          Choose Teacher
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!className || !startTime || !endTime || !selectedTeacher}
          onClick={handleAddClass}
          style={{ marginTop: "10px" }}
        >
          Add Class
        </Button>
      </FormSection>

      {/* Teachers Dialog */}
      <Dialog
        open={openTeacherDialog}
        onClose={() => setOpenTeacherDialog(false)}
      >
        <DialogTitle>Select Teacher</DialogTitle>
        <DialogContent>
          {teachers.map((teacher) => (
            <Button
              key={teacher}
              onClick={() => handleTeacherSelect(teacher)}
              style={{ margin: "5px", textTransform: "none" }}
              variant="outlined"
            >
              {teacher}
            </Button>
          ))}
        </DialogContent>
      </Dialog>

      <ClassList>
        <Typography variant="h6">Class List</Typography>
        {classList.map((item, index) => (
          <ClassItem key={index}>
            <strong>{item.name}</strong> - {item.time} - {item.teacher} -{" "}
            {item.dayType === 0 ? "Odd" : "Even"}
          </ClassItem>
        ))}
      </ClassList>
    </Container>
  );
};



const Container = styled.div`
  padding: 30px;
`;

const FormSection = styled.div`
  max-width: 400px;
  margin-bottom: 40px;
`;

const ClassList = styled.div`
  margin-top: 40px;
`;

const ClassItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export default ManageClasses;