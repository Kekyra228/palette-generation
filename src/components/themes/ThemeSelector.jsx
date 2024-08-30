import { useState } from "react";
import PaletteDisplay from "../palette/PaletteDisplay";
import {
  BlockRange,
  Button,
  DropdownThemes,
  Option,
  SelectionBlock,
  SelectionBlockCommon,
  SliderFactor,
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
            <p>Насыщенность: {factor}</p>
            <SliderFactor
              type="range"
              min="-50"
              max="50"
              value={factor}
              onChange={(e) => setFactor(parseInt(e.target.value))}
            />
            <p>Тема:</p>
            <DropdownThemes onChange={(e) => setTheme(e.target.value)}>
              <Option value="nature">Природа</Option>
              <Option value="sky">Небо</Option>
              <Option value="city">Городская среда</Option>
              <Option value="food">Еда</Option>
              <Option value="minerals">Минералы и самоцветы</Option>
            </DropdownThemes>
          </BlockRange>

          <Button onClick={generate}>Сгенерировать</Button>
        </SelectionBlock>
        {theme && <ThemeImage src={themeImages[theme]} alt={theme} />}
      </SelectionBlockCommon>
      <PaletteDisplay newPalette={newPalette} />
    </ThemeSelectorContain>
  );
};

export default ThemeSelector;
