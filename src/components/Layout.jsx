import { useNavigate } from "react-router";
import { styled } from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainWrapper = styled.main`
  width: calc(100% - 300px);
  height: calc(100vh - 50px);
  border: 3px solid green;
`;
const PageWrapper = styled.main``;

const Layout = ({ userRole, children }) => {
  const navigate = useNavigate();

  console.log("user role: ", userRole);

  const menus = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Manage Teachers", path: "/admin/manage-teachers" },
      { name: "Manage Students", path: "/admin/manage-students" },
      { name: "Reports & Attendance", path: "/admin/attendance-reports" },
      { name: "Parents", path: "/admin/Parent"},
      { name: "Settings", path: "/admin/settings" },
      { name: "Parent" , path: "/admin/parent"}
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
    <Wrapper>
      <SideBar menus={menus} userRole={userRole} />

      <MainWrapper>
        <Header />
        <PageWrapper className="content">{children}</PageWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default Layout;
