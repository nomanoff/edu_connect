import { Outlet, useNavigate } from "react-router";
import ROUTES from "./routes";
import Layout from "../components/Layout";

const ProtectedRoutes = ({ isAuthenticated, userRole }) => {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return navigate(ROUTES.LOGIN);
  }
  return (
    <Layout userRole={userRole}>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoutes;
