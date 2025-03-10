import { EdButton_admin } from "../EdStyled";

const TeacherParticipants = ({ teacher }) => (
  <tr
    style={{
      border: "2px solid #999",
      height: "40px",
    }}
  >
    <td
      style={{
        border: "2px solid #999",
        fontSize: "1.3rem",
        padding: "0 7px",
        fontWeight: "700",
      }}
    >
      {teacher.name}
    </td>
    <td
      style={{
        border: "2px solid #999",
        fontSize: "1.3rem",
        padding: "0 7px",
        fontWeight: "700",
      }}
    >
      {teacher.email}
    </td>
    <td
      style={{
        border: "2px solid #999",
        fontSize: "1.3rem",
        padding: "0 7px",
        fontWeight: "700",
      }}
    >
      {teacher.subject}
    </td>
    <td
      style={{
        border: "2px solid #999",
        fontSize: "1.3rem",
        padding: "0 7px",
        fontWeight: "700",
      }}
    >
      <EdButton_admin
        width={"auto"}
        height={"0px"}
        padding={"5px 9px"}
        margin={"0 7px"}
        borderRadius={"5px"}
      >
        Edit
      </EdButton_admin>
      <EdButton_admin
        width={"auto"}
        height={"0px"}
        padding={"5px 9px"}
        margin={"0 7px"}
        borderRadius={"5px"}
      >
        Remove
      </EdButton_admin>
    </td>
  </tr>
);

export default TeacherParticipants;
