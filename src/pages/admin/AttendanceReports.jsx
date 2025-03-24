import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #b1a8a8;
  border-radius: 5px;
  height: 50px;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background-color: #03b803;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Space = styled.div`
height: 30px;
`;

const Progress = ({ label, percent }) => {
  return (

    <Container>


      <ContentWrapper>
        
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

    <ProgressContainer>
      <ProgressBar>
        <ProgressFill percent={percent} />
        <ProgressText>
          {label} {percent}%
        </ProgressText>
      </ProgressBar>
    </ProgressContainer>
  );
};


const App = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
          <Space />
      <Progress label="Frontend 001" percent={90} />
      <Progress label="Frontend 002" percent={89} />
    </div>
  );
};

export default App;
