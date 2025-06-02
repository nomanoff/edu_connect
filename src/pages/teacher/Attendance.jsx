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

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 12px 20px;
  border-top: 1px solid #ddd;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  font-size: 1.1rem;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  justify-content: center;
  width: 120px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonGreen = styled(Button)`
  background-color: #18d118;
`;

const ButtonRed = styled(Button)`
  background-color: #ea2828;
`;

const ButtonYellow = styled(Button)`
  background-color: #ffbb3d;
`;

const ButtonFixed = styled(Button)`
  width: 350px;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Attendance() {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const { attendanceList } = useSelector(selectAttendance);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    dispatch(getMyClassAsync());
  }, [dispatch]);

  const handleAttendance = (studentId, status) => {
    const alreadyMarked = getAttendanceStatus(studentId) !== undefined;
    if (!selectedClassId || !studentId || alreadyMarked) return;

    const attendanceData = {
      attendanceStatus: status,
      studentId,
      classId: selectedClassId,
    };

    dispatch(postAttendanceAsync(attendanceData))
      .unwrap()
      .then(() => {
        setSelectedStatus((prev) => ({ ...prev, [studentId]: status }));
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  const getAttendanceStatus = (studentId) => {
    if (selectedStatus[studentId] !== undefined) {
      return selectedStatus[studentId];
    }
    const record = attendanceList.find(
      (att) =>
        att.studentId === studentId && att.classId === selectedClassId
    );
    return record?.attendanceStatus;
  };

  const selectedClass = classList.find((cls) => cls.id === selectedClassId);
  const students = selectedClass?.students || [];

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
            {students.length > 0 ? (
              students.map((s) => {
                const studentId = s.studentId || "Unknown";
                const studentName = s.studentName || s.studnetName || "Unknown";
                const status = getAttendanceStatus(studentId);

                return (
                  <Tr key={studentId}>
                    <Td>{studentName}</Td>
                    <Td>
                      <Div>
                        {status === undefined && (
                          <>
                            <ButtonGreen
                              onClick={() =>
                                handleAttendance(studentId, 0)
                              }
                            >
                              <DoneIcon />
                              &nbsp;Present
                            </ButtonGreen>
                            <ButtonRed
                              onClick={() =>
                                handleAttendance(studentId, 1)
                              }
                            >
                              <ClearIcon />
                              &nbsp;Absent
                            </ButtonRed>
                            <ButtonYellow
                              onClick={() =>
                                handleAttendance(studentId, 2)
                              }
                            >
                              <WarningAmberIcon />
                              &nbsp;Tardy
                            </ButtonYellow>
                          </>
                        )}
                        {status === 0 && (
                          <ButtonGreen as={ButtonFixed}>
                            <DoneIcon />
                            &nbsp;Present
                          </ButtonGreen>
                        )}
                        {status === 1 && (
                          <ButtonRed as={ButtonFixed}>
                            <ClearIcon />
                            &nbsp;Absent
                          </ButtonRed>
                        )}
                        {status === 2 && (
                          <ButtonYellow as={ButtonFixed}>
                            <WarningAmberIcon />
                            &nbsp;Tardy
                          </ButtonYellow>
                        )}
                      </Div>
                    </Td>
                  </Tr>
                );
              })
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
