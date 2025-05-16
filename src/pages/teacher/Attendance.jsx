import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMyClassAsync, selectClass } from "../../utils/redux/classSlice";
import {
  postAttendanceAsync,
  selectAttendance,
} from "../../utils/redux/attendancesSlice";

import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #333;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const Section = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
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

const ButtonGreen = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  align-items: center;
  background-color: #18d118;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const ButtonRed = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  align-items: center;
  background-color: #ea2828;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const ButtonYellow = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.2rem;
  align-items: center;
  background-color: #ffbb3d;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
`;

export default function Attendance() {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const { attendanceList } = useSelector(selectAttendance);
  const [selectedClassId, setSelectedClassId] = useState("");

  useEffect(() => {
    dispatch(getMyClassAsync());
  }, [dispatch]);

  const handleAttendance = (studentId, status) => {
    if (selectedClassId && studentId) {
      const attendanceData = {
        attendanceStatus: status,
        studentId: studentId,
        classId: selectedClassId,
      };

      dispatch(postAttendanceAsync(attendanceData))
        .unwrap()
        .then()
        .catch((error) => {
          alert(error);
        });
    }
  };

  const selectedClassObj = classList.find((cls) => cls.id === selectedClassId);

  const fixedStudents =
    selectedClassObj?.students?.map((s) => ({
      ...s,
      studentId: s.studentId || "Unknown",
      studentName: s.studnetName || s.studentName || "Unknown",
    })) || [];

  return (
    <Wrapper>
      <Header>
        <Title>Manage Attendance</Title>
        <Subtitle>Select class and mark attendance.</Subtitle>
      </Header>

      <Section>
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
      </Section>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fixedStudents.length > 0 ? (
              fixedStudents.map((student) => (
                <Tr key={student.studentId}>
                  <Td>{student.studentName}</Td>
                  <Td>
                    <Div>
                      <ButtonGreen
                        onClick={() => handleAttendance(student.studentId, 0)}
                      >
                        <DoneIcon />
                        Present
                      </ButtonGreen>
                      <ButtonRed
                        onClick={() => handleAttendance(student.studentId, 1)}
                      >
                        <ClearIcon />
                        Absent
                      </ButtonRed>
                      <ButtonYellow
                        onClick={() => handleAttendance(student.studentId, 2)}
                      >
                        <WarningAmberIcon />
                        Tardy
                      </ButtonYellow>
                    </Div>
                  </Td>
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
}
