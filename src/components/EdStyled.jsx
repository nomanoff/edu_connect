import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "1.7rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "black"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || margin};
  padding: ${({ padding }) => padding || "10px 0"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || backgroundColor};
  border: ${({ border }) => border || border};
  width: ${({ width }) => width || width};
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
`;

const EdH1 = ({
  variant = "text",
  border,
  backgroundColor,
  width,
  padding,
  children,
  fontSize,
  fontWeight,
  color,
  margin,
  textAlign,
  ...props
}) => {
  if (variant === "text") {
    return (
      <StyledH1
        fontSize={fontSize}
        fontWeight={fontWeight}
        border={border}
        backgroundColor={backgroundColor}
        margin={margin}
        padding={padding}
        width={width}
        color={color}
        textAlign={textAlign}
        {...props}
      >
        {children}
      </StyledH1>
    );
  }
  return null;
};

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor || "#0082f5"};
  color: ${({ color }) => color || "#fff"};
  width: ${({ width }) => width || "100%"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  padding: ${({ padding }) => padding || "20px"};
  margin: ${({ margin }) => margin || margin};
  border-radius: ${({ borderRadius }) => borderRadius || borderRadius};
  transition: color 0.3s ease, font-size 0.2s ease;
  &:hover {
    color: #ddd;
  }
  &:active,
  &:focus {
    background-color: #0056b3;
    width: calc(100% - 40px);
    margin-left: 20px;
    border-radius: 10px;
    /* padding: 20px 0; */
  }
`;

const EdButton_admin = ({
  variant = "btn",
  children,
  backgroundColor,
  borderRadius,
  margin,
  color,
  width,
  textAlign,
  fontSize,
  padding,
  ...props
}) => {
  if (variant === "btn") {
    return (
      <StyledButton
        backgroundColor={backgroundColor}
        color={color}
        width={width}
        textAlign={textAlign}
        margin={margin}
        fontSize={fontSize}
        borderRadius={borderRadius}
        padding={padding}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
  return null;
};

export { EdH1, EdButton_admin };
