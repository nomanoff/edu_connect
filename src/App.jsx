import { useState } from "react";
import MainRoutes from "./routes/MainRoutes.jsx";
import "./App.css";

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: true,
    role: "parent",
  });

  return (
    <MainRoutes
      isAuthenticated={authState?.isAuthenticated}
      userRole={authState?.role}
    />
  );
}

export default App;
