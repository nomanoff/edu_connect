import styled from "styled-components";

import { EdH1 } from "../../components/EdStyled";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 54.5px);
`;

const AttendanceReports = () => {
  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        attendance reports
      </EdH1>
    </Wrapper>
  );
};

export default AttendanceReports;
