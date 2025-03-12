import { styled } from "styled-components";

const Wrapper = styled.header`
  width: calc(100% - 300px);
  height: 50px;
  border: 4px solid red;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>My First React App</h1>
    </Wrapper>
  );
};
export default Header;
