import Main from "./Main";
import Features from "./Features";
import Footer from "./Footer";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgb(0, 158, 245);
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
  color: white;
  margin-left: 30px;
  font-size: 25px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin-left: ${(props) => props.ml || "0px"};

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpButton = styled.button`
  font-size: 25px;
  border-radius: 8px;
  color: rgb(7, 76, 236);
  background-color: white;
  border: none;
  cursor: pointer;
  height: 45px;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`;

const HeroText = styled.div`
  text-align: left;
  max-width: 50%;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => (props.primary ? "#007bff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#007bff")};
  border: ${(props) => (props.primary ? "none" : "2px solid #007bff")};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const HeroImage = styled.img`
  width: 550px;
  height: 360px;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <>
    <Header>
        <Title>📖EduConnect</Title>
        <NavLink ml="710px">Home</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Login</NavLink>
        <SignUpButton>Sign Up</SignUpButton>
      </Header>

      <HeroSection>
        <HeroText>
          <HeroTitle>
            Seamless <br />
            Communication <br />
            Between Teachers &<br />
            Parents
          </HeroTitle>
          <Description>
            Keep track of attendance, student performance, and class updates effortlessly.
          </Description>
          <ButtonGroup>
            <Button primary>Sign Up</Button>
            <Button>Log In  </Button>
            
          </ButtonGroup>
        </HeroText>
        <HeroImage src="https://www.datocms-assets.com/112519/1713260156-1b-classroom-interactive-main-image.jpeg" />
      </HeroSection>
      <Main />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
