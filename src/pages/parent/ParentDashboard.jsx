import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    text-align: center;
    padding-top: 80px;
    position: relative;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const Button = styled.button`
    padding: 15px 30px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: background 0.3s;
    
    &:hover {
        background-color: #0056b3;
    }
`;

const ParentDashboard = () => {
    const goToSettings = () => {
        window.location.href = "parent/settings";
    };

    return (
        <Container>
            <Title>Dashboard</Title>
            <Button onClick={goToSettings}>Go to Settings</Button>
        </Container>
    );
};

export default ParentDashboard;
