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
            type='date'
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
        </S.BoxInput>
        <Button
          clear={() => {
            setData({ name: "", age: "", note: "", course: "" });
          }}
          add={() => {
            const format = {
              id: Math.round(Math.random() * 1000),
              name: data.name,
              age: new Date(data.age),
              score: data.note.split(",").map((i) => Number(i)),
              course: data.course,
            };
            const newArray = { ...array, listOfStudents: [...array.listOfStudents, format] };
            setArray(newArray);
            localStorage.setItem("data", JSON.stringify(newArray));
          }}
        />
      </Card>
      <Main data={array} setData={setArray} />
    </S.Container>
  );
}

export default Home;
