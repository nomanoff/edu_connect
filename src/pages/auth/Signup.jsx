import React, { useState, useEffect, useCallback } from "react";
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
  const [passwordError, setPasswordError] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    role: false,
  });

  const validateFields = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      password: !password.trim(),
      confirmPassword: !confirmPassword.trim() || confirmPassword !== password,
      role: !role,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSignup();
      }
    },
    [name, email, password, confirmPassword, role, adminKey, teacherKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSignup = () => {
    if (!validateFields()) return;

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (role === "0" && !adminKey) {
      alert("Admin Key is required for Admin role!");
      return;
    }

    if (role === "0") {
      const adminData = {
        name,
        email,
        password,
        role: Number(role),
        tokenOfAcademy: adminKey,
      };

      dispatch(registerAdminAsync(adminData))
        .unwrap()
        .then(({ token }) => {
          setCookie(null, "token", token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          dispatch(setIsAuthenticated(true));
          dispatch(setUserRole("admin"));
          navigate(ROUTES.ADMIN_DASHBOARD);
        })
        .catch((error) => alert(error));
    }

    if (role === "1") {
      const teacherData = {
        name,
        email,
        password,
        role: Number(role),
        tokenForTeacher: teacherKey,
      };

      dispatch(registerTeacherAsync(teacherData))
        .unwrap()
        .then(({ token }) => {
          setCookie(null, "token", token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          dispatch(setIsAuthenticated(true));
          dispatch(setUserRole("teacher"));
          navigate(ROUTES.TEACHER_DASHBOARD);
        })
        .catch((error) => alert(error));
    }

    if (role === "2") {
      const parentData = {
        name,
        email,
        password,
        role: Number(role),
      };

      dispatch(registerParentAsync(parentData))
        .unwrap()
        .then(({ token }) => {
          setCookie(null, "token", token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          dispatch(setIsAuthenticated(true));
          dispatch(setUserRole("parent"));
          navigate(ROUTES.PARENT_DASHBOARD);
        })
        .catch((error) => alert(error));
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
          sx={{ mb: "5px", p: "3px" }}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value.trim())
              setErrors((prev) => ({ ...prev, name: false }));
          }}
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />

        <TextField
          required
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (e.target.value.trim())
              setErrors((prev) => ({ ...prev, email: false }));
          }}
          error={errors.email}
          helperText={errors.email ? "Email is required" : ""}
        />

        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value.trim())
              setErrors((prev) => ({ ...prev, password: false }));
          }}
          error={errors.password}
          helperText={errors.password ? "Password is required" : ""}
        />

        <TextField
          fullWidth
          sx={{ mb: "5px", p: "3px" }}
          type="password"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password !== e.target.value) {
              setPasswordError(true);
              setErrors((prev) => ({
                ...prev,
                confirmPassword: true,
              }));
            } else {
              setPasswordError(false);
              setErrors((prev) => ({
                ...prev,
                confirmPassword: false,
              }));
            }
          }}
          error={errors.confirmPassword}
          helperText={
            errors.confirmPassword ? "Passwords do not match!" : ""
          }
        />

        <FormControl fullWidth sx={{ mb: "5px", p: "3px" }} error={errors.role}>
          <InputLabel>Select Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              if (e.target.value)
                setErrors((prev) => ({ ...prev, role: false }));
            }}
            label="Select Role"
          >
            <MenuItem value="0">Admin</MenuItem>
            <MenuItem value="1">Teacher</MenuItem>
            <MenuItem value="2">Parent</MenuItem>
          </Select>
          {errors.role && (
            <Typography variant="caption" color="error">
              Role is required
            </Typography>
          )}
        </FormControl>

        {role === "0" && (
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
        )}

        {role === "1" && (
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
