import Main from "./Main";
import Features from "./Features";
import Footer from "./Footer";
import styled from "styled-components";
import heroImage from "../../pages/home/images/image1.png";

import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  background-color: rgb(0, 158, 245);
  margin: 0 auto; /* Markazga joylash */
  width: 1440px;
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
  max-width: 1340px; /* yoki o'zingiz xohlagan miqdor */
  margin: 0 auto; /* Markazga joylash */
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
  height: 330px;
  border-radius: 10px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Header>
          <Title id="home">📖EduConnect</Title>
          <NavLink href="#home" ml="710px">
            Home
          </NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          <NavLink href="#">
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </NavLink>
        </Header>
      </Wrapper>

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
            <Button primary onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
            <Button onClick={() => navigate("/login")}>Log In </Button>
          </ButtonGroup>
        </HeroText>
        <HeroImage src={heroImage} alt="Hero Image" />
      </HeroSection>
      <Main />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
