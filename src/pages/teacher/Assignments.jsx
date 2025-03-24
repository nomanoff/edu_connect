import styled from "styled-components";

import { EdH1 } from "../../components/EdStyled";

const Wrapper = styled.div`
  width: 100%;
`;

const Assignments = () => {
  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        Student Assignments
      </EdH1>
    </Wrapper>
  );
};

export default Assignments;
