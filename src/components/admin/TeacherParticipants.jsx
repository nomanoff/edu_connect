import { useState } from "react";

const TeacherParticipants = ({ teacher }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(teacher.subject);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
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
        <span>{teacher.subject}</span>
        <button
          onClick={copyToClipboard}
          style={{
            padding: "5px 13px",
            borderRadius: "10px",
            border: "none",
            color: "#444",
            fontWeight: "700",
            cursor: "pointer",
            float: "right",
          }}
        >
          {copied ? "✅" : "copy📋"}
        </button>
      </td>
      <td
        style={{
          border: "2px solid #999",
          fontSize: "1.3rem",
          padding: "0 7px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        <button
          style={{
            padding: "5px 13px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#0082f5",
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TeacherParticipants;
