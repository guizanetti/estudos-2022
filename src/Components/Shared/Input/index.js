import React from "react";
import * as S from "./styles";

const Input = ({ placeholder, size, onchange, value }) => {
  return <S.Container placeholder={placeholder} size={size} onChange={onchange} value={value} />;
};

export default Input;
