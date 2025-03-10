import React from "react";
import styled from "styled-components";
import { FaBell, FaUser } from "react-icons/fa"; 

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 250px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: #555;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchInput type="text" placeholder="Search attendance..." />

      <IconsContainer>
        <FaBell title="Notifications" />
        <FaUser title="Admin" />
        <span>Admin</span>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
