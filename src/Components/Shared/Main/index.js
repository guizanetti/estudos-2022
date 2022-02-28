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
      <S.WrapperSubtitle>
        <S.Name>Nome</S.Name>
        <S.Age>Idade</S.Age>
        <S.Note>Nota</S.Note>
        <S.Status>Status</S.Status>
        <S.Course>Curso</S.Course>
        <S.Action>Ações</S.Action>
      </S.WrapperSubtitle>

      <S.Separator />
      <S.WrapperInfo>
        <S.NameInfo>João Silva</S.NameInfo>
        <S.AgeInfo>19 anos</S.AgeInfo>
        <S.NoteInfo>8.5</S.NoteInfo>
        <S.StatusInfo>Aprovado</S.StatusInfo>
        <S.CourseInfo>Design</S.CourseInfo>

        <S.ActionInfo>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.ActionInfo>
      </S.WrapperInfo>
      <S.WrapperInfo>
        <S.NameInfo>João Silva</S.NameInfo>
        <S.AgeInfo>19 anos</S.AgeInfo>
        <S.NoteInfo>8.5</S.NoteInfo>
        <S.StatusInfo>Aprovado</S.StatusInfo>
        <S.CourseInfo>Design</S.CourseInfo>

        <S.ActionInfo>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.ActionInfo>
      </S.WrapperInfo>
      <S.WrapperInfo>
        <S.NameInfo>João Silva</S.NameInfo>
        <S.AgeInfo>19 anos</S.AgeInfo>
        <S.NoteInfo>8.5</S.NoteInfo>
        <S.StatusInfo>Aprovado</S.StatusInfo>
        <S.CourseInfo>Design</S.CourseInfo>

        <S.ActionInfo>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.ActionInfo>
      </S.WrapperInfo>
      <S.WrapperInfo>
        <S.NameInfo>João Silva</S.NameInfo>
        <S.AgeInfo>19 anos</S.AgeInfo>
        <S.NoteInfo>8.5</S.NoteInfo>
        <S.StatusInfo>Aprovado</S.StatusInfo>
        <S.CourseInfo>Design</S.CourseInfo>

        <S.ActionInfo>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.ActionInfo>
      </S.WrapperInfo>
      <S.WrapperInfo>
        <S.NameInfo>João Silva</S.NameInfo>
        <S.AgeInfo>19 anos</S.AgeInfo>
        <S.NoteInfo>8.5</S.NoteInfo>
        <S.StatusInfo>Aprovado</S.StatusInfo>
        <S.CourseInfo>Design</S.CourseInfo>

        <S.ActionInfo>
          <FiEdit size={20} />
          <FiTrash2 size={20} />
        </S.ActionInfo>
      </S.WrapperInfo>
    </S.Container>
  );
};

export default Main;
