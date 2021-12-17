'use strict';

//true
// console.log(typeof '22' === 'string');

//false
// console.log(typeof '22' === 'String');

// console.log(typeof '22' === String);

// console.log(typeof '22' === string);

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateSecretNumber();
let score = 20;
let highestScore = 0;
let ifLoseGame = false;

const showSecretNumber = () => document.querySelector('.number').textContent = secretNumber;

const enlargeTheDisplaySectionOfSecretNumber = () => document.querySelector('.number').style.width = '30rem';

const secretNumberDisplay = () => {
    showSecretNumber();
    enlargeTheDisplaySectionOfSecretNumber();
}

const clickEventhandlerForCheckButton = () => {
    const guess = document.querySelector('.guess').value;
    const guessNumber = parseStringToNumber(guess);
    console.log(guessNumber);
    if (!guessNumber) {
        noValidInput();
    } else if (guessNumber === secretNumber) {
        winTheGame();
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

const clickCheckButton = document.querySelector('.check').addEventListener('click', clickEventhandlerForCheckButton);

// const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 'Input is blank';
const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 0;

const noValidInput = () => document.querySelector('.message').textContent = '🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️ No number!';

const bingo = () => document.querySelector('.message').textContent = '💃💃💃💃💃💃💃💃💃💃💃💃💃💃💃 Congratulations!!!';

const defeat = () => document.querySelector('.message').textContent = 'You lost the game!🤡🤡🤡🤡🤡🤡🤡';

const recordScoreIfHighestSoFar = () => score > highestScore ? highestScore = score : highestScore;

const updateHighestScoreOnTheScreen = () => document.querySelector('.highscore').textContent = highestScore;

const gameOver = () => {
    defeat();
    secretNumberDisplay();
    loseEffect();
};

const winEffect = () => document.querySelector('body').style.backgroundColor = '#60b347';

const loseEffect = () => document.querySelector('body').style.backgroundColor = 'grey';

const winTheGame = () => {
    bingo();
    recordScoreIfHighestSoFar();
    updateHighestScoreOnTheScreen();
    secretNumberDisplay();
    winEffect();
};

const biggerThanSecretNumber = () => document.querySelector('.message').textContent = 'need smallerrrr';

const smallerThanSecretNumber = () => document.querySelector('.message').textContent = 'need biggerrrrr';

// const reduceScore = () => document.querySelector('.score').textContent = score - 1;
const updateScoreOnTheScreen = () => document.querySelector('.score').textContent = score;

const reduceScore = () => score--;

const changeScore = () => {
    reduceScore();
    updateScoreOnTheScreen();
};

const isLoseGame = () => {
    if (score === 1) {
        ifLoseGame = true;
        score--;
        updateScoreOnTheScreen();
        gameOver()
    };
};

// const clickEventhandlerForAgainButton = () => location.reload();
const clickEventhandlerForAgainButton = () => {
    initializeAllAtrribute();
    initializeAllTextContent();
    initalizeAllStyle();
};

const clickAgainButton = document.querySelector('.again').addEventListener('click', clickEventhandlerForAgainButton);


const initializeAllAtrribute = () => {
    score = 20;
    ifLoseGame = false;
    secretNumber = generateSecretNumber();
};

const initializeAllTextContent = () => {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
};

const initalizeAllStyle = () => {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};
