import React from "react";
import styled from "styled-components";

type ButtonProps = {
  color?: string;
  bgColor?: string;
  borderColor?: string;
  padding?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  borderRadius?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// Styled component using transient props ($)
const ButtonComponent = styled.button<{
  $color?: string;
  $bgColor?: string;
  $borderColor?: string;
  $padding?: string;
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}>`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$borderColor || "gray"};
  padding: ${(props) => props.$padding || "10px 20px"};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$borderRadius || "8px"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonComponent
      $color={props.color}
      $bgColor={props.bgColor}
      $borderColor={props.borderColor}
      $padding={props.padding}
      $width={props.width}
      $height={props.height}
      $borderRadius={props.borderRadius}
      onClick={props.onClick}
      className={props.className}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
