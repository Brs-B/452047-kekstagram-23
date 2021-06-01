// Рандомное целое число из заданного интервала

function getRandomNumber(min, max) {
  if (max <= min) {
    [min, max] = [max, min];
  }
  if (min <= 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber(0, 99);

// Функция максимальной длины строки

function stringValid(string, maxLength) {
  return string.length <= maxLength;
}

stringValid('Текст', 140);
