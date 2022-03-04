import React from "react";
import * as S from "./styles";

const Input = ({ placeholder, size, onchange, value, type }) => {
  return (
    <S.Container
      placeholder={placeholder}
      size={size}
      onChange={onchange}
      value={value}
      type={type}
    />
  );
};

export default Input;
