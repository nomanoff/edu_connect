import React from "react";
import { Section } from "../../components/Divs";
import { CardsContainer } from "../../components/Divs";
import { Card } from "../../components/Divs";
import { UserInfo } from "../../components/Divs";
import { Avatar } from "../../components/Divs";
import { Name } from "../../components/Divs";
import { Role } from "../../components/Divs";
import { CTAContainer } from "../../components/Divs";
import { FooterContainer } from "../../components/Divs";
import { FooterContent } from "../../components/Divs";
import { FooterSection } from "../../components/Divs";
import { SocialIcons } from "../../components/Divs";
import {Wrapper} from "../../components/Divs";

import { FlexContainer } from "../../components/Divs";

import { CTAButton } from "../../components/Buttons";

import { Quote } from "../../components/Tags";
import { Link } from "../../components/Tags";
import { IconLink } from "../../components/Tags";
import { Copyright } from "../../components/Tags";

import { Title, Title2, Divider } from "../../components/Titles";


import { Arrow, SubQuote } from "../../components/Divs";


import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaPhone

} from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
  <Section>
  <Title id="about">What People Say</Title>
  <Wrapper>
    <CardsContainer>

      {/* 1 */}
      <Card>
        <Quote>
          "EduConnect has transformed how I communicate with parents.
          It's so much more efficient than emails or phone calls."
        </Quote>
        <UserInfo>
          <Avatar>M</Avatar>
          <div>
            <Name>Maria Johnson</Name>
            <Role>5th Grade Teacher</Role>
          </div>
        </UserInfo>
        <Arrow />
        <SubQuote>
          💬 "With EduConnect, I can focus more on teaching and less on
          chasing communication. Parents are always informed in real-time!"
        </SubQuote>
      </Card>

      {/* 2 */}
      <Card>
        <Quote>
          "As a working parent, I love being able to check my son's
          progress anytime. The instant notifications are a game-changer."
        </Quote>
        <UserInfo>
          <Avatar>J</Avatar>
          <div>
            <Name>James Wilson</Name>
            <Role>Parent of 2</Role>
          </div>
        </UserInfo>
        <Arrow />
        <SubQuote>
          💬 "Now I never miss an update on my child's school life.
          Whether it's grades or homework, everything’s just a tap away!"
        </SubQuote>
      </Card>

      {/* 3 */}
      <Card>
        <Quote>
          "Our school has seen a 40% increase in parent engagement since
          implementing EduConnect. It's been incredible."
        </Quote>
        <UserInfo>
          <Avatar>S</Avatar>
          <div>
            <Name>Sarah Thompson</Name>
            <Role>School Principal</Role>
          </div>
        </UserInfo>
        <Arrow />
        <SubQuote>
          💬 "EduConnect has helped us build a stronger school community.
          Parents feel more involved, and teachers feel more supported."
        </SubQuote>
      </Card>

    </CardsContainer>
  </Wrapper>
</Section>


      
      <FlexContainer>
        <CTAContainer>
          <h2>Ready to Transform Communication?</h2>
          <p>
            Join thousands of teachers and parents already using EduConnect to
            stay connected.
          </p>
          <CTAButton onClick={() => navigate("/signup")}>
            Get Started Today →
          </CTAButton>
        </CTAContainer>
      </FlexContainer>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <Title2>EduConnect</Title2>
            <p>
              Bridging the gap between teachers and parents with seamless
              communication.
            </p>
          </FooterSection>
          <FooterSection>
            <Title2>Quick Links</Title2>
            <Link href="#">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </FooterSection>

          <FooterSection>
            <Title2>Legal</Title2>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Data Protection</Link>
          </FooterSection>

          <FooterSection>
            <Title2>Connect With Us</Title2>
            <SocialIcons>
              <IconLink href="https://t.me/NextPageDev">
                <FaTelegramPlane />
              </IconLink>
              <IconLink href="https://www.instagram.com/_next_page_devs/">
                <FaInstagram />
              </IconLink>
              <IconLink href="tel:+998900500767">
                <FaPhone />
              </IconLink>
            </SocialIcons>
          </FooterSection>
        </FooterContent>

        <Divider />
        <Copyright>© 2025 EduConnect. All rights reserved.</Copyright>
      </FooterContainer>
    </>
  );
}
