import React from "react";
import * as S from "./styles";
import { FiTrash2, FiEdit } from "react-icons/fi";

const Main = () => {
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

      <S.WrapperInfo>
        <S.NameInfo>Nome</S.NameInfo>
        <S.AgeInfo>Idade</S.AgeInfo>
        <S.NoteInfo>Nota</S.NoteInfo>
        <S.StatusInfo>Status</S.StatusInfo>
        <S.CourseInfo>Curso</S.CourseInfo>
        <S.ActionInfo>Ações</S.ActionInfo>
      </S.WrapperInfo>

      <S.Wrapper>
        <S.Name>João Silva</S.Name>
        <S.Age>19 anos</S.Age>
        <S.Note>8.5</S.Note>
        <S.Status>Aprovado</S.Status>
        <S.Course>Design</S.Course>

        <S.Action>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.Action>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
