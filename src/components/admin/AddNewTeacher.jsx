import styled from "styled-components";
import { EdButton_admin, EdH1 } from "../EdStyled";

const Wrapper = styled.div`
  width: calc(100% - 40px);
  border-radius: 5px;
  margin: 20px;
  border: 2px solid #808080;
  padding: 20px;
`;

const AddNewTeacher = () => {
  return (
    <Wrapper>
      <EdH1
        textAlign={"left"}
        fontSize={"1.2rem"}
        fontWeight={"700"}
      >
        Add New Teacher
      </EdH1>
      <EdH1
        textAlign={"left"}
        padding={"5px 0"}
        fontSize={"1rem"}
        fontWeight={"700"}
      >
        Name:
      </EdH1>
      <input
        type="text"
        placeholder="Enter teacher's name"
        style={{
          borderRadius: "5px",
          width: "100%",
          padding: "5px",
          fontSize: "1rem",
          border: "1px solid #999",
        }}
      />
      <EdH1
        textAlign={"left"}
        padding={"10px 0 5px 0"}
        fontSize={"1rem"}
        fontWeight={"700"}
      >
        Email:
      </EdH1>
      <input
        type="text"
        placeholder="Enter teacher's email"
        style={{
          borderRadius: "5px",
          width: "100% ",
          padding: "5px",
          fontSize: "1rem",
          border: "1px solid #999",
        }}
      />
      <EdButton_admin textAlign={"center"} padding={"8px"} margin={"20px 0 0 0"} borderRadius={"5px"}>
        Add Teacher
      </EdButton_admin>
    </Wrapper>
  );
};

export default AddNewTeacher;
