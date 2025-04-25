import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteClassAsync } from "../../utils/redux/classSlice";





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
  Box,
  CircularProgress,
  Input,
} from "@mui/material";
import {
  getClassListAsync,
  postClassAsync,
} from "../../utils/redux/classSlice";
import { getTeacherListAsync } from "../../utils/redux/teacherSlice";

const ManageClasses = () => {
  const dispatch = useDispatch();

  const [isUploading, setIsUploading] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dayType, setDayType] = useState(0);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openTeacherDialog, setOpenTeacherDialog] = useState(false);

  useEffect(() => {
    dispatch(getTeacherListAsync())
      .unwrap()
      .then((data) => {
        console.log("teacher list data: ", data);
        setTeacherList(data);
      });
    dispatch(getClassListAsync())
      .unwrap()
      .then((data) => {
        console.log("class list data: ", data);
        setClassList(data);
      });
  }, [dispatch]);

  const handleCreateClass = () => {
    if (className && startTime && endTime && selectedTeacher) {
      const formatTimeWithSeconds = (timeStr) => {
        const [hour, minute] = timeStr.split(":");
        return `${hour}:${minute}:00`;
      };

      const classData = {
        name: className,
        startTime: formatTimeWithSeconds(startTime),
        endTime: formatTimeWithSeconds(endTime),
        schedule: dayType,
        teacherId: selectedTeacher.id,
      };

      setIsUploading(true);
      dispatch(postClassAsync(classData))
        .unwrap()
        .then(() => {
          dispatch(getClassListAsync())
            .unwrap()
            .then((data) => {
              setClassList(data);
              setIsUploading(false);
            })
            .catch((error) => {
              alert(error);
              setIsUploading(false);
            });

          setClassName("");
          setStartTime("");
          setEndTime("");
          setSelectedTeacher(null);
        })
        .catch((error) => {
          alert(error);
          setIsUploading(false);
        });
    }
  };



  return (
    <Container>
      <ContentWrapper>
        <FormSection>

          <Typography variant="h6">Add Class</Typography>
          <input
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            style={{
              border: "none",
              borderRadius: "30px",
              width: "420px",
              height: "40px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
              marginTop: "10px",
              paddingLeft: "15px",
              fontSize: "16px",
            }}
          />


          <Typography variant="h6" style={{ marginTop: "10px" }}>Start Time</Typography>
          <input
            fullWidth
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            margin="normal"
            style={{
              border: "0px solid white",
              borderRadius: "30px",
              width: "420px",
              height: "40px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
              marginTop: "10px",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}
          >
          </input>


          <Typography variant="h6" style={{ marginTop: "10px" }} >End Time</Typography>
          <input
            fullWidth
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            margin="normal"
            style={{
              border: "0px solid white",
              borderRadius: "30px",
              width: "420px",
              height: "40px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
              marginTop: "10px",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}
          ></input>

          <Typography variant="subtitle1" style={{ marginTop: "10px" }}>Class Days:</Typography>
          <RadioGroup
            row
            value={dayType}
            onChange={(e) => setDayType(parseInt(e.target.value))}
          >
            <FormControlLabel value={0} control={<Radio />} label="Odd" />
            <FormControlLabel value={1} control={<Radio />} label="Even" />
          </RadioGroup>



          <input
  type="text"
  value={selectedTeacher ? selectedTeacher.name : ""}
  readOnly
  style={{
    border: "0px solid white",
    borderRadius: "30px",
    width: "300px",
    height: "40px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.338)",
    marginTop: "10px",
    paddingLeft: "15px"
  }}
/>

<Button
  variant="contained"
  color="secondary"
  onClick={() => setOpenTeacherDialog(true)}
  style={{
    margin: "15px 0",
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "green",
    borderRadius: "20px",
    marginLeft: "20px"
  }}
>
  Choose
</Button>





          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateClass}
            fullWidth
            disabled={!className || !startTime || !endTime || !selectedTeacher}
            style={{ marginTop: "10px", padding: "15px", fontSize: "17px", backgroundColor: "white", color: "black", height: "40px" }}
          >
            Create
          </Button>
        </FormSection>


        {isUploading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress style={{ marginTop: "270px" }} />
          </Box>
        ) : (
          <Box />
        )}


        <ClassListSection>
          <Typography variant="h6">Class List</Typography>
          <ClassList>
            {classList?.map((_class, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "18px",
                }}
              >
                <CardContent>
                  <p >{_class.name}</p>
                  <p style={{ marginTop: "10px" }}>
                    {_class.startTime} - {_class.endTime}
                  </p>
                </CardContent>


                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  style={{
                    marginLeft: "10px",
                    paddingRight: "3px",
                  }}
                  onClick={() => {
                    setIsUploading(true);
                    dispatch(deleteClassAsync(_class.id))
                      .unwrap()
                      .then(() => {
                        dispatch(getClassListAsync())
                          .unwrap()
                          .then((data) => setClassList(data))
                          .finally(() => setIsUploading(false));
                      })
                      .catch((error) => {
                        alert("O'chirishda xatolik yuz berdi: " + JSON.stringify(error));
                        setIsUploading(false);
                      });
                  }}
                />




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
          {teacherList.map((teacher) => (
            <TeacherItem
              key={teacher.id}
              onClick={() => {
                setSelectedTeacher(teacher);
                setOpenTeacherDialog(false);
              }}
            >
              <Typography>{teacher.name}</Typography>
              <Button
                variant="contained"
                style={{ fontSize: "14px", padding: "8px 16px", color: "black", backgroundColor: "white", borderRadius: "10px" }}
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
  border-radius: 20px;
  background-color: #1c94f6;
  color: white;
  box-shadow: 0 8px 24px rgba(47, 47, 47, 0.2);
`;
const ClassListSection = styled.div`
  width: 45%;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  height: 430px;
  background-color: #1c94f6;
  color: white;
  box-shadow: 0 8px 24px rgba(47, 47, 47, 0.2);
  height: 520px;
`;

const ClassList = styled.div`
  height: 420px;
  padding-right: 10px;
  overflow-y: auto;

`;
const TeacherItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #1c94f6;
  color: white;

`;

export default ManageClasses;
