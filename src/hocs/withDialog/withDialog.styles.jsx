import styled, { css } from "styled-components";

export const DialogWrapper = styled.div`
  border: 2px solid;
  background: white;
  width: 26vw;
  max-height: 300px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -20vh;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-flow: column;

  .closeBtn {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const BlockUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
`;
