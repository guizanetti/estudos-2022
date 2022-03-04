import React from "react";
import * as S from "./styles";

const Button = ({ add, clear }) => {
  return (
    <S.Container>
      <S.BoxButton onClick={clear}>
        <S.Clear>Limpar</S.Clear>
      </S.BoxButton>
      <S.BoxButton add onClick={add}>
        <S.Add>Adicionar</S.Add>
      </S.BoxButton>
    </S.Container>
  );
};

export default Button;
