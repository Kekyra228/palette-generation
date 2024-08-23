export function getRandomColors(color, factor) {
  if (typeof color !== "string") return "#FFFFFF";
  let newColor = "#";
  for (let i = 1; i < 7; i += 2) {
    const colorComponent = parseInt(color.substring(i, i + 2), 16); // Преобразуем компонент цвета из HEX в число
    const colorItem = Math.min(255, Math.max(0, colorComponent + factor));
    newColor += colorItem.toString(16).padStart(2, "0"); // Преобразуем обратно в HEX и добавляем к итоговому цвету
  }
  return newColor;
}

// извлекает массив цветов из выбранной темы
export function generateThemedPalette(baseColors, factor) {
  return baseColors.map((color) => getRandomColors(color, factor)); //проходит по каждому цвету и преобразует его с нужным фактором и получаем новый массив цветов
}
