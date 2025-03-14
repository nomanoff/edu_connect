import EdDiv, { EdButton_admin, EdH1 } from "../EdStyled";
import MainParticipants from "./MainParticipants";
import Title from "./Title";

const Dashboard = () => {
  const participant = [
    {
      name: "Teachers",
      quantity: "24 Active",
    },
    {
      name: "Students",
      quantity: "320 Enrolled",
    },
    {
      name: "Attendance",
      quantity: "92% Today",
    },
  ];

  return (
    <EdDiv width={"100vw"} height={"100vh"} padding={"0"} display={"flex"}>
      <EdDiv backgroundColor={"#ddd"} width={"calc(100% - 300px)"}>
        <Title />

        <EdH1 fontWeight={"700"} textAlign={"left"} padding={"0"}>
          Welcome, Adam
        </EdH1>
        <EdH1
          textAlign={"left"}
          padding={"0"}
          margin={"-15px 0 0 0"}
          fontSize={"1rem"}
        >
          Here's an overview of today's data.
        </EdH1>

        <EdDiv
          backgroundColor={"#ddd"}
          justifyContent={"space-between"}
          boxShadow={"none"}
          padding={"0"}
          margin={"10px 0"}
          height={"80px"}
          display={"flex"}
        >
          {participant.map((item, index) => (
            <MainParticipants
              key={index.toString()}
              name={item.name}
              quantity={item.quantity}
            />
          ))}
        </EdDiv>
      </EdDiv>
    </EdDiv>
  );
};

export default Dashboard;
