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

import { registerAdminAsync, registerParentAsync, registerTeacherAsync } from "../../utils/redux/authSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [teacherKey, setTeacherKey] = useState("");

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


    // Admin role
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
    
    // Teacher role
    if (role === "1") {
      const teacherData = {
        name: name,
        email: email,
        password: password,
        role: Number(role),
        tokenForTeacher: adminKey,
      };

      console.log("Teacher data to be dispatched:", teacherData);

      dispatch(registerTeacherAsync(teacherData))
        .unwrap()
        .then(() => {
          alert("Teacher registered successfully!");
        })
        .catch((error) => {
          alert(error);
        });
    }

    // Parent role
    if (role === "2") {
      const parentData = {
        name: name,
        email: email,
        password: password,
        role: Number(role),
      };

      console.log("Parent data to be dispatched:", parentData);

      dispatch(registerParentAsync(parentData))
        .unwrap()
        .then(() => {
          alert("Parent registered successfully!");
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
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Parent">Parent</MenuItem>
          </Select>
        </FormControl>

        {/* Admin */}
        {role === "0" && (
          <>
            <TextField
              fullWidth
              sx={{ mb: "5px", p: "3px" }}
              label="Oquv Markazi"
              variant="outlined"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mb: "5px", p: "3px" }}
              type="password"
              label="oquv markaz adres"
              variant="outlined"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mb: "5px", p: "3px" }}
              type="password"
              label="Maxfiy Admin Kod"
              variant="outlined"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
          </>
        )}

        {/* Teacher */}
        {role === "1" && (
          <>
            <TextField
              fullWidth
              required
              sx={{ mb: "5px", p: "3px" }}
              type="password"
              label="Teacher Key"
              variant="outlined"
              value={teacherKey}
              onChange={(e) => setTeacherKey(e.target.value)}
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
