import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  
`;

const ReportItem = styled.div`
  padding: 15px;
  margin-top:51px;
  
  border-radius: 6px;
`;

const ProgressBar = styled.div`
  height: 20px;
  background: #bbb;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  height: 50px;
`;

const ProgressFill = styled.div`
  height: 100%;
  
  transition: width 0.5s ease-in-out;
`;

const ReportText = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
`;

const AttendanceReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Frontend 001", percentage: 90 },
        { id: 2, name: "Frontend 002", percentage: 89 },
        { id: 3, name: "Frontend 001", percentage: 50 },
        { id: 4, name: "Frontend 002", percentage: 10 },
      ];
      setReports(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {reports.map((report) => (
        <ReportItem key={report.id}>
          <ProgressBar>
            <ProgressFill percent={report.percentage} />
            <ReportText>
              {report.name} - {report.percentage}%
            </ReportText>
          </ProgressBar>
        </ReportItem>
      ))}
    </Container>
  );
};
export default AttendanceReports;
