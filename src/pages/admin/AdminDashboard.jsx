import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { EdH1 } from "../../components/EdStyled";

import { getClassListAsync } from "../../utils/redux/classSlice";
import { selectAdmin } from "../../utils/redux/adminSlice";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 49px);
  background-color: #f9f9f9;
  padding: 20px;
  border: 2px solid #000;
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

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { classList } = useSelector(selectAdmin);

  useEffect(() => {
    dispatch(getClassListAsync({ academy_id: "a;sdkfja;slkdjfasdf" }))
      .unwrap()
      .then((response) => {
        console.log("class list response: ", response);
      })
      .catch((error) => {
        console.error("error getClassListAsync: ", error);
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
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
            {classList?.map((cls, index) => (
              <Tr key={index}>
                <Td>{cls.name || "-"}</Td>
                <Td>{cls.time || "-"}</Td>
                <Td>-</Td>
                <Td>-</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminDashboard;
