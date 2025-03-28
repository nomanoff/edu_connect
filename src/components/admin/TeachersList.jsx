import styled from "styled-components";

import { EdH1 } from "../EdStyled";
import TeacherParticipants from "./TeacherParticipants";

const Wrapper = styled.div`
  width: calc(100% - 40px);
  border-radius: 5px;
  margin: 20px;
  border: 2px solid #808080;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const MainWrapper = styled.main`
  padding: 0;
`;

const TeachersList = ({ teachers }) => {
  return (
    <Wrapper>
      <EdH1
        textAlign={"left"}
        padding={"0"}
        fontSize={"1.3rem"}
        fontWeight={"700"}
        margin={"0px"}
      >
        Teachers List
      </EdH1>
      <MainWrapper boxShadow={"none"} padding={"0"}>
        <table
          style={{
            width: "100%",
          }}
        >
          <thead
            style={{
              border: "2px solid #000",
              backgroundColor: "#0082f5",
              color: "#fff",
              height: "40px",
            }}
          >
            <tr>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Name
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Email
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Token
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <TeacherParticipants key={index} teacher={teacher} />
            ))}
          </tbody>
        </table>
      </MainWrapper>
    </Wrapper>
  );
};

export default TeachersList;
