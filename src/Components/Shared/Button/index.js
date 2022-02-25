import React from "react";
import * as S from "./styles";

const Button = () => {
  return (
    <S.Container>
      <S.BoxButton>
        <S.Clear>Limpar</S.Clear>
      </S.BoxButton>
      <S.BoxButton add>
        <S.Add>Adicionar</S.Add>
      </S.BoxButton>
    </S.Container>
  );
};

export default Button;
