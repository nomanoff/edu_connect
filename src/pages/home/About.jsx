import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Titles";

// Images
import Goal from "./goal.png";
import Time from "./time.png";
import Strong from "./strong.png";

const AboutContainer = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  gap: 30px;
  width: 1300px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: #208FF6;
  border-radius: 20px;
  padding: 30px;
  width: 340px;
  height: 460px;
  display: flex;
  flex-direction: column;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth transition */

  &:hover {
    transform: scale(1.03); 
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
  color: black;
  font-weight: 600;
`;

export default function About() {
  return (
    <AboutContainer>
      <TitleContainer>
        <Title>About Us</Title>
      </TitleContainer>
      <Wrapper>
        <Cards>
          <Card>
            <ImgContainer>
              <img src={Goal} alt="Goal" />
              <CardTitle style={{ marginLeft: 10 }}>Our Goal</CardTitle>
            </ImgContainer>
            <Description>
              We are dedicated to improving the connection between schools and parents.
              Our platform provides real-time updates on student attendance, performance,
              and communication. With our tools, parents can stay informed and involved
              in their child's education journey.
            </Description>
          </Card>

          <Card>
            <ImgContainer>
              <img src={Time} alt="Real-Time" />
              <CardTitle style={{ marginLeft: 10 }}>Real-Time Tools</CardTitle>
            </ImgContainer>
            <Description>
              We believe every student deserves the best support. Our platform empowers
              parents and teachers to collaborate more efficiently by providing real-time
              data and communication tools. Together, we build a stronger educational future.
            </Description>
          </Card>

          <Card>
            <ImgContainer>
              <img src={Strong} alt="Stronger Together" />
              <CardTitle style={{ marginLeft: 10 }}>Stronger Together</CardTitle>
            </ImgContainer>
            <Description>
              Our mission is to make school communication simple and effective. We help parents
              stay updated about their child's attendance, performance, and messages from
              teachers — all in one place.
            </Description>
          </Card>
        </Cards>
      </Wrapper>
    </AboutContainer>
  );
}
