import styled from "styled-components";

import AddNewTeacher from "../../components/admin/AddNewTeacher";
import TeachersList from "../../components/admin/TeachersList";
import { EdH1 } from "../../components/EdStyled";



const FixBox = styled.div`
  font-family: Arial, sans-serif;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ManageTeachers = () => {
  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        Manage Teachers
      </EdH1>

      <AddNewTeacher />
      <FixBox>

      <TeachersList/>
      </FixBox>
    </Wrapper>
  );
};

export default ManageTeachers;
