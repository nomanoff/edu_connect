import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  getStudentByIdAsync,
  selectStudent,
} from "../../utils/redux/studentSlice";
import {
  deleteParentAsync,
  getParentListAsync,
  selectParent,
} from "../../utils/redux/parentSlice";

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 49px);
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const Thead = styled.thead`
  background-color: #007bff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  border-right: 1px solid #fff;

  &:last-child {
    border-right: none;
  }
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 12px 23px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Li = styled.li`
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const P = styled.p`
  margin-bottom: 15px;
  color: #007bff;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #dc3545;
  }
`;

// Time formatter
const formatClassTime = (startTime, endTime) => {
  if (!startTime || !endTime) return "-";
  const format = (t) => t.slice(0, 5);
  return `${format(startTime)} ~ ${format(endTime)}`;
};

const ParentDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { parentList } = useSelector(selectParent);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);

  // 1. Fetch parent and children info
  useEffect(() => {
    dispatch(getParentListAsync());
  }, [dispatch]);

  // 2. Fetch all students once we have parentList
  useEffect(() => {
    const fetchAllStudents = async () => {
      if (parentList?.children?.length > 0) {
        setLoading(true);
        const studentIds = parentList.children.map((child) => child.studentId);

        try {
          const responses = await Promise.all(
            studentIds.map((id) => dispatch(getStudentByIdAsync(id)).unwrap())
          );
          setStudents(responses);
        } catch (error) {
          console.error("Error fetching student data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchAllStudents();
  }, [parentList, dispatch]);

  const goToSettings = () => {
    navigate("/parent/settings");
  };

  const toggleRow = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const handleDelete = (studentId) => {
    dispatch(deleteParentAsync(studentId))
      .unwrap()
      .then(() => {
        dispatch(getStudentByIdAsync(studentId));
      })
      .catch((error) => {
        console.log("Failed to delete children:", error);
      });
  };

  return (
    <Wrapper>
      {loading ? (
        <Message>Loading...</Message>
      ) : students.length > 0 ? (
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>Child Name</Th>
                <Th>Class Name</Th>
                <Th>Remove Children</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, index) => (
                <React.Fragment key={index}>
                  <Tr>
                    <Td>{student?.name?.trim() || "-"}</Td>
                    <Td
                      onClick={() => toggleRow(student.id)}
                      style={{ color: "#007bff" }}
                    >
                      {student?.classes?.[0]?.className || "-"}
                    </Td>
                    <Td>
                      <Button onClick={() => handleDelete(student.id)}>
                        Remove
                      </Button>
                    </Td>
                  </Tr>

                  {/* Expanded Row */}
                  {expandedRow === student.id && (
                    <Tr>
                      <Td colSpan={4}>
                        {student.classes.length > 0 ? (
                          <>
                            <ul>
                              <Div>
                                <P>Teacher Name:</P>
                                <P>Class Time:</P>
                              </Div>
                              {student.classes.map((cls, index) => (
                                <Div key={index}>
                                  <Li>{cls.teacherName}</Li>
                                  <Li>
                                    {formatClassTime(
                                      cls.startTime,
                                      cls.endTime
                                    )}
                                  </Li>
                                </Div>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Div>NO INFORMATION</Div>
                        )}
                      </Td>
                    </Tr>
                  )}
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </TableWrapper>
      ) : (
        <>
          <Message>No children added yet.</Message>
          <BackButton onClick={goToSettings}>Add More</BackButton>
        </>
      )}
    </Wrapper>
  );
};

export default ParentDashboard;
