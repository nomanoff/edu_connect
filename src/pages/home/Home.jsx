import styled from "styled-components";
import { useNavigate } from "react-router";

//pages
import Features from "./Features";
import Footer from "./Footer";
import About from "./About";

//image

import Logo from "./images/home-logo.png";

// import heroImage from "../../pages/home/images/image1.png";

const Header = styled.header`
  background: #00274d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  /* @media (max-width: 768px) {
    
  } */
`;

export const Container = styled.div`
  max-width: 1400px;
  align-items: center;
  display: flex;
  gap: 691px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  margin-right: auto;
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 100px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 18px;

  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    color: white;
    transform: scale(1.05);
    color: #3e9df6;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    left: 0;
    bottom: -5px;
    background-color: #208ff6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroSection = styled.div`
  display: flex;
  max-width: 1340px;
  height: 700px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
    margin-top: 100px;
  }
`;

const HeroText = styled.div`
  text-align: left;
  max-width: 50%;
  color: #0b4c8a;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    background: linear-gradient(135deg, #0d6efd, #000000);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  border: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #000000, #0d6efd);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`;

const HeroImage = styled.img`
  width: 550px;
  height: 330px;
  border: none;
  object-fit: cover;


  @media (max-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const BtnStart = styled.button`
  width: 350px;
  height: 60px;
  color: white;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #208ff6, #0d6efd);
  font-size: 22px;
  letter-spacing: 3px;
  font-weight: 600;
  text-align: center;

  cursor: pointer;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.06);
    background: linear-gradient(135deg, #0d6efd, #000000);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: 0ch;
    animation: typing 8s steps(20) infinite;
    border-right: 2px solid white;
  }

  @keyframes typing {
    0% {
      width: 0ch;
    }
    50% {
      width: 18ch;
    }
    100% {
      width: 0ch;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Home = () => {
  const navigate = useNavigate("");
  return (
    <>
      <Header>
        <Container>
          <Title id="home">
            {" "}
            {/* <Img src={Logo} alt="" /> */}
            EDU CONNECT
          </Title>
          <NavContainer>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <ButtonGroup>
              <Button $primary onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
              <BtnLogin onClick={() => navigate("/login")}>Log In</BtnLogin>
            </ButtonGroup>
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
            <BtnStart onClick={() => navigate("/signup")}>
              {" "}
              <span>Get Started...</span>
            </BtnStart>
          </ButtonGroup>
        </HeroText>
        <HeroImage src={Logo} alt="Hero" />
      </HeroSection>



<Features />
<About />
<Footer />

  
    </>
  );
};

export default Home;



