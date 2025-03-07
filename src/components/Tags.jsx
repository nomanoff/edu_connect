import styled from "styled-components";



export 
const Quote = styled.p`
  font-style: italic;
  margin-bottom: 15px;
`;

export const Title2 = styled.h3`
font-size: 18px;
font-weight: bold;
margin-bottom: 15px;
`;

export const Link = styled.a`
display: block;
color: white;
text-decoration: none;
margin-bottom: 8px;
font-size: 14px;
&:hover {
  text-decoration: underline;
}
`;



export const IconLink = styled.a`
color: white;
font-size: 20px;
transition: 0.3s;
&:hover {
  color: #00aaff;
}
`;



export const Copyright = styled.p`
text-align: center;
font-size: 14px;
color: #b0c4de;
`;
