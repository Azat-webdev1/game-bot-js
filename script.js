'use strict';

//проверка на число
const isNum = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

//создание игры
const сreateGame = () => {
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);
  let userNum = prompt('Угадай число от 1 до 100');
  
  //игровой бот
  const gameBot = () => {

    //проверка, хочешь играть или нет
    let checkGameWish = (flag) => {
      if (flag) {
        getNumber()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    };

    if (isNum(userNum > randomNum)) {
      alert('Загаданное число меньше');
      //+prompt('Ввести новый вариант');
    } else if (isNum(userNum < randomNum)) {
      alert('Загаданное число больше');
      //+prompt('Ввести новый вариант');
    } else if (typeof userNum === 'string') {
      alert('Введи число!');
      //+prompt('Ввести новый вариант');
    } else if (userNum === null) {
      alert('Игра окончена');
    } else if (isNum(userNum === randomNum)) {
      alert('Поздравляю, Вы угадали!!!')
    }
  };
  
  return gameBot();
};

сreateGame();