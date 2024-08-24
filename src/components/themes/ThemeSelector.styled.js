import styled from "styled-components";

export const ThemeSelectorContain = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: #f7e1d7; */
  margin-top: 170px;
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

export const ButtonContain = styled.button`
  &:hover .copy-button {
    display: block;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #b0c4b1;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 30px;
  & p {
    color: #4a5759;
  }
  &:hover {
    background-color: #65a769;
    color: #fff;
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
  gap: 200px;
`;

export const SelectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 200px;
`;

export const BlockRange = styled.div``;

export const ThemeImage = styled.img`
  width: 450px;
  height: 550px;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: block;
`;
