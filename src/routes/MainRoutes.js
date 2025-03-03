import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routePaths";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminDashboard from "../pages/AdminDashboard";
import TeacherDashboard from "../pages/TeacherDashboard";
import ParentDashboard from "../pages/ParentDashboard";
import AuthRoutes from "./AuthRoutes";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<AuthRoutes />}>
          <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
          <Route
            path={ROUTES.TEACHER_DASHBOARD}
            element={<TeacherDashboard />}
          />
          <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
