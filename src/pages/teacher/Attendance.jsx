import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getClassListAsync, selectClass } from "../../utils/redux/classSlice";

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
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #b02a37;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

export default function Attendance() {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const [selectedClassId, setSelectedClassId] = useState("");

  useEffect(() => {
    dispatch(getClassListAsync());
  }, [dispatch]);

  const selectedClass = classList.find((cls) => cls.id === selectedClassId);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>
          <Title>Manage Performance & Homework</Title>
          <Subtitle>Assign homework and evaluate student performance.</Subtitle>
        </Header>

        <Section>
          <Label>Select Class:</Label>
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
      </HeaderWrapper>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Homework Content</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedClass && selectedClass.students.length > 0 ? (
              selectedClass.students.map((student, index) => (
                <Tr key={index}>
                  <Td>{student.name || "Unnamed"}</Td>
                  <Td>--</Td>
                  <Td>
                    <DeleteButton>✖️ Delete</DeleteButton>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="3">
                  {selectedClass
                    ? "No students in this class."
                    : "Please select a class."}
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
