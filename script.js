'use strict';

const clickEventhandler = () => console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', clickEventhandler);


