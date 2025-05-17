import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMyClassAsync, selectClass } from "../../utils/redux/classSlice";
import { useEffect, useState } from "react";

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

const MyClasses = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectClass);
  const [selectedClassId, setSelectedClassId] = useState("");

  useEffect(() => {
    dispatch(getMyClassAsync());
  }, [dispatch]);

  const selectedClassObj = classList.find((cls) => cls.id === selectedClassId);

  const fixedStudents =
    selectedClassObj?.students?.map((s) => ({
      ...s,
      studentId: s.studentId || "Unknown",
      studentName: s.studentName || "Unknown", 
    })) || [];

  return (
    <Wrapper>
      <Section>
        <Div>
          <Label>My Classes:</Label>
          <Select
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            <option value="">My Classes</option>
            {classList.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </Select>
        </Div>
      </Section>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Student ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fixedStudents.length > 0 ? (
              fixedStudents.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.studnetName}</Td>
                  <Td>{data.studentId}</Td>
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

export default MyClasses;
