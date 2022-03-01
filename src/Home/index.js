import { useState } from "react";
import Card from "../Components/Shared/Header";
import Button from "../Components/Shared/Button";
import Input from "../Components/Shared/Input";
import Main from "../Components/Shared/Main/index";

import * as S from "./styles";

function Home({ array, setArray }) {
  const [data, setData] = useState({});

  return (
    <S.Container>
      <Card title='Cadastrar novo aluno'>
        <S.BoxInput>
          <Input
            placeholder='Nome'
            size={20}
            value={data.name}
            onchange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            placeholder='Idade'
            size={20}
            value={data.age}
            onchange={(e) => setData({ ...data, age: e.target.value })}
          />
          <Input
            placeholder='Nota'
            size={5}
            value={data.note}
            onchange={(e) => setData({ ...data, note: e.target.value })}
          />
          <Input
            placeholder='Curso'
            size={20}
            value={data.course}
            onchange={(e) => setData({ ...data, course: e.target.value })}
          />
          <Input
            placeholder='Status'
            size={20}
            value={data.status}
            onchange={(e) => setData({ ...data, status: e.target.value })}
          />
        </S.BoxInput>
        <Button />
      </Card>
      <Main data={array} setData={setArray} />
    </S.Container>
  );
}

export default Home;
