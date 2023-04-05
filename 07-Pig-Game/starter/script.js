'use strict';

const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');

const firstScoreElement  = document.getElementById( 'score--0' );
const secondScoreElement = document.getElementById( 'score--1' );

const firstCurrentScoreElement  = document.getElementById( 'current--0' );
const secondCurrentScoreElement = document.getElementById( 'current--1' );

const diceImage = document.querySelector( '.dice' );
const btnNew    = document.querySelector( '.btn--new' );
const btnRoll   = document.querySelector( '.btn--roll' );
const btnHold   = document.querySelector( '.btn--hold' );

// Starting fresh game
diceImage.classList.add( 'hidden' );
firstScoreElement.textContent  = 0;
secondScoreElement.textContent = 0;

let currentScore = 0;
let currentPlayer = 0;

console.log(firstPlayer);

// Roll the dice
btnRoll.addEventListener( 'click', function () {
    // Generate a number between 1 and 6
    let diceNum = Math.trunc( Math.random() * 6 ) + 1;

    // Update dice image
    diceImage.src = `dice-${diceNum}.png`;
    diceImage.classList.remove( 'hidden' );

    // Update user score
    if ( diceNum !== 1 ) {
        currentScore += diceNum;

        if(currentPlayer === 0) {
            firstCurrentScoreElement.textContent = currentScore;
        } else {
            secondCurrentScoreElement.textContent = currentScore;
        }

    } else {
        firstPlayer.classList.remove('player--active');
        secondPlayer.classList.add('player--active');
        currentPlayer = 1;
    }
    console.log( diceNum );
} );