'use strict';

//создание игры
const сreateGame = () => {
  let lives = 10;
  //let count = 0;

  let randomNum = parseInt(Math.floor((Math.random() * 101)));
  console.log('Загадоное число: ', randomNum);
  
  //проверка на число
  const isNum = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  //игровой бот
  const gameBot = () => {
    lives--;
    
    let userNum = +prompt('Введи число от 1 до 100.');
    
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
  
      if (lives === 0) {
        return letAnotherGame();
      }
      else if (!isNum(userNum) || userNum > 100) {
        return gameBot();
      }
      else if (userNum === randomNum) {
        gameWin();
      }
      else if (userNum === 0) {
        gameOver();
      }
      else if (userNum < randomNum) {
        alert(`Загаданное число больше, осталось попыток ${lives}.`);
        gameBot();
      }
      else if (userNum > randomNum) {
        alert(`Загаданное число меньше, осталось попыток ${lives}.`);
        gameBot();
    }
    
  };
  gameBot();
};

сreateGame();
