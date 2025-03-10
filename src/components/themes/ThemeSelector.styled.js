import styled from "styled-components";

export const ThemeSelectorContain = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: #f7e1d7; */
  margin-top: 80px;
  /* display: flex;
  justify-content: center; // Центрирует содержимое по горизонтали
  align-items: center; */
`;

// export const ThemeBlock = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 18px;
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: start;
// `;

// export const Column = styled.div`
//   border-radius: 30px;
//   display: flex;
//   align-items: end;
//   justify-content: center;
//   height: 100%;
//   background-color: #edafb8;
//   padding: 20px;
//   box-sizing: border-box;
// `;

export const Button = styled.button`
  background-color: #b0c4b1;
  color: white;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #45a049;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400%;
    height: 400%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &:hover:before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ThemeBlock = styled.div`
  width: 300px;
  height: 400px;
  background-color: #edafb8;
  align-items: center;
  justify-content: center;
`;

export const SelectionBlockCommon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  margin-bottom: 50px;
`;

export const SelectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
`;

export const BlockRange = styled.div``;

export const SliderFactor = styled.input`
  width: 100%;
  margin: 10px 0;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: #ffff;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 12px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
`;
export const DropdownThemes = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  margin: 10px 0;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

export const Option = styled.option`
  padding: 10px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
`;
export const ThemeImage = styled.img`
  width: 300px;
  height: 400px;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 20px;
  display: block;
  box-shadow: 3px 4px 4px #5f6d4a;
`;
