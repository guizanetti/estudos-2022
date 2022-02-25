import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
`;

export const BoxButton = styled.button`
  display: flex;
  width: 142px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #01affa;
  background-color: #fff;
  margin: 10px;
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

export const Clear = styled.text`
  color: #01affa;
  font-weight: 700px;
  size: 17px;
`;

export const Add = styled.text`
  color: #fff;
  font-weight: 700px;
  size: 17px;
`;
