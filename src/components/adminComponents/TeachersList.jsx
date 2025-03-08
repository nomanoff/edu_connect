import EdDiv, { EdH1 } from "../EdStyled";
import TeacherParticipants from "./TeacherParticipants";

const TeachersList = () => {
  const teachers = [
    { name: "John Doe", email: "john@example.com", subject: "Mathematics" },
    { name: "Sarah Smith", email: "sarah@example.com", subject: "Science" },
  ];
  return (
    <EdDiv width={"calc(100% - 40px)"} borderRadius={"5px"} margin={"10px 0"}>
      <EdH1
        textAlign={"left"}
        padding={"0"}
        fontSize={"1.3rem"}
        fontWeight={"700"}
        margin={"0px"}
      >
        Teachers List
      </EdH1>
      <EdDiv boxShadow={"none"} padding={"0"}>
        <table
          style={{
            width: "100%",
          }}
        >
          <thead
            style={{
              border: "2px solid #000",
              backgroundColor: "#0082f5",
              color: "#fff",
              height: "40px",
            }}
          >
            <tr>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Name
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Email
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Subject
              </th>
              <th
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  border: "2px solid #999",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <TeacherParticipants key={index} teacher={teacher} />
            ))}
          </tbody>
        </table>
      </EdDiv>
    </EdDiv>
  );
};

export default TeachersList;
