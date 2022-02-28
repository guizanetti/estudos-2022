import Button from "./Components/Shared/Button";
import Card from "./Components/Shared/Header";
import Input from "./Components/Shared/Input";
import Main from "./Components/Shared/Main/index";

import * as S from "./Home/styles";

function App() {
  return (
    <S.Container>
      <Card title='Cadastrar novo aluno'>
        <S.BoxInput>
          <Input placeholder='Nome' size={22} />
          <Input placeholder='Idade' size={22} />
          <Input placeholder='Nota' size={5} />
          <Input placeholder='Curso' size={22} />
          <Input placeholder='Status' size={22} />
        </S.BoxInput>
        <Button />
      </Card>
      <Main />
    </S.Container>
  );
}

export default App;
