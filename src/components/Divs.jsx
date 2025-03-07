import styled from "styled-components";


export const Section = styled.section`
  text-align: center;
  padding: 50px 10%;
`;


export const CardsContainer = styled.div`
display: flex;
justify-content: center;
align-items: stretch;
gap: 50px;
flex-wrap: wrap;
width: 100%;
`;

export const Card = styled.div`
background: #e3f2fd;
padding: 20px;
border-radius: 10px;
max-width: 300px;
min-height: 180px;
text-align: left;
font-family: Arial, sans-serif;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
`;






export const UserInfo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

export const Avatar = styled.div`
width: 40px;
height: 40px;
background: #007bff;
color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`;


export 
const Name = styled.div`
  font-weight: bold;
`;


export const Role = styled.div`
font-size: 14px;
color: gray;
`;

export const FlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;


export const CTAContainer = styled.div`
background: linear-gradient(to right, #007bff, #00aaff);
color: white;
text-align: center;
padding: 60px 10px;
width: 1120px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

`;



export const FooterContainer = styled.footer`
background: #00274d;
color: white;
padding: 40px 10%;
text-align: left;
width: 80%;
height: 270px;
margin-top: 100px;
`;


export const FooterContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
`;


export const FooterSection = styled.div`
flex: 1;
min-width: 200px;
`;




export const SocialIcons = styled.div`
display: flex;
gap: 15px;
`;

