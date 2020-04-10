import React from "react";
import "./ui-button.styles.scss";
import { ButtonStyled } from "./ui-button.styles";

export const UiButton = ({ children, handleClick, ...props }) => {
  return (
    <ButtonStyled onClick={handleClick} {...props}>
      {children}
    </ButtonStyled>
  );
};
