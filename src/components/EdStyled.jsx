import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "1.7rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "black"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || margin};
  padding: ${({ padding }) => padding || "10px 0"};
  background-color: ${({backgroundColor}) => backgroundColor || backgroundColor};
  border: ${({border}) => border || border};
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
`;

const EdH1 = ({
  variant = "text",
  border,
  backgroundColor,
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
  margin: ${({margin}) => margin || margin};
  border-radius: ${({borderRadius}) => borderRadius || borderRadius};
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

const StyledDiv = styled.div`
  padding: ${({ padding }) => padding || "20px"};
  width: ${({ width }) => width || "100%"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  box-shadow: ${({ boxShadow }) => boxShadow || "2px 2px 5px #808080"};
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color }) => color || "#000"};
  height: ${({ height }) => height || "auto"};
  display: ${({ display }) => (display ? display : display)};
  border-radius: ${({borderRadius}) => (borderRadius || borderRadius)};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : justifyContent};
`;

const EdDiv = ({
  variant = "container",
  children,
  display,
  justifyContent,
  height,
  padding,
  backgroundColor,
  boxShadow,
  borderRadius,
  color,
  width,
  margin,
  ...props
}) => {
  if (variant === "container") {
    return (
      <StyledDiv
        padding={padding}
        justifyContent={justifyContent}
        display={display}
        height={height}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        color={color}
        width={width}
        margin={margin}
        borderRadius={borderRadius}
        {...props}
      >
        {children}
      </StyledDiv>
    );
  }
  return null;
};

export default EdDiv;
export { EdH1, EdButton_admin };
