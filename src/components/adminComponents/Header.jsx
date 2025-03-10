import React from "react";
import styled from "styled-components";
import { FaBell, FaUserCircle } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 250px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #007bff;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #555;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #007bff;
  }
`;

const AdminText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #007bff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchInput type="text" placeholder="Search attendance..." />
      
      <RightSection>
        <IconWrapper>
          <FaBell />
        </IconWrapper>
        <IconWrapper>
          <FaUserCircle />
        </IconWrapper>
        <AdminText>Admin</AdminText>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
