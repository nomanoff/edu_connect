import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EdH1 } from "../../components/EdStyled";
import { getClassListAsync, selectClass } from "../../utils/redux/classSlice";
import { getStudentListAsync, selectStudent } from "../../utils/redux/studentSlice";

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
  margin-top: 20px;
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
  padding: 12px;
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
  padding: 12px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

// Component
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const { studentList } = useSelector(selectStudent);

  useEffect(() => {
    dispatch(getClassListAsync());
    dispatch(getStudentListAsync());
  }, [dispatch]);

  const getStudentCountByClassId = (classId) => {
    return studentList.filter((student) => student.class_id === classId).length;
  };

  return (
    <Wrapper>
      <EdH1 fontWeight="700" textAlign="left" padding="20px">
        Admin Dashboard
      </EdH1>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Class Name</Th>
              <Th>Class Time</Th>
              <Th>No. Of Students</Th>
              <Th>Attendance Rate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {classList?.length > 0 ? (
              classList.map((cls, index) => (
                <Tr key={index}>
                  <Td>{cls?.name || "-"}</Td>
                  <Td>{cls?.time || "-"}</Td>
                  <Td>{getStudentCountByClassId(cls?.id)}</Td>
                  <Td>-</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="4">No classes found</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminDashboard;
