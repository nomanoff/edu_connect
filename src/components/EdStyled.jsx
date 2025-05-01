import styled from "styled-components";

// Styled H1
const StyledH1 = styled.h1`
  font-size: ${({ $fontSize }) => $fontSize || "1.7rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  color: ${({ $color }) => $color || "black"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};
  margin: ${({ $margin }) => $margin || "0"};
  padding: ${({ $padding }) => $padding || "10px 0"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "transparent"};
  border: ${({ $border }) => $border || "none"};
  width: ${({ $width }) => $width || "auto"};
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
}) => {
  if (variant === "text") {
    return (
      <StyledH1
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $border={border}
        $backgroundColor={backgroundColor}
        $margin={margin}
        $padding={padding}
        $width={width}
        $color={color}
        $textAlign={textAlign}
      >
        {children}
      </StyledH1>
    );
  }
  return null;
};

// Styled Button
const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#0082f5"};
  color: ${({ $color }) => $color || "#fff"};
  width: ${({ $width }) => $width || "100%"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-size: ${({ $fontSize }) => $fontSize || "1rem"};
  padding: ${({ $padding }) => $padding || "20px"};
  margin: ${({ $margin }) => $margin || "0"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
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
        $backgroundColor={backgroundColor}
        $color={color}
        $width={width}
        $textAlign={textAlign}
        $margin={margin}
        $fontSize={fontSize}
        $borderRadius={borderRadius}
        $padding={padding}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
  return null;
};

export { EdH1, EdButton_admin };
