import { useDispatch } from "react-redux";
import styled from "styled-components";

import { registerTeacherTokenAsync } from "../../utils/redux/teacherSlice";
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

      <EdButton_admin
        textAlign="center"
        padding="8px"
        margin="20px 0 0 0"
        borderRadius="5px"
        onClick={handleCreateTeacher}
      >
        Generate Key
      </EdButton_admin>
    </Wrapper>
  );
};

export default AddNewTeacher;
