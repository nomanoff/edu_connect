import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getClassListAsync, selectClass } from "../../utils/redux/classSlice";
import {
  getAttendanceByClassAndDate,
  selectAttendance,
} from "../../utils/redux/attendancesSlice";

import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 15px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const Thead = styled.thead`
  background-color: #007bff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  border-right: 1px solid #fff;

  &:last-child {
    border-right: none;
  }
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 12px 23px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

const Div = styled.div`
  display: grid;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DivGreen = styled.div`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  align-items: center;
  background-color: #18d118;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 25%;
`;

const DivRed = styled.div`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  align-items: center;
  background-color: #ea2828;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 25%;
`;

const DivYellow = styled.div`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  align-items: center;
  background-color: #ffbb3d;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 25%;
`;

const AttendanceReports = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const { attendanceList } = useSelector(selectAttendance);

  const [selectedClassId, setSelectedClassId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    dispatch(getClassListAsync());
  }, [dispatch]);

  const handleChoseAttendance = () => {
    if (selectedClassId && selectedDate) {
      const attendanceData = {
        classId: selectedClassId,
        date: selectedDate,
      };
      
      dispatch(getAttendanceByClassAndDate(attendanceData));
    } else {
      alert("Please Chose class or enter date!");
    }
  };

  return (
    <Wrapper>
      <Section>
        <Div>
          <Label>Class:</Label>
          <Select
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            <option value="">Select Class</option>
            {classList.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </Select>
        </Div>

        <Div>
          <Label>Date:</Label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </Div>

        <Div>
          <Label>Submit:</Label>
          <Button onClick={handleChoseAttendance}>Submit</Button>
        </Div>
      </Section>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Attendance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {attendanceList.length > 0 ? (
              attendanceList.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.studentName}</Td>
                  {data.attendanceStatus === 0 ? (
                    <Td>
                      <DivGreen>
                        <DoneIcon />
                        Present
                      </DivGreen>
                    </Td>
                  ) : data.attendanceStatus === 1 ? (
                    <Td>
                      <DivRed>
                        <ClearIcon />
                        Absent
                      </DivRed>
                    </Td>
                  ) : (
                    <Td>
                      <DivYellow>
                        <WarningAmberIcon />
                        Tardy
                      </DivYellow>
                    </Td>
                  )}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="2">No students found!</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default AttendanceReports;
