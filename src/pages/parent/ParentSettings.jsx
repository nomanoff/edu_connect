import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.h2`
  color: #007bff;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 15px;
  border: 1px solid #ddd;
  margin: 0 10px;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const MessageBox = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const ParentSettings = () => {
  const [myChildren, setMyChildren] = useState([]);

  useEffect(() => {
    // Fetch the data from the server
    fetch("http://localhost:3001/api/student")
      .then((res) => res.json())
      .then((data) => {
        setMyChildren(data);
      });
  });

  console.log(myChildren);

  return (
    <Container>
      <Header>Child: Alice Johnson</Header>

      {myChildren.length === 0 ? (
        <>
          <button>find my child</button>
        </>
      ) : (
        <>
          <ChildrenList myChildren={myChildren} />
        </>
      )}
    </Container>
  );
};

export default ParentSettings;
