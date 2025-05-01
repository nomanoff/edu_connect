import styled from "styled-components";

import AddNewTeacher from "./template/AddNewTeacher";
import TeachersList from "./template/TeachersList";

const Wrapper = styled.div`
  width: 100%;
`;

const ManageTeachers = () => {
  return (
    <Wrapper>
      <AddNewTeacher />
      <TeachersList />
    </Wrapper>
  );
};

export default ManageTeachers;
