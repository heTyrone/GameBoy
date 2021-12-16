'use strict';

//true
// console.log(typeof '22' === 'string');

//false
// console.log(typeof '22' === 'String');

// console.log(typeof '22' === String);

// console.log(typeof '22' === string);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let loseGame = false;

document.querySelector('.number').textContent = secretNumber;

const clickEventhandler = () => {
    const guess = document.querySelector('.guess').value;
    const guessNumber = parseStringToNumber(guess);
    console.log(guessNumber);
    if (!guessNumber) {
        noValidInput();
    } else if (guessNumber === secretNumber) {
        bingo();
    } else if (guessNumber > secretNumber) {
        isLoseGame();
        if (!loseGame) {
            biggerThanSecretNumber();
            changeScore();
        }
    } else if (guessNumber < secretNumber) {
        isLoseGame();
        if (!loseGame) {
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

const biggerThanSecretNumber = () => document.querySelector('.message').textContent = 'need smallerrrr';

const smallerThanSecretNumber = () => document.querySelector('.message').textContent = 'need biggerrrrr';

// const reduceScore = () => document.querySelector('.score').textContent = score - 1;
const displayNewScore = () => document.querySelector('.score').textContent = score;

const reduceScore = () => score--;

const changeScore = () => {
    reduceScore();
    displayNewScore();
};

const isLoseGame = () => {
    if (score === 1) {
        loseGame = true;
        score--;
        displayNewScore();
        document.querySelector('.message').textContent = 'You lost the game!🤡🤡🤡🤡🤡🤡🤡';
    };
};

