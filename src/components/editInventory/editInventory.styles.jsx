import styled, { css } from "styled-components";

export const EditInventoryWrapper = styled.div`
  display: flex;
  flex-flow: column;

  h2 {
    margin-bottom: 25px;
  }

  form {
    & > * {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & > * {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
