import styled from "styled-components";
import { useNavigate } from "react-router";

import Features from "./Features";
import Footer from "./Footer";



const Header = styled.header`
  background-color: rgb(0, 158, 245);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 691px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  margin-right: auto;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const HeroSection = styled.div`
  display: flex;
  max-width: 1340px;
  margin: 0 auto;
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

//  Transient props ($primary) Fixed
const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => (props.$primary ? "#007bff" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#007bff")};
  border: ${(props) => (props.$primary ? "none" : "2px solid white")};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BtnLogin = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => (props.$primary ? "#007bff" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#007bff")};
  border: ${(props) => (props.$primary ? "none" : "2px solid #007bff")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const HeroImage = styled.img`
  width: 550px;
  height: 330px;
  border-radius: 11px;
`;

const Home = () => {
  const navigate = useNavigate("");
  return (
    <>
      <Header>
        <Container>
          <Title id="home">📖EduConnect</Title>
          <NavContainer>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </NavContainer>
        </Container>
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
            Keep track of attendance, student performance, and class updates
            effortlessly.
          </Description>
          <ButtonGroup>
            <Button $primary onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
            <BtnLogin onClick={() => navigate("/login")}>Log In</BtnLogin>
          </ButtonGroup>
        </HeroText>
        <HeroImage src={heroImage} alt="Hero Image" />
      </HeroSection>

      <Features />
      <Footer />
    </>
  );
};

export default Home;
