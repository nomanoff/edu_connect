import styled from "styled-components";

const TextPWrapper = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  color: ${({ color }) => (color ? color : "black")};
`;

const EdText = ({
  variant = "text",
  children,
  fontSize,
  color,
  fontWeight,
  margin,
  ...props
}) => {
  if (variant === "text") {
    return (
      <TextPWrapper
        {...props}
        color={color}
        fontWeight={fontWeight}
        fontSize={fontSize}
        margin={margin}
      >
        {children}
      </TextPWrapper>
    );
  }
};

export default EdText;
