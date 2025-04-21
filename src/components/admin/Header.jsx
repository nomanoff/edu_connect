import React from "react";
import styled from "styled-components";
import { FaBell, FaUserCircle } from "react-icons/fa";
import useLogout from "../../utils/hooks/useLogout";
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  position: fixed;
  width: calc(100% - 300px);
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
  position: relative;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #555;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.2);
    color: #007bff;
  }

  &:hover > div {
    display: block;
  }
`;

const AdminText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    color: #007bff;
  }

  &:hover > div {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 20px;
  left: -140px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 14px;
  display: none;
  min-width: 150px;
  z-index: 10;
  width: 200px;
`;

const MenuItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 1s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f8f8;
  }
`;

const Header = () => {
  const { logUserOut } = useLogout();

  const handleLogout = async () => {
    logUserOut();
  };

  return (
    <HeaderContainer>
      <SearchInput type="text" placeholder="Search attendance..." />

      <RightSection>

      <AdminText>
          Admin
          <DropdownMenu>
            <MenuItem>Edit profile</MenuItem>

          </DropdownMenu>
        </AdminText>

        <IconWrapper>
          <FaBell />
          <DropdownMenu>
            <MenuItem>You have a new message</MenuItem>
            <MenuItem>Another notification...</MenuItem>
          </DropdownMenu>
        </IconWrapper>

        
        <MenuItem onClick={handleLogout} style={{ color: "red" }}>
              <LogoutIcon />
            </MenuItem>
            
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
