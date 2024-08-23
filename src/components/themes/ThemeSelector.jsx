import { useState } from "react";
import PaletteDisplay from "../palette/PaletteDisplay";
import {
  Button,
  Column,
  ThemeBlock,
  ThemeSelectorContain,
} from "./ThemeSelector.styled";
import { palettes } from "../../palettes";
import { generateThemedPalette } from "../../utils";

const ThemeSelector = () => {
  const [factor, setFactor] = useState(10);
  const [newPalette, setNewPalette] = useState([]);
  const [theme, setTheme] = useState("");

  // функция генерации палитры по выбранной теме
  // const handleChooseTheme = (selectedTheme) => {
  //   setTheme(selectedTheme);
  //   const basePalette = palettes[selectedTheme];
  //   const newGeneratePalette = generateThemedPalette(basePalette, factor);
  //   setNewPalette(newGeneratePalette);
  //   console.log(newGeneratePalette);
  // };
  const generate = () => {
    if (theme) {
      const basePalette = palettes[theme];
      const newGeneratePalette = generateThemedPalette(basePalette, factor);
      setNewPalette(newGeneratePalette);
    }
  };
  return (
    <ThemeSelectorContain>
      <input
        type="range"
        min="-50"
        max="50"
        value={factor}
        onChange={(e) => setFactor(parseInt(e.target.value))}
      />
      <p>Насыщенность: {factor}</p>
      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="nature">Nature</option>
        <option value="sky">Sky</option>
        <option value="city">City</option>
        <option value="food">Food</option>
        <option value="minerals">Minerals</option>
      </select>
      <p>Тема: {theme}</p>
      {/* <ThemeBlock>
        <Column>
          <p>Природа</p>
          <Button>
            <p>Выбрать эту тему</p>
          </Button>
        </Column>
        <Column>
          <p>Небо</p>
          <Button>
            <p>Выбрать эту тему</p>
          </Button>
        </Column>
        <Column>
          <p>Городская среда</p>
          <Button>
            <p>Выбрать эту тему</p>
          </Button>
        </Column>
        <Column>
          <p>Еда</p>
          <Button>
            <p>Выбрать эту тему</p>
          </Button>
        </Column>
        <Column>
          <p>Минералы и самоцветы</p>
          <Button>
            <p>Выбрать эту тему</p>
          </Button>
        </Column>
      </ThemeBlock> */}
      <button onClick={generate}>Сгенерировать</button>
      <PaletteDisplay newPalette={newPalette} />
    </ThemeSelectorContain>
  );
};

export default ThemeSelector;
