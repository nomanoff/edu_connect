import { EdH1 } from "../EdStyled";

const AdminParticipants = ({table}) => {
  return (
    <>
      <main
        style={{
          height: "80px",
          border: "2px solid #808080",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
          alignItems: "center"
        }}
      >
        <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
          {table.name}
        </EdH1>
        <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
          {table.time}
        </EdH1>
        <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
          {table.teacher}
        </EdH1>
        <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
          {table.grade}
        </EdH1>
        <EdH1 fontSize={"1.1rem"} padding={"10px"} width={"200px"}>
          {table.rate}
        </EdH1>
      </main>
    </>
  );
};

export default AdminParticipants;
