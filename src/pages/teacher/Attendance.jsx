// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";

import { getClassListAsync, selectClass } from "../../utils/redux/classSlice";
import {
  getAttendanceByClassAndDate,
  selectAttendance,
} from "../../utils/redux/attendancesSlice";

export default function Attendance() {
  const dispatch = useDispatch();

  const { classList } = useSelector(selectClass);
  const attendanceState = useSelector(selectAttendance) || {};
  const { attendanceList = [], loading, error } = attendanceState;

//   const [selectedClassId, setSelectedClassId] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");

//   useEffect(() => {
//     dispatch(getClassListAsync());
//     dispatch(getAttendanceByClassAndDate());
//   }, [dispatch]);

//   const handleSubmit = () => {
//     if (!selectedClassId || !selectedDate) {
//       alert("Iltimos, sinf va sanani tanlang.");
//       return;
//     }

    const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

    dispatch(
      getAttendanceByClassAndDate({
        classId: selectedClassId,
        date: formattedDate,
      })
    );
  };

  return (
    <Wrapper>
      <Header>
        <Title>Manage Attendance</Title>
        <Subtitle>Select class and date to view attendance records.</Subtitle>
      </Header>

//       <Section>
//         <Label>Class:</Label>
//         <Select
//           value={selectedClassId}
//           onChange={(e) => setSelectedClassId(e.target.value)}
//         >
//           <option value="">Select Class</option>
//           {classList.map((cls) => (
//             <option key={cls.id} value={cls.id}>
//               {cls.name}
//             </option>
//           ))}
//         </Select>

//         <Label>Date:</Label>
//         <Input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//         />

//         <Button onClick={handleSubmit}>Submit</Button>
//       </Section>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {attendanceList.length > 0 ? (
              attendanceList.map((record) => (
                <Tr key={record.id}>
                  <Td>{record.student?.name || "N/A"}</Td>
                  <Td>
                    {record.attendanceStatus === 1 ? "Present" : "Absent"}
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="2">Ma'lumot topilmadi.</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// const Header = styled.div`
//   text-align: left;
//   margin-bottom: 20px;
// `;

// const Title = styled.h1`
//   font-size: 22px;
//   color: #333;
//   margin-bottom: 5px;
// `;

// const Subtitle = styled.p`
//   font-size: 14px;
//   color: #666;
// `;

// const Section = styled.div`
//   margin-bottom: 15px;
//   display: flex;
//   gap: 20px;
//   align-items: center;
// `;

// const Label = styled.label`
//   font-weight: bold;
// `;

// const Select = styled.select`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Input = styled.input`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 8px 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const TableWrapper = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background-color: white;
// `;

// const Thead = styled.thead`
//   background-color: #007bff;
//   color: white;
// `;

// const Tbody = styled.tbody``;

// const Tr = styled.tr`
//   &:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// `;

// const Th = styled.th`
//   padding: 12px;
//   text-align: left;
// `;

const Td = styled.td`
  padding: 12px;
`;
