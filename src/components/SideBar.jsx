import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { EdButton_admin, EdH1 } from "./EdStyled";

const Wrapper = styled.aside`
  width: 300px;
  height: 100vh;
  background-color: #0082f5;
  padding: 0;
  position: fixed;
  overflow-y: auto;
  z-index: 100;
`;

const SideBar = ({ menus, userRole }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <EdH1 color={"#fff"} fontWeight={"900"}>
        EduConnect
      </EdH1>
      {menus[userRole].map((item) => (
        <EdButton_admin key={item.path} onClick={() => navigate(item.path)}>
          {item.name}
        </EdButton_admin>
      ))}
    </Wrapper>
  );
};

export default SideBar;
