import EdDiv, { EdH1 } from "../EdStyled";

const MainParticipants = (props) => {
  return (
    <EdDiv width={"370px"} padding={"0"} borderRadius={"5px"}>
      <EdH1 padding={"0"} fontWeight={"900"} fontSize={"1.2rem"}>
        {props.name}
      </EdH1>
      <EdH1 padding={"0"} fontSize={"1rem"} fontWeight={"700"}>
        {props.quantity}
      </EdH1>
    </EdDiv>
  );
};

export default MainParticipants;
