import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

import { registerTeacherAsync, selectTeacher } from "../../utils/redux/teacherSlice";
import { EdButton_admin, EdH1 } from "../EdStyled";

const Wrapper = styled.div`
  width: calc(100% - 40px);
  border-radius: 5px;
  margin: 20px;
  border: 2px solid #808080;
  padding: 20px;`
;

const AddNewTeacher = () => {
  const dispatch = useDispatch();

  const handleCreateTeacher = () => {
    dispatch(registerTeacherTokenAsync());
  };

  return (
    <Wrapper>
      <EdH1 textAlign="left" fontSize="1.2rem" fontWeight="700">
        Generate New Teacher Key
      </EdH1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter teacher's name"
        style={{
          borderRadius: "5px",
          width: "100%",
          padding: "8px",
          fontSize: "1rem",
          border: "1px solid #999",
          marginBottom: "10px",
        }}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter teacher's email"
        style={{
          borderRadius: "5px",
          width: "100%",
          padding: "8px",
          fontSize: "1rem",
          border: "1px solid #999",
        }}
      />

      <EdButton_admin
        textAlign="center"
        padding="10px"
        margin="20px 0 0 0"
        borderRadius="5px"
        onClick={handleCreateTeacher}
      >
        Generate Key
      </EdButton_admin>

      {isCreated && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Teacher successfully created!
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </Wrapper>
  );
};

export default AddNewTeacher;
