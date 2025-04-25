/* eslint-disable no-unused-vars */
import { useState } from "react";
import MainRoutes from "./routes/MainRoutes.jsx";
import "./App.css";
import { useSelector } from "react-redux";
import { selectAuth } from "./utils/redux/authSlice.js";

function App() {
  const { isAuthenticated, userRole } = useSelector(selectAuth);
  return <MainRoutes isAuthenticated={isAuthenticated} userRole={userRole} />;
}

export default App;
