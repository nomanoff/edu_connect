import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider
} from "@mui/material";
import {
  AccessTime as TimeIcon,
  Assessment as AssessmentIcon,
  Chat as ChatIcon
} from "@mui/icons-material";
import { styled } from "@mui/system";

// === STYLED COMPONENTS ===
const Container = styled(Box)`
  text-align: center;
  padding: 64px 24px;
  max-width: 1340px;
  margin: 0 auto;
`;

const Title = styled(Typography)`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 100px;
  color: #0b4c8a;
`;

const TopCard = styled(Card)`
  background-color: #2196f3;
  color: white;
  height: 200px;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  position: relative;
  font-size: 20px;
`;

const BottomCard = styled(Card)`
  background-color: #2196f3;
  color: white;
  border-radius: 16px;
  padding: 50px;
  margin-top: 24px;
  text-align: center;
  height: 200px;
`;

const Line = styled(Box)`
  height: 100px;
  width: 2px;
  background-color: black;
  margin: 20px auto;
`;

const IconWrapper = styled(Avatar)`
  background-color: white;
  color: #2196f3;
  margin: 0 auto 16px;
  width: 56px;
  height: 56px;
`;

const FeatureText = styled(Typography)`
  color: white;
  margin-top: 8px;
`;

const HowItWorks = () => {
  const features = [
    {
      icon: <TimeIcon fontSize="large" />,
      title: "Attendance Tracking",
      desc: "Get real-time attendance updates from teachers. Know when your child is present or absent.",
      bottom: "Monitor your child's daily school attendance with real-time updates. Know immediately if they are present or absent."
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      title: "Performance Reports",
      desc: "Easily view student progress and feedback. Track grades and performance over time.",
      bottom: "Monitor your child's daily school attendance with real-time updates. Know immediately if they are present or absent."
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Instant Messaging",
      desc: "Direct communication between teachers and parents. Stay connected with quick messages.",
      bottom: "Monitor your child's daily school attendance with real-time updates. Know immediately if they are present or absent."
    }
  ];

  return (
    <Container id="features">
      <Title>Features</Title>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <TopCard elevation={3}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <FeatureText variant="body2">{feature.desc}</FeatureText>
            </TopCard>

            <Line />

            <BottomCard elevation={1}>
              <Typography variant="body1" fontWeight="500">
                {feature.bottom}
              </Typography>
            </BottomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
