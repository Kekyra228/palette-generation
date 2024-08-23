import {
  PaletteBlock,
  PaletteBox,
  PaletteContain,
} from "./PaletteDisplay.styled";
import PropTypes from "prop-types";

const PaletteDisplay = ({ newPalette }) => {
  return (
    <PaletteBlock>
      <PaletteContain>
        <h4>Палитра</h4>
        {newPalette.length > 0 ? (
          newPalette.map((color, index) => (
            <PaletteBox key={index} color={color}></PaletteBox>
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
