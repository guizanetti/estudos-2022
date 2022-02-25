import Button from "./Components/Shared/Button";
import Card from "./Components/Shared/Header";
import Main from "./Components/Shared/Main/indes";

import * as S from "./Home/styles";

function App() {
  return (
    <S.Container>
      <Card title='Cadastrar novo aluno'>
        <S.BoxInput>
          <input placeholder='Nome' size={30} />
          <input placeholder='Idade' size={5} />
          <input placeholder='Nota' size={15} />
          <input placeholder='Curso' size={25} />
          <input placeholder='Status' size={25} />
        </S.BoxInput>
        <Button />
      </Card>
      <Main />
    </S.Container>
  );
}

export default App;
