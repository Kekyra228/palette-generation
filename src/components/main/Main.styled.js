import styled from "styled-components";
import banner from "../../assets/banner.png";

export const MainBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 80px;
  box-sizing: border-box;
  /* background-image: url(${banner});
  background-repeat: no-repeat; */
`;

export const MainCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const ImgContain = styled.div`
  width: 400px; /* Задайте нужный размер */
  height: 400px; /* Задайте нужный размер */
  background-image: url("../../assets/palette.jpg"); /* Путь к вашему изображению */
  background-size: contain; /* Масштабирует изображение, чтобы оно полностью помещалось в блоке */
  background-repeat: no-repeat; /* Изображение не повторяется */
  z-index: 10;
  background-color: transparent;
`;
