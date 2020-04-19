import styled, { css } from "styled-components";

const visiblePanel = css`
  display: block;
`;

const noVisiblePanel = css`
  display: none;
`;

const setVisible = ({ visible }) => {
  return visible ? visiblePanel : noVisiblePanel;
};

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectPanel = styled.div`
  border: 1px solid;
  padding: 5px;
  z-index: -1;
  width: 100%;

  ${setVisible}
`;

export const SelectOverlay = styled.div`
  border: 1px solid;
  padding: 5px;
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;

  ${setVisible}
`;

export const SelectOption = styled.div`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 900;
`;
