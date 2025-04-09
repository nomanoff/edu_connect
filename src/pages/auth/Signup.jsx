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
import { useDispatch } from "react-redux";
import { registerAdminAsync } from "../../utils/redux/authSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const handleSignup = () => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (role === "0" && !adminKey) {
      alert("Admin Key is required for Admin role!");
      return;
    }

    if (role === "0") {
      const adminData = {
        name: name,
        email: email,
        password: password,
        role: Number(role),
        tokenOfAcademy: adminKey,
      };

      console.log("Admin data to be dispatched:", adminData);

      dispatch(registerAdminAsync(adminData))
        .unwrap()
        .then(() => {
          alert("Admin registered successfully!");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <Wrapper>
      <Container
        maxWidth="xs"
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "20px",
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
          Sign Up
        </Typography>

        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }} // ✅ Margin (bo‘shliq) 5px, padding 3px qilib kichraytirildi
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          sx={{ mb: "5px", p: "3px" }} // ✅ Margin (bo‘shliq) 5px, padding 3px qilib kichraytirildi
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          type="password"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <FormControl fullWidth sx={{ mb: "5px", p: "3px" }}>
          <InputLabel>Select Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Select Role"
          >
            <MenuItem value="0">Admin</MenuItem>
            <MenuItem value="1">Teacher</MenuItem>
            <MenuItem value="2">Parent</MenuItem>
          </Select>
        </FormControl>

        {role === "0" && (
          <>
            <TextField
              fullWidth
              required
              sx={{ mb: "5px", p: "3px" }}
              type="password"
              label="Admin Key"
              variant="outlined"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
          </>
        )}

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: "10px" }}
          onClick={handleSignup}
        >
          SIGN UP
        </Button>

        <Typography variant="body2" sx={{ mt: "10px", color: "black" }}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default Signup;
