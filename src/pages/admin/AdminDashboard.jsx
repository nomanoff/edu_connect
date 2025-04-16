import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { EdH1 } from "../../components/EdStyled";
import AdminParticipants from "../../components/admin/AdminParticipants";
import { getClassListAsync } from "../../utils/redux/classSlice";

const DashboardWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Thead = styled.thead`
  background-color: #007bff;
  color: white;
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

const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TeacherDashboard = () => {
  const classes = [
    { name: "Frontend 001", time: "17:00 – 19:00", students: 5, attendance: "90%" },
    { name: "Backend 002", time: "15:00 – 17:00", students: 7, attendance: "89%" },
    { name: "Python 003", time: "10:00 – 12:00", students: 6, attendance: "93%" },
  ];

  return (
    <DashboardWrapper>
      <Title>Teacher Dashboard</Title>
      <Table>
        <Thead>
          <tr>
            <Th>Class Name</Th>
            <Th>Class Time</Th>
            <Th>No. of Students</Th>
            <Th>Attendance Rate</Th>
          </tr>
        </Thead>
        <tbody>
          {classes.map((cls, index) => (
            <Tr key={index}>
              <Td>{cls.name}</Td>
              <Td>{cls.time}</Td>
              <Td>{cls.students}</Td>
              <Td>{cls.attendance}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </DashboardWrapper>
  );
};

export default TeacherDashboard;