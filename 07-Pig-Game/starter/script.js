'use strict';

const firstScore = document.getElementById('score--0');
const secondScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');

// Hide the dice element
dice.classList.add('hidden');

// Reset the score
firstScore.textContent = 0;
secondScore.textContent = 0;