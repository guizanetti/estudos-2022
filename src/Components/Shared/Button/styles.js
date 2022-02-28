import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
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

export const Clear = styled.text`
  width: 51px;
  height: 20px;
  color: #01affa;
  font-size: 16px;
  font-weight: bold;
  font-weight: 700px;
  font-style: normal;
  font-family: Roboto;
`;

export const Add = styled.text`
  width: 69px;
  height: 19px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-weight: 700px;
  font-style: normal;
  font-family: Roboto;
`;
