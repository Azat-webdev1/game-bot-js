'use strict';

//проверка на число
const isNum = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

//создание игры
const сreateGame = () => {
  let randomNum = parseInt(Math.floor((Math.random() * 101)));
  console.log(randomNum);
  
  //игровой бот
  const gameBot = () => {

    //проверка, хочешь играть или нет
    let checkGameWish = (flag) => {
      if (flag) {
        gameBot()
      } else {
        alert('Спасибо, что поиграли со мной')
      }
    };
    
    let wish = prompt('Угадай число от 1 до 100');
    let userNum = prompt('Угадай число от 1 до 100');

    if (userNum === null) {
      alert('Игра окончена');
    }
    else if (!isNum(userNum) || (parseFloat(userNum) > 100)) {
      wish = confirm('Введи число от 0 до 100!')
      checkGameWish(wish);
    }
    else if (userNum === randomNum) {
      alert('Поздравляю, Вы угадали!!!');
    }
    else if (userNum > randomNum) {
      wish = confirm('Загаданное число меньше. Попробуй еще')
      checkGameWish(wish);
    }
    else if (userNum < randomNum) {
      wish = confirm('Загаданное число больше. Попробуй еще')
      checkGameWish(wish);
    }
  };
  return gameBot();
};

сreateGame();
