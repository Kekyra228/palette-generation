import { useState } from "react";
import PaletteDisplay from "../palette/PaletteDisplay";
import {
  BlockRange,
  Button,
  ButtonContain,
  SelectionBlock,
  SelectionBlockCommon,
  ThemeImage,
  ThemeSelectorContain,
} from "./ThemeSelector.styled";
import { palettes } from "../../palettes";
import { generateThemedPalette } from "../../utils";
import nature from "../../assets/nature.jpg";
import nebo from "../../assets/nebo.jpg";
import food from "../../assets/food.jpg";
import city from "../../assets/city.jpg";
import minerals from "../../assets/minerals.jpg";

const ThemeSelector = () => {
  const themeImages = {
    nature: nature,
    sky: nebo,
    food: food,
    city: city,
    minerals: minerals,
  };
  const [factor, setFactor] = useState(20);
  const [newPalette, setNewPalette] = useState([]);
  const [theme, setTheme] = useState("nature");

  const generate = () => {
    if (theme) {
      const basePalette = palettes[theme];
      const newGeneratePalette = generateThemedPalette(basePalette, factor);
      setNewPalette(newGeneratePalette);
    }
  };
  return (
    <ThemeSelectorContain>
      <SelectionBlockCommon>
        <SelectionBlock>
          <BlockRange>
            <input
              type="range"
              min="-50"
              max="50"
              value={factor}
              onChange={(e) => setFactor(parseInt(e.target.value))}
            />
            <p>Насыщенность: {factor}</p>
            <select onChange={(e) => setTheme(e.target.value)}>
              <option value="nature">Природа</option>
              <option value="sky">Небо</option>
              <option value="city">Городская среда</option>
              <option value="food">Еда</option>
              <option value="minerals">Минералы и самоцветы</option>
            </select>
          </BlockRange>

          <Button onClick={generate}>Сгенерировать</Button>
        </SelectionBlock>
        {theme && <ThemeImage src={themeImages[theme]} alt={theme} />}
        <PaletteDisplay newPalette={newPalette} />
      </SelectionBlockCommon>
    </ThemeSelectorContain>
  );
};

export default ThemeSelector;
