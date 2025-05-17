import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getMyClassAsync, selectClass } from "../../utils/redux/classSlice";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
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

// Time formatter
const formatClassTime = (startTime, endTime) => {
  if (!startTime || !endTime) return "-";
  const format = (t) => t.slice(0, 5); // HH:mm:ss -> HH:mm
  return `${format(startTime)} ~ ${format(endTime)}`;
};

const TeacherDashboard = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);

  useEffect(() => {
    dispatch(getMyClassAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Class Name</Th>
              <Th>Class Time</Th>
              <Th>No. of Student</Th>
            </Tr>
          </Thead>
          <Tbody>
            {classList.length > 0 ? (
              classList.map((cls, index) => (
                <Tr key={index}>
                  <Td>{cls?.name?.trim()}</Td>
                  <Td>{formatClassTime(cls?.startTime, cls?.endTime)}</Td>
                  <Td>{cls?.students?.length ?? 0}</Td>
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

export default TeacherDashboard;
