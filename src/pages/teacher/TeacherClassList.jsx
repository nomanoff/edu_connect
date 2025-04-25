import styled from "styled-components";

import AddNewTeacher from "../../components/admin/AddNewTeacher";
import TeachersList from "../../components/admin/TeachersList";
import { EdH1 } from "../../components/EdStyled";

const Wrapper = styled.div`
  width: 100%;
`;

const TeacherClassList = () => {
  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        My Classes
      </EdH1>
    </Wrapper>
  );
};

export default TeacherClassList;
