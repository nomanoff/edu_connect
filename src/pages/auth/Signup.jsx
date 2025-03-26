import React, { useState, useEffect } from "react";
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [teacherSubject, setTeacherSubject] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
  }, []);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign up with", { email, password, role, adminCode, adminKey, teacherSubject });
  };

  return (
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
        sx={{ mb: "5px", p: "3px" }} 
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

      {role === "Admin" && (
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

      {role === "Teacher" && (
        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          label="Subject"
          variant="outlined"
          value={teacherSubject}
          onChange={(e) => setTeacherSubject(e.target.value)}
        />
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
  );
};

export default Signup;