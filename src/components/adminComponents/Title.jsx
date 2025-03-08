import EdDiv, { EdButton_admin } from "../EdStyled";

const Title = () => {
  return (
    <EdDiv
      width={"calc(100% - 40px)"}
      display={"flex"}
      justifyContent={"space-between"}
      borderRadius={"5px"}
    >
      <EdDiv width={"auto"} boxShadow={"none"} padding={"0"}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            backgroundColor: "#fff",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "8px",
          }}
        />
      </EdDiv>
      <EdDiv width={"350px"} boxShadow={"none"} padding={"0"} display={"flex"}>
        <EdButton_admin
          backgroundColor={"#fff"}
          color={"#000"}
          padding={"0"}
          textAlign={"right"}
        >
          🔔Notifications
        </EdButton_admin>
        <EdButton_admin
          backgroundColor={"#fff"}
          color={"#000"}
          padding={"0"}
          textAlign={"right"}
        >
          👤Admin
        </EdButton_admin>
      </EdDiv>
    </EdDiv>
  );
};

export default Title;
