import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCookie } from "nookies";
import { TextField, Button, Typography, Container } from "@mui/material";
import {
  postLoginAsync,
  setIsAuthenticated,
  setUserRole,
} from "../../utils/redux/authSlice";
import styled from "styled-components";
import ROUTES from "../../routes/routes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Xatolik holati uchun
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    setError(false);
    setErrorMessage("");

    dispatch(postLoginAsync({ email, password }))
      .unwrap()
      .then(({ token, role }) => {
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        dispatch(setIsAuthenticated(true));

        switch (role) {
          case 0:
            dispatch(setUserRole("admin"));
            navigate(ROUTES.ADMIN_DASHBOARD);
            break;
          case 1:
            dispatch(setUserRole("teacher"));
            navigate(ROUTES.TEACHER_DASHBOARD);
            break;
          case 2:
            dispatch(setUserRole("parent"));
            navigate(ROUTES.PARENT_DASHBOARD);
            break;
          default:
            console.warn("Unknown role:", role);
            break;
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage("Incorrect email or password!");
        console.log("Login error:", error);
      });
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
          // error={error}
          // helperText={error ? errorMessage : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          // error={error}
          // helperText={error ? errorMessage : ""}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
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
