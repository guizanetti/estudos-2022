import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 60vh;
  margin-top: 20px;
  border-radius: 12px;
  padding: 0px 20px;
  background-color: #fff;
  box-shadow: 0px 0px 7px 0px #0000001f;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3``;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Value = styled.p`
  margin-left: 5px;
  font-weight: 500;
`;

export const Total = styled.h4``;

export const Approved = styled.h4``;

export const Fail = styled.h4``;

export const pendding = styled.h4``;

export const WrapperSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Subtitle = styled.h4`
  width: ${({ width }) => width || "22%"};
`;

export const Separator = styled.div`
  border: 1px solid #d1d1d1;
`;

export const WrapperInfo = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.p`
  width: ${({ width }) => width || "22%"};
  font-weight: 300;
`;

export const ActionInfo = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
