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
import { useDispatch, useSelector } from "react-redux";
import { selectClass, getClassListAsync, createClassAsync } from "../../utils/redux/classSlice";

const teachers = [
  { id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "Azizbek" },
  { id: "8a749ccc-1ff7-4cb2-9d4f-89a8031f6179", name: "Farxod" },
  { id: "b718e04d-91ec-4120-a0d4-3300c6e253d9", name: "Ali" },
  { id: "ae76f1db-5c56-4ae5-a49c-5f4f212f26e8", name: "Bekzod" },
];

const ManageClasses = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);

  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dayType, setDayType] = useState(0);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openTeacherDialog, setOpenTeacherDialog] = useState(false);

  useEffect(() => {
    dispatch(getClassListAsync());
  }, [dispatch]);

  const handleCreateClass = () => {
    if (className && startTime && endTime && selectedTeacher) {
      const classData = {
        name: className,
        startTime,
        endTime,
        schedule: dayType,
        teacherId: selectedTeacher.id,
      };

      dispatch(createClassAsync(classData));


      setClassName("");
      setStartTime("");
      setEndTime("");
      setSelectedTeacher(null);
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
            value={selectedTeacher ? selectedTeacher.name : ""}
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
            onClick={handleCreateClass}
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
              <Card key={index} style={{ marginBottom: "10px", padding: "15px", background: "#e0e0e0", borderRadius: "10px" }}>
                <CardContent>
                  <p>{_class.name}</p>
                  <p>{_class.startTime} - {_class.endTime}</p>
                  <p>Teacher ID: {_class.teacherId}</p>
                </CardContent>
              </Card>
            ))}
          </ClassList>
        </ClassListSection>
      </ContentWrapper>

      <Dialog open={openTeacherDialog} onClose={() => setOpenTeacherDialog(false)}>
        <DialogTitle>Teacher List</DialogTitle>
        <DialogContent style={{ padding: "30px", width: "500px" }}>
          {teachers.map((teacher) => (
            <TeacherItem
              key={teacher.id}
              onClick={() => {
                setSelectedTeacher(teacher);
                setOpenTeacherDialog(false);
              }}
            >
              <Typography>{teacher.name}</Typography>
              <Button variant="contained" style={{ fontSize: "14px", padding: "8px 16px" }}>
                Select
              </Button>
            </TeacherItem>
          ))}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

const Container = styled.div`padding: 40px;`;
const ContentWrapper = styled.div`display: flex; justify-content: space-between; gap: 30px;`;
const FormSection = styled.div`width: 45%; padding: 30px; background: #f5f5f5; border-radius: 20px;`;
const ClassListSection = styled.div`width: 45%; padding: 30px; background: #f5f5f5; border-radius: 20px; height: 400px;`;
const ClassList = styled.div`max-height: 350px; padding-right: 10px; overflow-y: auto;`;
const TeacherItem = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px; cursor: pointer; background: #e0e0e0;
  margin-bottom: 10px; border-radius: 10px; font-size: 18px;
`;

export default ManageClasses;
