'use strict';

//true
// console.log(typeof '22' === 'string');

//false
// console.log(typeof '22' === 'String');

// console.log(typeof '22' === String);

// console.log(typeof '22' === string);

const clickEventhandler = () => {
    const guess = document.querySelector('.guess').value;
    const guessNumber = parseStringToNumber(guess);
    console.log(guessNumber);
    if (!guessNumber) {
        noValidInput();
    };
};

const clickCheckButton = document.querySelector('.check').addEventListener('click', clickEventhandler);

// const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 'Input is blank';
const parseStringToNumber = (input) => input !== '' && typeof input === 'string' ? Number(input) : 0;

const noValidInput = () => document.querySelector('.message').textContent = '🤷‍♂️🤷‍♂️🤷‍♂️🤷‍♂️ No number!';

