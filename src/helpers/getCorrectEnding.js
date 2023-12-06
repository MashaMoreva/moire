export default function getCorrectEnding(number) {
  const mod100 = number % 100;
  const mod10 = number % 10;

  if (mod100 >= 11 && mod100 <= 14) {
    return ' товаров';
  }
  if (mod10 === 1) {
    return ' товар';
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return ' товара';
  }
  return ' товаров';
}
