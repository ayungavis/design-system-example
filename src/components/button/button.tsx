import React from "react";
import { ButtonProps } from "./button.types";
import styled from "@emotion/styled";

const StyledButton = styled.button<ButtonProps>((props) => {
  const renderVariants = () => {
    switch (props.variant) {
      default:
      case "default":
        return {
          backgroundColor: "#264653",
          border: "1px solid #264653",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#172a32",
            color: "#fff",
          },
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          border: "1px solid #264653",
          color: "#264653",
          "&:hover": {
            backgroundColor: "#eee",
            color: "#264653",
          },
        };
    }
  };

  return {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    ...renderVariants(),
  };
});

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
