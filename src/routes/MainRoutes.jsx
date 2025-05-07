import { BrowserRouter as Router, Routes, Route } from "react-router";

import ROUTES from "./routes";
import ProtectedRoutes from "./ProtectedRoutes";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// admin imports
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageClasses from "../pages/admin/ManageClasses";
import ManageTeachers from "../pages/admin/ManageTeachers";
import ManageStudents from "../pages/admin/ManageStudents";
import AttendanceReports from "../pages/admin/AttendanceReports";
import Settings from "../pages/admin/Settings";
// import ProtectedRoutes from "./ProtectedRoutes";
// import Parent from "../pages/admin/Parent";
// import AuthRoutes from "./AuthRoutes";

// parent imports
import ParentDashboard from "../pages/parent/ParentDashboard";

// teacher imports
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import TeacherClassList from "../pages/teacher/ManageClasses";
import Attendance from "../pages/teacher/Attendance";
import Assignments from "../pages/teacher/Assignments";
import ParentSettings from "../pages/parent/ParentSettings";
import Message from "../pages/teacher/Message";
import ManageStudent from "../pages/teacher/ManageStudent";

const MainRoutes = ({ isAuthenticated, userRole }) => {
  return (
    <Router>
      <Routes>
        {/* Public/Open Routes */}
        {!isAuthenticated && (
          <>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
          </>
        )}

        {/* Admin Routes */}
        {isAuthenticated && userRole === "admin" && (
          <Route
            path="admin"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            }
          >
            <Route path="" element={<AdminDashboard />} />
            <Route path="manage-classes" element={<ManageClasses />} />
            <Route path="manage-teachers" element={<ManageTeachers />} />
            <Route path="manage-students" element={<ManageStudents />} />
            <Route path="attendance-reports" element={<AttendanceReports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        )}

        {/* Teacher Routes */}
        {isAuthenticated && userRole === "teacher" && (
          <Route
            path="teacher"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            }
          >
            <Route path="" element={<TeacherDashboard />} />
            <Route path="class-list" element={<TeacherClassList />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="message" element={<Message />} />
            <Route path="student" element={<ManageStudent />} />
          </Route>
        )}

        {/* Parent Routes */}
        {isAuthenticated && userRole === "parent" && (
          <Route
            path="parent"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                userRole={userRole}
              />
            }
          >
            <Route path="" element={<ParentDashboard />} />
            <Route path="settings" element={<ParentSettings />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
