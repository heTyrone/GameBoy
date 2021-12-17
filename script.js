'use strict';

//true
// console.log(typeof '22' === 'string');

//false
// console.log(typeof '22' === 'String');

// console.log(typeof '22' === String);

// console.log(typeof '22' === string);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let ifLoseGame = false;

document.querySelector('.number').textContent = secretNumber;

const clickEventhandler = () => {
    const guess = document.querySelector('.guess').value;
    const guessNumber = parseStringToNumber(guess);
    console.log(guessNumber);
    if (!guessNumber) {
        noValidInput();
    } else if (guessNumber === secretNumber) {
        win();
    } else if (guessNumber > secretNumber) {
        isLoseGame();
        if (!ifLoseGame) {
            biggerThanSecretNumber();
            changeScore();
        }
    } else if (guessNumber < secretNumber) {
        isLoseGame();
        if (!ifLoseGame) {
            smallerThanSecretNumber();
            changeScore();
        }
    };
};

const clickCheckButton = document.querySelector('.check').addEventListener('click', clickEventhandler);

// const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 'Input is blank';
const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 0;

const noValidInput = () => document.querySelector('.message').textContent = '🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️ No number!';

const bingo = () => document.querySelector('.message').textContent = '💃💃💃💃💃💃💃💃💃💃💃💃💃💃💃 Congratulations!!!';

const defeat = () => document.querySelector('.message').textContent = 'You lost the game!🤡🤡🤡🤡🤡🤡🤡';

const gameOver = () => {
    defeat();
    loseEffect();
};

const winEffect = () => document.querySelector('body').style.backgroundColor = '#60b347';

const loseEffect = () => document.querySelector('body').style.backgroundColor = 'grey';

const win = () => {
    bingo();
    winEffect();
};

const biggerThanSecretNumber = () => document.querySelector('.message').textContent = 'need smallerrrr';

const smallerThanSecretNumber = () => document.querySelector('.message').textContent = 'need biggerrrrr';

// const reduceScore = () => document.querySelector('.score').textContent = score - 1;
const updateScore = () => document.querySelector('.score').textContent = score;

const reduceScore = () => score--;

const changeScore = () => {
    reduceScore();
    updateScore();
};

const isLoseGame = () => {
    if (score === 1) {
        ifLoseGame = true;
        score--;
        updateScore();
        gameOver()
    };
};

