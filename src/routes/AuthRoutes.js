import { Navigate, Outlet } from "react-router";
import { useState } from "react";

import ROUTES from "./routes";

const AuthRoutes = () => {
  //   const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ role: "admin" });

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  // Redirect based on user role
  switch (user?.role) {
    case "admin":
      return <Navigate to={ROUTES.ADMIN_DASHBOARD} />;
    case "teacher":
      return <Navigate to={ROUTES.TEACHER_DASHBOARD} />;
    case "parent":
      return <Navigate to={ROUTES.PARENT_DASHBOARD} />;
    default:
      return <Navigate to={ROUTES.LOGIN} />;
  }
};

export default AuthRoutes;
