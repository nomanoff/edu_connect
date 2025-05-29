import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
`;

const SearchInput = styled.input`
  width: 180px;
  padding: 6px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 6px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    background: #f0f0f0;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 200px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 10px;
  font-size: 14px;
  z-index: 10;
`;

const NotificationItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #f8f8f8;
  }
`;

const LogoutItem = styled(NotificationItem)`
  color: red;
  font-weight: bold;
  &:hover {
    background: #ffe5e5;
  }
`;

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Container>
      {/* Search Input */}
      <SearchInput type="text" placeholder="Search..." />

      {/* Admin + Notifications */}
      <Wrapper>
        <HeaderRight>
          <MenuItem onClick={() => toggleMenu("notifications")}>
            🔔 Notifications
          </MenuItem>
          <MenuItem onClick={() => toggleMenu("admin")}>👤 Admin</MenuItem>
        </HeaderRight>

        {/* Notifications Menu */}
        <DropdownMenu isOpen={activeMenu === "notifications"}>
          <NotificationItem>You have a new message</NotificationItem>
          <NotificationItem>You have a new message...</NotificationItem>
        </DropdownMenu>

        {/* Admin Menu */}
        <DropdownMenu isOpen={activeMenu === "admin"}>
          <NotificationItem>Edit profile</NotificationItem>
          <LogoutItem>Logout</LogoutItem>
        </DropdownMenu>
      </Wrapper>
    </Container>
  );
};

export default AdminPanel;
