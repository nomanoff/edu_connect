import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import {
  deleteTeacherAsync,
  getTeacherListAsync,
  selectTeacher,
} from "../../../utils/redux/teacherSlice";

const Wrapper = styled.div`
  width: 100%;
  height: calc(80vh - 49px);
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

const Div = styled.div`
  font-style: italic;
  color: red;
  font-weight: 900;
  text-align: center;
`;

const TeachersList = () => {
  const dispatch = useDispatch();
  const { teacherList } = useSelector(selectTeacher);
  const [expandedRow, setExpandedRow] = useState(null);

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
        console.log("Failed to delete teacher:", error);
      });
  };

  const toggleRow = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <Wrapper>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Teacher Name</Th>
              <Th>Teacher Email</Th>
              <Th>Teacher's classes</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teacherList.map((teach) => (
              <React.Fragment key={teach.id}>
                <Tr>
                  <Td>{teach?.name?.trim()}</Td>
                  <Td>{teach?.email?.trim()}</Td>
                  <Td
                    onClick={() => toggleRow(teach.id)}
                    style={{ color: "#007bff" }}
                  >
                    {teach?.classes?.length || 0}
                  </Td>
                  <Td>
                    <Button onClick={() => handleDelete(teach.id)}>
                      Remove
                    </Button>
                  </Td>
                </Tr>

                {/* Expanded Row */}
                {expandedRow === teach.id && (
                  <Tr>
                    <Td colSpan={4}>
                      {teach.classes.length > 0 ? (
                        <ul>
                          {teach.classes.map((cls) => (
                            <li key={cls.classId}>{cls.className}</li>
                          ))}
                        </ul>
                      ) : (
                        <Div>NO CLASS</Div>
                      )}
                    </Td>
                  </Tr>
                )}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default TeachersList;
