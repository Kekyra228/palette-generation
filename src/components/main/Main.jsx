import ThemeSelector from "../themes/ThemeSelector";
import { MainBlock, MainCont } from "./Main.styled";

function Main() {
  return (
    <MainBlock>
      <MainCont>
        <h1>Генератор палитр</h1>
        <h3>Для твоего вдохновения!</h3>
      </MainCont>

      <ThemeSelector />
    </MainBlock>
  );
}

export default Main;
