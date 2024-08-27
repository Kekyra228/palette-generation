import styled from "styled-components";

export const PaletteBlock = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaletteContain = styled.div`
  width: 900px;
  height: 260px;
  background-color: #f7e1d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 3px 4px 4px #5f6d4a;
`;

export const PaletteBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color || "gray"};
  border: 1px solid #5f6d4a;
  cursor: pointer;

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
  bottom: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 5px;
  cursor: pointer;
`;
export const ColorIndex = styled.span`
  display: none;
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  font-size: 11px;
  z-index: 30;
`;
