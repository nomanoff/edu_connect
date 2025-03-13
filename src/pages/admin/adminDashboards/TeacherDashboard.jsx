import AddNewTeacher from "../../../components/adminComponents/AddNewTeacher";
import TeachersList from "../../../components/adminComponents/TeachersList";
import Title from "../../../components/adminComponents/Title";
import EdDiv, { EdButton_admin, EdH1 } from "../../../components/EdStyled";

const TeacherDashboard = () => {
  return (
    <EdDiv width={"100vw"} height={"100vh"} padding={"0"} display={"flex"}>
      <EdDiv backgroundColor={"#ddd"} width={"calc(100% - 300px)"}>
        <Title />

        <EdH1 fontWeight={"700"} textAlign={"left"} padding={"0"}>
          Manage Teachers
        </EdH1>
        <EdH1
          textAlign={"left"}
          padding={"0"}
          margin={"-15px 0 0 0"}
          fontSize={"1rem"}
          fontWeight={"600"}
        >
          View, add, and manage teachers.
        </EdH1>

        <TeachersList />

        <AddNewTeacher />
      </EdDiv>
    </EdDiv>
  );
};

export default TeacherDashboard;
