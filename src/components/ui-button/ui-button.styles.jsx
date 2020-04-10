import styled, { css } from "styled-components";

const primaryStyledBtn = css`
  background-color: #1d2d35;
  color: white;
`;

const googleStyledBtn = css`
  background-color: #2962ff;
  color: white;
`;

const getButtonStyled = props => {
  if (props.type === "primary") return primaryStyledBtn;

  if (props.type === "google") return googleStyledBtn;
};

export const ButtonStyled = styled.button`
  min-width: 110px;
  border: 2px solid #1d2d35;
  height: 50px;
  font-size: 1.4rem;
  font-family: "Passion One", cursive;
  cursor: pointer;
  ${getButtonStyled}
`;
