import styled from "styled-components";

export const ThemeSelectorContain = styled.div`
  width: 100%;
  height: 680px;
  /* background-color: #f7e1d7; */
  margin-top: 170px;
  /* display: flex;
  justify-content: center; // Центрирует содержимое по горизонтали
  align-items: center; */
`;

export const ThemeBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  width: 100%;
  height: 100%;
  justify-content: center; // Центрирует колонки по горизонтали
  align-items: start;
`;

export const Column = styled.div`
  border-radius: 30px;
  display: flex;
  align-items: end;
  justify-content: center;

  height: 100%;
  background-color: #edafb8; // Пример фона для колонок
  padding: 20px; // Добавляет отступы внутри колонок
  box-sizing: border-box; // Учитывает padding и border в общей ширине
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
`;
