import {
  ColorIndex,
  PaletteBlock,
  PaletteBox,
  PaletteContain,
  ButtonCopy,
} from "./PaletteDisplay.styled";
import PropTypes from "prop-types";

const PaletteDisplay = ({ newPalette }) => {
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`HEX-код ${color} скопирован!`);
  };

  return (
    <PaletteBlock>
      <PaletteContain>
        {newPalette.length > 0 ? (
          newPalette.map((color, index) => (
            <PaletteBox key={index} color={color}>
              <ColorIndex>{index + 1}</ColorIndex>
              <ButtonCopy onClick={() => copyToClipboard(color)}>
                Скопировать цвет
              </ButtonCopy>
            </PaletteBox>
          ))
        ) : (
          <p>Палитра не сгененрирована</p>
        )}
      </PaletteContain>
    </PaletteBlock>
  );
};
PaletteDisplay.propTypes = {
  newPalette: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PaletteDisplay;
