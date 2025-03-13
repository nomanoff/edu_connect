import React from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  display: block;
  margin-top: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #0056b3;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <h1>Settings</h1>

      {/* General Settings */}
      <Section>
        <SectionTitle>General Settings</SectionTitle>
        <Label>Academy Name</Label>
        <Input type="text" placeholder="Enter Academy Name" />
        <Label>Upload Logo</Label>
        <FileInput type="file" />
        <Button>Save Changes</Button>
      </Section>

      {/* User & Permissions */}
      <Section>
        <SectionTitle>User & Permissions</SectionTitle>
        <Label>Assign Role</Label>
        <Select>
          <option>Admin</option>
          <option>User</option>
        </Select>
        <Button>Update Role</Button>
      </Section>

      {/* Theme & Display */}
      <Section>
        <SectionTitle>Theme & Display</SectionTitle>
        <Label>Language</Label>
        <Select>
          <option>English</option>
          <option>Spanish</option>
        </Select>
        <CheckboxContainer>
          <span>Enable Dark Mode</span>
          <Checkbox type="checkbox" />
        </CheckboxContainer>
        <Button>Apply Changes</Button>
      </Section>
    </SettingsContainer>
  );
};

export default Settings;
