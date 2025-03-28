import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button, Typography, Container } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Wrapper>
      <Container
        maxWidth="xs"
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold", color: "#1976d2" }}
        >
          EduConnect
        </Typography>
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "15px" }}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
        <Typography
          variant="body2"
          style={{ marginTop: "10px", color: "black" }}
        >
          Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default Login;
