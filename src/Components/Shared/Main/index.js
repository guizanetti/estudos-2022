import React, { useEffect } from "react";
import * as S from "./styles";
import { FiTrash2, FiEdit } from "react-icons/fi";

const Main = ({ data, setData }) => {
  const verificator = (media) => {
    if (media <= data.rules.reproved[1]) {
      return "Reprovado";
    }
    if (media >= data.rules.pending[0] && media <= data.rules.pending[1]) {
      return "Pendente";
    }
    if (media >= data.rules.approved[0]) {
      return "Aprovado";
    }
  };

  const getInfo = (item) => {
    const result = item.score.reduce((prev, value) => prev + value, 0);
    const media = Math.round(result / item.score.length);

    return { ...item, media: media, status: verificator(media) };
  };

  useEffect(() => {
    let array = [];
    data.listOfStudents.map((item) => {
      array.push(getInfo(item));
    });

    setData({ ...data, listOfStudents: array });
  }, []);

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
      {data.listOfStudents?.map((aluno) => {
        return (
          <S.WrapperInfo>
            <S.Info>{aluno.name}</S.Info>
            <S.Info width='16%'>
              {new Date().getFullYear() - new Date(aluno.age).getFullYear()}
            </S.Info>
            <S.Info width='6%'>{aluno.media}</S.Info>
            <S.Info width='16%'>{aluno.status}</S.Info>
            <S.Info width='16%'>{aluno.course}</S.Info>

            <S.ActionInfo>
              <FiEdit size={20} />
              <FiTrash2 size={20} />
            </S.ActionInfo>
          </S.WrapperInfo>
        );
      })}
    </S.Container>
  );
};

export default Main;
