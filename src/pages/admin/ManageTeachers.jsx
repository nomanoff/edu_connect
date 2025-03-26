import styled from "styled-components";

import AddNewTeacher from "../../components/admin/AddNewTeacher";
import TeachersList from "../../components/admin/TeachersList";
import { EdH1 } from "../../components/EdStyled";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
`;

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([
    { name: "John Doe", email: "john@example.com", subject: "ew[qf[jq" },
    { name: "Sarah Smith", email: "sarah@example.com", subject: "eapfjaw" },
  ]);

  return (
    <Wrapper>
      <EdH1
        fontWeight={"700"}
        textAlign={"left"}
        padding={"20px"}
        fontSize={"1.3rem"}
      >
        Manage Teachers
      </EdH1>

      <AddNewTeacher />

      <TeachersList teachers={teachers} />
    </Wrapper>
  );
};

export default ManageTeachers;
