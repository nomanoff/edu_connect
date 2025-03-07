import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import {
  NotificationsActive as NotificationsIcon,
  Update as UpdateIcon,
  ConnectWithoutContact as ConnectIcon,
  AccessTime as TimeIcon,
  Assessment as AssessmentIcon,
  Chat as ChatIcon
} from "@mui/icons-material";
import { styled } from "@mui/system";

const Container = styled(Box)({ textAlign: "center", padding: "32px 24px" });
const Section = styled(Box)({ marginTop: "70px", padding: "35px", backgroundColor: "#fff", borderRadius: "10px" });
const StyledAvatar = styled(Avatar)({ backgroundColor: "#007BFF", width: "48px", height: "48px" });
const CenteredBox = styled(Box)({ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "30px" });
const FeatureBox = styled(Box)({ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "left", gap: "12px" });

const HowItWorks = () => {
  const steps = [
    { icon: <UpdateIcon sx={{ fontSize: 30, color: "white" }} />, title: "Teachers Update", desc: "Teachers update class progress, attendance, and performance data in real-time." },
    { icon: <NotificationsIcon sx={{ fontSize: 30, color: "white" }} />, title: "Parents Receive Notifications", desc: "Parents get instant notifications about their child's progress and activities." },
    { icon: <ConnectIcon sx={{ fontSize: 30, color: "white" }} />, title: "Stay Connected", desc: "Both teachers and parents stay connected effortlessly through our platform." }
  ];

  const features = [
    { icon: <TimeIcon sx={{ fontSize: 30, color: "#007BFF" }} />, title: "Attendance Tracking", desc: "Get real-time attendance updates\nfrom teachers. Know when your\nchild is present or absent." },
    { icon: <AssessmentIcon sx={{ fontSize: 30, color: "#007BFF" }} />, title: "Performance Reports", desc: "Easily view student progress\nand feedback. Track grades\nand performance over time." },
    { icon: <ChatIcon sx={{ fontSize: 30, color: "#007BFF" }} />, title: "Instant Messaging", desc: "Direct communication between\nteachers and parents. Stay\nconnected with quick messages." }
  ];

  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" gutterBottom>How It Works</Typography>
      <Grid container spacing={20} justifyContent="center">
        {steps?.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CenteredBox>
              <StyledAvatar>{step.icon}</StyledAvatar>
              <Typography fontWeight="bold" mt={1}>{step.title}</Typography>
              <Typography variant="body2" color="text.secondary" mt={2}>{step.desc}</Typography>
            </CenteredBox>
          </Grid>
        ))}
      </Grid>

      <Section>
        <Typography variant="h4" fontWeight="bold" gutterBottom>Key Features</Typography>
        <Grid container spacing={2} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ textAlign: "left", p: 3, borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <CardContent>
                  <FeatureBox>
                    <Avatar sx={{ backgroundColor: "#E3F2FD", width: "48px", height: "48px" }}>{feature.icon}</Avatar>
                    <Box>
                      <Typography fontWeight="bold" mt={1}>{feature.title}</Typography>
                      <Typography variant="body2" color="text.secondary" mt={1} style={{ whiteSpace: "pre-line" }}>{feature.desc}</Typography>
                    </Box>
                  </FeatureBox>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default HowItWorks;