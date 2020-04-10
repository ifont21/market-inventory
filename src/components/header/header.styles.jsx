import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = css`
  min-width: 110px;
  border: 2px solid #1d2d35;
  height: 50px;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const PrimaryBtnLink = css`
  background-color: #1d2d35;
  color: white;
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 10;
  align-items: center;
`;

export const OptionLinkContainer = styled.div`
  display: flex;
  font-weight: 900;
`;

export const OptionLink = styled(Link)`
  margin-right: 50px;
  ${({ isbutton }) => `${isbutton ? ButtonLink : ""}`}
  ${({ primary }) => `${primary ? PrimaryBtnLink : ""}`}
`;
