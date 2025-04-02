import styled from "styled-components";

import { EdH1 } from "../../components/EdStyled";
import AdminParticipants from "../../components/admin/AdminParticipants";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 54.5px);
`;

const MainWrapper = styled.main`
  padding: 20px;
  height: 550px;
  margin: 20px;
  border: 2px solid #808080;
  max-width: 100%;
  overflow: auto;
`;

const TableHeader = styled.main`
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  max-width: 100%;
`;

const AdminDashboard = () => {
  const tables = [
    {
      name: "Frontend 001",
      time: "17:00 ~ 19:00",
      teacher: "Adam",
      grade: "5",
      rate: "90%",
    },
    {
      name: "Frontend 001",
      time: "17:00 ~ 19:00",
      teacher: "Adam",
      grade: "5",
      rate: "90%",
    },
    {
      name: "Frontend 001",
      time: "17:00 ~ 19:00",
      teacher: "Adam",
      grade: "5",
      rate: "90%",
    },
    {
      name: "Frontend 001",
      time: "17:00 ~ 19:00",
      teacher: "Adam",
      grade: "5",
      rate: "90%",
    },
    {
      name: "Frontend 001",
      time: "17:00 ~ 19:00",
      teacher: "Adam",
      grade: "5",
      rate: "90%",
    },
  ];

  return (
    <Wrapper>
      <EdH1 fontWeight={"700"} textAlign={"left"} padding={"20px"}>
        Welcome, Adam
      </EdH1>
      <MainWrapper>
        <TableHeader>
          <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
            class name
          </EdH1>
          <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
            class time
          </EdH1>
          <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
            teacher
          </EdH1>
          <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
            number of students
          </EdH1>
          <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
            attendance rate
          </EdH1>
        </TableHeader>

        {tables.map((table, index) => (
          <AdminParticipants key={index.toString()} table={table} />
        ))}
      </MainWrapper>
    </Wrapper>
  );
};

export default AdminDashboard;
