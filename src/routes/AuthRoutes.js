import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTES from "./routePaths";

const AuthRoutes = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

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
