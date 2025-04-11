import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EdH1 } from "../../components/EdStyled";
import AdminParticipants from "../../components/admin/AdminParticipants";
import { getClassListAsync, selectAdmin } from "../../utils/redux/adminSlice";

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
  const dispatch = useDispatch();
  const { classList } = useSelector(selectAdmin);

  useEffect(() => {
    dispatch(getClassListAsync({ academy_id: "a;sdkfja;slkdjfasdf" }))
      .unwrap()
      .then((response) => {
        console.log("class list response: ", response);
      })
      .catch((error) => {
        console.error("error get ClassListAsync: ", error);
      });
  }, [dispatch]);

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

        {classList?.map((table, index) => (
          <AdminParticipants key={index.toString()} table={table} />
        ))}
      </MainWrapper>
    </Wrapper>
  );
};

export default AdminDashboard;
