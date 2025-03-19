import styled from "styled-components";

import { EdH1 } from "../../components/EdStyled";

const Wrapper = styled.div`
  width: 100%;
`;

const Attendance = () => {
  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        Student Attendance
      </EdH1>
    </Wrapper>
  );
};

export default Attendance;
