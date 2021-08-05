'use strict';

const isNum = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const gameBot = () => {
  let randomNum = parseInt(Math.random() * 100);
  let userNum = +prompt('Угадай число от 1 до 100');

};