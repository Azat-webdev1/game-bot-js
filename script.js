'use strict';

//создание игры
const сreateGame = () => {
  let lives = 10;
  
  let randomNum = parseInt(Math.floor((Math.random() * 101)));
  
  
  //проверка на число
  const isNum = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  const gameOver = () => {
    alert('Игра окончена.');
  };
  
  const letAnotherGame = () => {
    confirm('Попытки закончились, хотите сыграть еще?')
      ? сreateGame()
      : gameOver();
  };

  const gameWin = () => {
    confirm(`Поздравляю, Вы угадали!!! Осталось попыток ${lives}
      Хотели бы сыграть еще?`) ?
      сreateGame()
      : gameOver();
  };

  const getAnswer = (userNum) => {
    if (lives === 0) {
      return letAnotherGame();
    }
    userNum = +prompt('Введи число от 1 до 100.');
    console.log(`Попытка: ${userNum}`);
    if (!isNum(userNum) || userNum > 100) {
      return getAnswer();
    }

    //игровой бот
    const gameBot = (lives) => {
    
      if (userNum === randomNum) {
        gameWin();
      }
      if (userNum === 0) {
        gameOver();
        return;
      }
      if (userNum < randomNum) {
        alert(`Загаданное число больше, осталось попыток ${lives}.`);
        getAnswer();
      }
      if (userNum > randomNum) {
        alert(`Загаданное число меньше, осталось попыток ${lives}.`);
        getAnswer();
      }
      return gameBot(--lives);
    };
  };
  
  confirm('Угадай число от 1 до 100.') ? getAnswer() : gameOver();
};

сreateGame();
