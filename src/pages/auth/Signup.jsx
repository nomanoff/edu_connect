import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import styled from "styled-components";
import { setCookie } from "nookies";
import { useDispatch } from "react-redux";
import {
  registerAdminAsync,
  registerParentAsync,
  registerTeacherAsync,
  setIsAuthenticated,
  setUserRole,
} from "../../utils/redux/authSlice";
import { useNavigate } from "react-router";
import ROUTES from "../../routes/routes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [teacherKey, setTeacherKey] = useState("");

  const handleSignup = () => {
    if (password.length < 6) return alert("Password must be at least 6 characters!");
    if (password !== confirmPassword) return alert("Passwords do not match!");
    if (role === "0" && !adminKey) return alert("Admin Key is required for Admin role!");
    if (role === "1" && !teacherKey) return alert("Teacher Key is required for Teacher role!");

    const commonData = { name, email, password, role: Number(role) };

    if (role === "0") {
      dispatch(registerAdminAsync({ ...commonData, tokenOfAcademy: adminKey }))
        .unwrap()
        .then(({ token }) => {
          setCookie(null, "token", token, { maxAge: 30 * 24 * 60 * 60, path: "/" });
          dispatch(setIsAuthenticated(true));
          dispatch(setUserRole("admin"));
          navigate(ROUTES.ADMIN_DASHBOARD);
        })
        .catch(alert);
    }

    if (role === "1") {
      dispatch(registerTeacherAsync({ ...commonData, tokenForTeacher: teacherKey }))
        .unwrap()
        .then(() => alert("Teacher registered successfully!"))
        .catch(alert);
    }

    if (role === "2") {
      dispatch(registerParentAsync(commonData))
        .unwrap()
        .then(() => alert("Parent registered successfully!"))
        .catch(alert);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSignup();
  };

  return (
    <Wrapper>
      <Container
        maxWidth="xs"
        sx={{
          textAlign: "center",
          background: "#fff",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
          EduConnect
        </Typography>
        <Typography variant="h6" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          margin="dense"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextField
          required
          fullWidth
          margin="dense"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextField
          fullWidth
          margin="dense"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextField
          fullWidth
          margin="dense"
          type="password"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />


<FormControl fullWidth margin="dense">
          <InputLabel>Select Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Select Role"
            onKeyDown={handleKeyDown}
          >
            <MenuItem value="0">Admin</MenuItem>
            <MenuItem value="1">Teacher</MenuItem>
            <MenuItem value="2">Parent</MenuItem>
          </Select>
        </FormControl>

        {role === "0" && (
          <TextField
            fullWidth
            required
            margin="dense"
            type="password"
            label="Admin Key"
            variant="outlined"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}

        {role === "1" && (
          <TextField
            fullWidth
            required
            margin="dense"
            type="password"
            label="Teacher Key"
            variant="outlined"
            value={teacherKey}
            onChange={(e) => setTeacherKey(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSignup}
        >
          SIGN UP
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: "black" }}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default Signup;
