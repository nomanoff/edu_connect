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
      setStudents([...students, { className, startTime, endTime, dayType, selectedTeacher }]);
      setClassName("");
      setStartTime("");
      setEndTime("");
      setSelectedTeacher("");
    }
  };

  return (
    <div style={{ padding: "40px", position: "relative", top: "-20px" }}>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Welcome,Admin
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "30px", alignItems: "flex-start" }}>
        {/* Left Section */}
        <div style={{ width: "45%", padding: "30px", background: "#f5f5f5", borderRadius: "20px", position: "relative", top: "0px" }}>
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
            onChange={(e) => setDayType(e.target.value)}
          >
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
        </div>


        <div style={{ width: "45%", padding: "30px", background: "#f5f5f5", borderRadius: "20px" }}>
          <Typography variant="h6">Class List</Typography>
          {students.map((student, index) => (
            <Card key={index} style={{ marginBottom: "15px", padding: "20px", background: "#e0e0e0", borderRadius: "10px" }}>
              <CardContent>
                <Typography><b>Class:</b> {student.className}</Typography>
                <Typography><b>Time:</b> {student.startTime} ~ {student.endTime}</Typography>
                <Typography><b>Days:</b> {student.dayType}</Typography>
                <Typography><b>Teacher:</b> {student.selectedTeacher}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Teacher Selection Modal */}
      <Dialog open={openTeacherDialog} onClose={() => setOpenTeacherDialog(false)}>
        <DialogTitle>Teacher List</DialogTitle>
        <DialogContent style={{ padding: "30px", width: "500px" }}>
          {teachers.map((teacher, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", cursor: "pointer", background: "#e0e0e0", marginBottom: "10px", borderRadius: "10px", fontSize: "18px" }}
              onClick={() => { setSelectedTeacher(teacher); setOpenTeacherDialog(false); }}>
              <Typography>{teacher}</Typography>
              <Button variant="contained" style={{ fontSize: "14px", padding: "8px 16px" }}>Select</Button>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageClasses;
