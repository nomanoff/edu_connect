import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/adminComponents/Header";

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

  p {
    cursor: pointer;
    transition: color 0.3s ease, font-size 0.2s ease;
  }

  p:hover {
    color: #ddd;
    font-size: 1.1em;
  }
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

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const DateLabel = styled.span`
  font-weight: bold;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ExportButton = styled.button`
  background: #28a745;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #218838;
  }
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
  width: ${(props) => props.width || "0%"};
  background: ${(props) => (props.color === "green" ? "#28a745" : "#007bff")};
`;

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Container>
      <ContentWrapper>
        <Header />
        <MainContent>
          <h1>Reports & Attendance</h1>

          <FiltersContainer>
            <DateLabel>Start Date:</DateLabel>
            <StyledDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <DateLabel>End Date:</DateLabel>
            <StyledDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <ExportButton>📂 Export Data</ExportButton>
          </FiltersContainer>

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
