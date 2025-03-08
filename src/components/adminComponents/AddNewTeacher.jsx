import EdDiv, { EdButton_admin, EdH1 } from "../EdStyled";

const AddNewTeacher = () => {
  return (
    <EdDiv width={"calc(100% - 40px)"} borderRadius={"5px"} margin={"10px 0"}>
      <EdH1
        textAlign={"left"}
        padding={"0"}
        fontSize={"1.2rem"}
        fontWeight={"700"}
        margin={"0px"}
      >
        Add New Teacher
      </EdH1>
      <EdH1
        textAlign={"left"}
        padding={"0"}
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
          width: "calc(100% - 20px)",
          padding: "5px",
          fontSize: "1rem",
          border: "1px solid #999",
        }}
      />
      <EdH1
        textAlign={"left"}
        padding={"0"}
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
          width: "calc(100% - 20px)",
          padding: "5px",
          fontSize: "1rem",
          border: "1px solid #999",
        }}
      />
      <EdH1
        textAlign={"left"}
        padding={"0"}
        fontSize={"1rem"}
        fontWeight={"700"}
      >
        Subject:
      </EdH1>
      <select
        style={{
          width: "100%",
          padding: "5px",
          border: "1px solid #999",
          borderRadius: "5px",
          fontSize: "1rem",
          color: "#666",
          marginBottom: "10px",
        }}
      >
        <option value="">Select a breed</option>
      </select>
      <EdButton_admin textAlign={"center"} padding={"8px"} borderRadius={"5px"}>
        Add Teacher
      </EdButton_admin>
    </EdDiv>
  );
};

export default AddNewTeacher;
