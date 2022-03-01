import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: flex-end;
`;

export const BoxButton = styled.button`
  display: flex;
  width: 15%;
  padding: 1em 2em;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #01affa;
  background-color: #fff;
  margin-left: 10px;
  ${({ add }) =>
    add &&
    css`
      color: #fff;
      background-color: #01affa;
    `}
  &:hover {
    cursor: pointer;
  }
`;

export const Clear = styled.p`
  color: #01affa;
  font-size: 16px;
  font-weight: bold;
  font-weight: 700px;
  font-style: normal;
  font-family: Roboto;
`;

export const Add = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-weight: 700px;
  font-style: normal;
  font-family: Roboto;
`;
