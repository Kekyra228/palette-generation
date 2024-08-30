import styled from "styled-components";

export const PaletteBlock = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const PaletteContain = styled.div`
//   width: 900px;
//   height: 260px;
//   background-color: #f7e1d7;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50px;
//   box-shadow: 3px 4px 4px #5f6d4a;
// `;

export const PaletteContain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const PaletteBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color || "gray"};
  border: 1px solid #5f6d4a;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-9px); /* Поднимает блок при наведении */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  }
  &:hover button {
    display: block;
  }
  &:hover span {
    display: block;
  }
`;

export const ButtonCopy = styled.button`
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 5px;
  cursor: pointer;
  top: 100px;
`;
export const ColorIndex = styled.span`
  display: none;
  position: absolute;
  top: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  font-size: 11px;
  z-index: 30;
`;
