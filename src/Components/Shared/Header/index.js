import * as S from "./styles";

const Card = ({ title, children }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default Card;
