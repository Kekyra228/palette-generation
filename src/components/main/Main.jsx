import ThemeSelector from "../themes/ThemeSelector";
import { MainBlock, MainCont, Title } from "./Main.styled";

function Main() {
  return (
    <MainBlock>
      <MainCont>
        <Title>Генератор палитр</Title>
        <h3>Для твоего вдохновения!</h3>
      </MainCont>
      <ThemeSelector />
    </MainBlock>
  );
}

export default Main;
