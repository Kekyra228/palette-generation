import { PaletteBlock, PaletteContain } from "./PaletteDisplay.styled";
import PropTypes from "prop-types";

const PaletteDisplay = ({ newPalette }) => {
  console.log(newPalette);
  return (
    <PaletteBlock>
      <PaletteContain>
        <h4>Палитра</h4>
        {newPalette.length > 0 ? (
          newPalette.map((color, index) => (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                border: "1px solid #000",
              }}
            ></div>
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
