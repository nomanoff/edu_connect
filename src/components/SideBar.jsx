import { styled } from "styled-components";
import { useNavigate } from "react-router";

const Wrapper = styled.aside`
  width: 300px;
  height: 100vh;
  border: 5px solid blue;
`;

const SideBar = ({ menus, userRole }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>EduConnect</h2>
      {menus[userRole].map((item) => (
        <button key={item.path} onClick={() => navigate(item.path)}>
          {item.name}
        </button>
      ))}
    </Wrapper>
  );
};

export default SideBar;
