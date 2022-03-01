import React, { useEffect } from "react";
import * as S from "./styles";
import { FiTrash2, FiEdit } from "react-icons/fi";

const Main = ({ data, setData }) => {
  let NewArray = [];

  const media = (nota, id) => {
    const result = nota.reduce((prev, value) => prev + value, 0);
    const total = Math.round(result / nota.length);
    NewArray = data.listOfStudents?.map((i) => (i.id === id ? { ...i, media: total } : i));

    return total;
  };

  useEffect(() => {
    setTimeout(() => {
      setData({
        ...data,
        listOfStudents: NewArray,
      });
    }, 1000);
  }, []);

  console.log(data);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Alunos</S.Title>
        <S.BoxHeader>
          <S.BoxInfo>
            <S.Total>Total:</S.Total>
            <S.Value>19</S.Value>
          </S.BoxInfo>
          <S.BoxInfo>
            <S.Total>Aprovados:</S.Total>
            <S.Value>19</S.Value>
          </S.BoxInfo>
          <S.BoxInfo>
            <S.Total>reprovados:</S.Total>
            <S.Value>19</S.Value>
          </S.BoxInfo>
          <S.BoxInfo>
            <S.Total>pendentes:</S.Total>
            <S.Value>19</S.Value>
          </S.BoxInfo>
        </S.BoxHeader>
      </S.Header>
      <S.WrapperSubtitle>
        <S.Subtitle>Nome</S.Subtitle>
        <S.Subtitle width='16%'>Idade</S.Subtitle>
        <S.Subtitle width='6%'>Nota</S.Subtitle>
        <S.Subtitle width='16%'>Status</S.Subtitle>
        <S.Subtitle width='16%'>Curso</S.Subtitle>
        <S.Subtitle width='5%'>Ações</S.Subtitle>
      </S.WrapperSubtitle>

      <S.Separator />
      {data.listOfStudents?.map((item) => (
        <S.WrapperInfo>
          <S.Info>{item.name}</S.Info>
          <S.Info width='16%'>18</S.Info>
          <S.Info width='6%'>{media(item.score, item.id)}</S.Info>
          <S.Info width='16%'>{item.approved}</S.Info>
          <S.Info width='16%'>{item.course}</S.Info>

          <S.ActionInfo>
            <FiEdit size={20} />
            <FiTrash2 size={20} />
          </S.ActionInfo>
        </S.WrapperInfo>
      ))}
    </S.Container>
  );
};

export default Main;
