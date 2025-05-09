import { styled } from "styled-components";

import Header from "./admin/Header";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const MainWrapper = styled.main`
  width: calc(100% - 300px);
  height: calc(100vh - 50px);
  margin-left: 300px;
`;
const PageWrapper = styled.main`
  margin-top: 50px;
`;

const Layout = ({ userRole, children }) => {
  const menus = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Manage Classes", path: "/admin/manage-classes" },
      { name: "Manage Teachers", path: "/admin/manage-teachers" },
      { name: "Manage Students", path: "/admin/manage-students" },
      { name: "Reports & Attendance", path: "/admin/attendance-reports" },
      { name: "Settings", path: "/admin/settings" },
    ],
    teacher: [
      { name: "Dashboard", path: "/teacher" },
      { name: "My Class", path: "/teacher/class-list" },
      { name: "Manage Students", path: "/teacher/student"},
      { name: "Attendance", path: "/teacher/attendance" },
      { name: "Assignments", path: "/teacher/assignments" },
      { name: "Message", path: "/teacher/message"},
      
    ],
    parent: [
      { name: "Dashboard", path: "/parent" },
      { name: "Settings", path: "/parent/settings" },
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
