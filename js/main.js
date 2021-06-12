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

function isStringValid(string, maxLength) {
  return string.length <= maxLength;
}

isStringValid('Текст', 140);

// Создание массива из 25 сгенерированных объектов

const PHOTO_COUNT = 25;
const MAX_PHOTO_COMMENTS = 5;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];
const NAMES = [
  'Борис',
  'Алиса',
  'Евгений',
  'Сашка',
  'Вася Пупкин',
  'Пинк Флойд',
  'Хайзенберг',
  'Данте',
  'Гордон Фриман',
  'Безумный Макс',
  'Клинт Иствуд',
  'Без Имени',
];
const DESCRIPTIONS = [
  'Пристегнуть ремни',
  'Бесконечность не предел',
  'Вечеринка в самом разгаре',
  'Скажи мое имя',
  'Опять работать',
  'Газ до отказа',
  'Сделал мой день',
  'Клин клином',
  'Вперед в прошлое',
  'Еще один кирпич в стене',
  'Завалил горизонт',
  'Карты, деньги, без стволов',
  'Час расплаты',
  'Хороший, плохой, чудной',
  'I am Batman',
  'Пришла посылка',
  'После фотошопа',
  'Момент истины',
  'Это шедевр!',
  'Смешное описание не придумал',
];

// Получаем рандомный индикатор

const getRandomUniqueInteger = (min, max) => {
  const uniqueNumbers = [];
  return function () {
    if (uniqueNumbers.length >= (max - min + 1) ) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    let uniqueNumber;
    do {
      uniqueNumber = getRandomNumber(min, max);
    } while (uniqueNumbers.includes(uniqueNumber));
    uniqueNumbers.push(uniqueNumber);
    return uniqueNumber;
  };
};

const commentIdGenerator = getRandomUniqueInteger(1, PHOTO_COUNT * MAX_PHOTO_COMMENTS);

// Получаем рандомный элемент из массива

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

// Получаем рандомное сообщение(ия) из массива MESSAGES

const getRandomMessage = () => {
  const sentenceCount = getRandomNumber(1, 2);

  return Array(sentenceCount).fill().map(() => getRandomArrayElement(MESSAGES)).join(' ');
};

// Создание объекта с id, аватаром, именем и комментарием для фото

const createComment = () => {
  return {
    id: commentIdGenerator(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomMessage(),
    name: getRandomArrayElement(NAMES),
  };
};

// Создание объекта с инфой о фото, описание, лайками и комментарии

const createPhotoDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: new Array(getRandomNumber(1, MAX_PHOTO_COMMENTS)).fill(null).map(createComment),
  };
};

const photos = new Array(PHOTO_COUNT).fill().map(() => createPhotoDescription());

console.log(photos);
