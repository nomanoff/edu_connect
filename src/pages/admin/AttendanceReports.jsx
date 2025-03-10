import React from "react";
import styled from "styled-components";
import Header from "../../components/Header"; // ✅ Header import qilindi

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #007bff;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  background: #f4f4f4;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ProgressBarContainer = styled.div`
  background: #ddd;
  border-radius: 10px;
  width: 100%;
  height: 15px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.width || "0%"};
  background: ${props => (props.color === "green" ? "#28a745" : "#007bff")};
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <h2>EduConnect</h2>
        <p>Dashboard</p>
        <p>Manage Teachers</p>
        <p>Manage Students</p>
        <p>Reports & Attendance</p>
        <p>Settings</p>
        <p>Logout</p>
      </Sidebar>

      <ContentWrapper>
        {/* ✅ Header komponenti qo'shildi */}
        <Header />

        <MainContent>
          <h1>Reports & Attendance</h1>

          <Card>
            <Title>Attendance Reports</Title>
            <Table>
              <thead>
                <tr>
                  <Th>Student Name</Th>
                  <Th>Class</Th>
                  <Th>Attendance %</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Alice Johnson</Td>
                  <Td>Grade 8 - Mathematics</Td>
                  <Td>
                    <ProgressBarContainer>
                      <ProgressBar width="85%" color="blue" />
                    </ProgressBarContainer>
                    85%
                  </Td>
                </tr>
                <tr>
                  <Td>Michael Brown</Td>
                  <Td>Grade 7 - Science</Td>
                  <Td>
                    <ProgressBarContainer>
                      <ProgressBar width="92%" color="blue" />
                    </ProgressBarContainer>
                    92%
                  </Td>
                </tr>
              </tbody>
            </Table>
          </Card>

          <Card>
            <Title>Performance Overview</Title>
            <Table>
              <thead>
                <tr>
                  <Th>Student Name</Th>
                  <Th>Class</Th>
                  <Th>Performance</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Alice Johnson</Td>
                  <Td>Grade 8 - Mathematics</Td>
                  <Td>
                    <ProgressBarContainer>
                      <ProgressBar width="78%" color="green" />
                    </ProgressBarContainer>
                    78%
                  </Td>
                </tr>
                <tr>
                  <Td>Michael Brown</Td>
                  <Td>Grade 7 - Science</Td>
                  <Td>
                    <ProgressBarContainer>
                      <ProgressBar width="88%" color="green" />
                    </ProgressBarContainer>
                    88%
                  </Td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default Dashboard;
