import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Dialog } from "@mui/material";

import {
  registerTeacherTokenAsync,
  selectTeacher,
} from "../../../utils/redux/teacherSlice";

import styled from "styled-components";
import { EdButton_admin, EdH1 } from "../../../components/EdStyled";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
`;

const Button = styled.button`
  font-size: 1.3rem;
  width: 150px;
  height: 50px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: #0082f5;
  border-radius: 10px;
  float: right;
`;

const Dialog1 = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const AddNewTeacher = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const dispatch = useDispatch();
  const { teacherId } = useSelector(selectTeacher);

  const copyToClipboard = () => {
    if (teacherId) {
      navigator.clipboard.writeText(teacherId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleCreateTeacher = () => {
    dispatch(registerTeacherTokenAsync());
    setOpen(true);
  };

  return (
    <Wrapper>
      <EdH1 textAlign="left" fontSize="1.2rem" fontWeight="700">
        Generate New Teacher Key
      </EdH1>

      <EdButton_admin
        textAlign="center"
        padding="8px"
        fontSize={"1.3rem"}
        fontWeight="900"
        margin="20px 0 0 0"
        borderRadius="5px"
        onClick={handleCreateTeacher}
      >
        Generate Key
      </EdButton_admin>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <EdH1 fontSize="1.3rem" fontWeight="700">
          Generate Copy Token
        </EdH1>
        <Dialog1>
          <EdH1 margin="0 40px 0 0">
            {teacherId ? teacherId : "Token is not defined"}
          </EdH1>
          <Button onClick={copyToClipboard}>
            copy {copied ? "✅" : <ContentCopyIcon />}
          </Button>
        </Dialog1>
      </Dialog>
    </Wrapper>
  );
};

export default AddNewTeacher;
