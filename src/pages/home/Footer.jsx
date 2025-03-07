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

import { FlexContainer } from '../../components/Divs';


import { CTAButton } from "../../components/Buttons";

import { Quote } from "../../components/Tags";
import { Title2 } from "../../components/Tags";
import { Link } from "../../components/Tags";
import { IconLink } from "../../components/Tags";
import { Copyright } from "../../components/Tags";

import { Title } from "../../components/Titles";
import { Divider } from "../../components/Titles";


import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Section>
        <Title>
          <h2>What People Say</h2>
        </Title>
        <CardsContainer>
          <Card>
            <Quote>
              "EduConnect has transformed how I communicate with parents. It's
              so much more efficient than emails or phone calls."
            </Quote>
            <UserInfo>
              <Avatar>M</Avatar>
              <div>
                <Name>Maria Johnson</Name>
                <Role>5th Grade Teacher</Role>
              </div>
            </UserInfo>
          </Card>

          <Card>
            <Quote>
              "As a working parent, I love being able to check my son's progress
              anytime. The instant notifications are a game-changer."
            </Quote>
            <UserInfo>
              <Avatar>J</Avatar>
              <div>
                <Name>James Wilson</Name>
                <Role>Parent of 2</Role>
              </div>
            </UserInfo>
          </Card>

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
          </Card>
        </CardsContainer>
      </Section>

      <FlexContainer>

      <CTAContainer>
        <h2>Ready to Transform Communication?</h2>
        <p>
          Join thousands of teachers and parents already using EduConnect to
          stay connected.
        </p>
        <CTAButton>Get Started Today →</CTAButton>
      </CTAContainer>
      </FlexContainer>

      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <Title>📖 EduConnect</Title>
            <p>
              Bridging the gap between teachers and parents with seamless
              communication.
            </p>
          </FooterSection>
          <FooterSection>
            <Title>Quick Links</Title>
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
              <IconLink href="#">
                <FaFacebookF />
              </IconLink>
              <IconLink href="#">
                <FaTwitter />
              </IconLink>
              <IconLink href="https://www.instagram.com/ilmhub.uz/">
                <FaInstagram />
              </IconLink>
              <IconLink href="#">
                <FaLinkedinIn />
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
