import { useNavigate } from "react-router";

const Layout = ({ userRole, children }) => {
  const navigate = useNavigate();

  console.log("user role: ", userRole);

  const menus = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" },
      { name: "Manage Teachers", path: "/admin/manage-teachers" },
      { name: "Manage Students", path: "/admin/manage-students" },
      { name: "Reports & Attendance", path: "/admin/attendance-reports" },
      { name: "Settings", path: "/admin/settings" },
    ],
    teacher: [
      { name: "Dashboard", path: "/teacher/dashboard" },
      { name: "My Classes", path: "/teacher/classes" },
      { name: "Attendance", path: "/teacher/attendance" },
      { name: "Assignments", path: "/teacher/assignments" },
    ],
    parent: [
      { name: "Dashboard", path: "/parent/dashboard" },
      { name: "Child's Progress", path: "/parent/progress" },
      { name: "Messages", path: "/parent/messages" },
    ],
  };

  return (
    <div className="dashboard-layout">
      <aside style={{ border: "5px solid blue" }} className="sidebar">
        <h2>EduConnect</h2>
        {menus[userRole].map((item) => (
          <button key={item.path} onClick={() => navigate(item.path)}>
            {item.name}
          </button>
        ))}
      </aside>

      <main className="content">
        <header style={{ border: "5px solid red" }} className="header">
          <h3>
            Welcome, {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
          </h3>
        </header>

        {children}
      </main>
    </div>
  );
};

export default Layout;
