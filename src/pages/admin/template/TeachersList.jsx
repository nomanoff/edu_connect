import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  deleteTeacherAsync,
  getTeacherListAsync,
  selectTeacher,
} from "../../../utils/redux/teacherSlice";

const Wrapper = styled.div`
  width: 100%;
  height: calc(65vh - 49px);
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
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #dc3545;
  }
`;

const TeachersList = () => {
  const dispatch = useDispatch();
  const { teacherList } = useSelector(selectTeacher);

  useEffect(() => {
    dispatch(getTeacherListAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTeacherAsync(id))
      .unwrap()
      .then(() => {
        dispatch(getTeacherListAsync());
      })
      .catch((error) => {
        console.error("Failed to delete teacher:", error);
      });
  };

  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Teacher Name</Th>
              <Th>Teacher Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teacherList.map((teach) => (
              <Tr key={teach.id}>
                <Td>{teach?.name?.trim()}</Td>
                <Td>{teach?.email?.trim()}</Td>
                <Td>
                  <Button onClick={() => handleDelete(teach.id)}>Remove</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default TeachersList;
