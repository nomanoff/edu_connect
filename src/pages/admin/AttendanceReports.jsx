import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
`;

const TopControls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
`;

const AttendanceReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleMonthChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val > 12) setMonth("1");
    else if (val < 1) setMonth("12");
    else setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val > 7) setDay("1");
    else if (val < 1) setDay("7");
    else setDay(e.target.value);
  };

  return (
    <Container>
      <TopControls>
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="test">test</option>
          <option value="test 2">test 2</option>
          <option value="test 3">test 3</option>
          <option value="test 4">test 4</option>
          <option value="test 5">test 5</option>
          <option value="test 6">test 6</option>
          <option value="test 7">test 7</option>
        </Select>

        <Input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Month"
          value={month}
          min="1"
          max="12"
          onChange={handleMonthChange}
        />

        <Input
          type="number"
          placeholder="Day"
          value={day}
          min="1"
          max="7"
          onChange={handleDayChange}
        />
      </TopControls>
    </Container>
  );
};

export default AttendanceReports;
