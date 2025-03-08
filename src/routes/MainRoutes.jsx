import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router";

import ROUTES from "./routes";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/admin/adminDashboards/TeacherDashboard";
// import AuthRoutes from "./AuthRoutes";

const AdminLayout = () => (
  <>
    <Outlet />
  </>
);

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />

        {/* Protected Routes */}
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />

        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminLayout />}>
          <Route path="teacher" element={<TeacherDashboard />} />
          {/* <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} /> */}
        </Route>

        {/* <Route path={ROUTES.ADMIN_DASHBOARD}>
          <Route
            path={ROUTES.TEACHER_DASHBOARD}
            element={<TeacherDashboard />}
          />
          <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
