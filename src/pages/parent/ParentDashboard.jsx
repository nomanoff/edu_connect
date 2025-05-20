import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentByIdAsync,
  selectStudent,
} from "../../utils/redux/studentSlice";
import { selectParent } from "../../utils/redux/parentSlice";

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 49px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 5px;
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

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Time Formatter
const formatClassTime = (startTime, endTime) => {
  if (!startTime || !endTime) return "-";
  const format = (t) => t.slice(0, 5); // HH:mm:ss -> HH:mm
  return `${format(startTime)} ~ ${format(endTime)}`;
};

const ParentDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentDetail } = useSelector(selectStudent);
  const { selectedStudentId } = useSelector(selectParent);

  useEffect(() => {
    // dispatch(getStudentByIdAsync(selectedStudentId));
  });

  const goToSettings = () => {
    navigate("/parent/settings");
  };

  return (
    <Wrapper>
      {studentDetail && Object.keys(studentDetail).length > 0 ? (
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>Child Name</Th>
                <Th>Class Name</Th>
                <Th>Class Time</Th>
                <Th>Teacher Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{studentDetail?.name?.trim() || "-"}</Td>
                <Td>{studentDetail?.classes?.[0]?.className || "-"}</Td>
                <Td>
                  {formatClassTime(
                    studentDetail?.classes?.[0]?.startTime,
                    studentDetail?.classes?.[0]?.endTime
                  )}
                </Td>
                <Td>{studentDetail?.classes?.[0]?.teacherName || "-"}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableWrapper>
      ) : (
        <>
          <Message>No children added yet.</Message>
          <BackButton onClick={goToSettings}>Add More</BackButton>
        </>
      )}
    </Wrapper>
  );
};

export default ParentDashboard;
