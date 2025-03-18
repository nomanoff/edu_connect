import { BrowserRouter as Router, Routes, Route } from "react-router";

import ROUTES from "./routes";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/admin/adminDashboards/TeacherDashboard";
import AttendanceReports from "../pages/admin/AttendanceReports";
import ManageStudents from "../pages/admin/ManageStudents";
import ProtectedRoutes from "./ProtectedRoutes";
<<<<<<< HEAD
<<<<<<< HEAD
import Settings from "../pages/admin/Settings";
=======
import Parent from "../pages/admin/Parent";
>>>>>>> 9bafead2bb18078978d93e387bc7478013842842
=======
import Settings from "../pages/admin/Settings";
import Parent from "../pages/admin/Parent";

>>>>>>> f67edecb28b684b13446692b0b00cac677df8fb0
// import AuthRoutes from "./AuthRoutes";

// const MainRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path={ROUTES.HOME} element={<Home />} />
//         <Route path={ROUTES.LOGIN} element={<Login />} />
//         <Route path={ROUTES.SIGNUP} element={<Signup />} />

//         {/* Protected Routes */}
//         <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
//         <Route path={ROUTES.ATTENDANCE_REPORTS} element={<AttendanceReports/>} />

//         <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminLayout />}>
//           <Route path="teacher" element={<TeacherDashboard />} />
//           {/* <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} /> */}
//         </Route>
//         <Route path={ROUTES. MANAGE_STUDENTS} element={<ManageStudents/>} />

//         {/* <Route path={ROUTES.ADMIN_DASHBOARD}>
//           <Route
//             path={ROUTES.TEACHER_DASHBOARD}
//             element={<TeacherDashboard />}
//           />
//           <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} />
//         </Route> */}
//       </Routes>
//     </Router>
//   );
// };

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
            <Route path="manage-teachers" element={<TeacherDashboard />} />
            <Route path="manage-students" element={<ManageStudents />} />
            <Route path="attendance-reports" element={<AttendanceReports />} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="settings" element={<Settings />} />
            
=======
            <Route path="parent" element={<Parent />} />
>>>>>>> 9bafead2bb18078978d93e387bc7478013842842
=======
            <Route path="settings" element={<Settings />} />
            <Route path="parent" element={<Parent />} />
>>>>>>> f67edecb28b684b13446692b0b00cac677df8fb0
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
