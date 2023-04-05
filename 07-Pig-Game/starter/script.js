'use strict';

const firstPlayer  = document.querySelector( '.player--0' );
const secondPlayer = document.querySelector( '.player--1' );

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

let currentScore      = 0;
let currentPlayer     = 0;
let firstPlayerTotal  = 0
let secondPlayerTotal = 0;
let winnerTarget      = 100;
let isGameActive      = true;

// Roll the dice update current player current score
btnRoll.addEventListener( 'click', function () {

    // Do nothing if game is already ended.
    if ( ! isGameActive ) {
        return;
    }

    // Generate a number between 1 and 6
    let diceNum = Math.trunc( Math.random() * 6 ) + 1;

    // Update dice image
    diceImage.src = `dice-${diceNum}.png`;
    diceImage.classList.remove( 'hidden' );

    // Update user score
    if ( diceNum !== 1 ) {
        currentScore += diceNum;

        if ( currentPlayer === 0 ) {
            firstCurrentScoreElement.textContent = currentScore;
        } else {
            secondCurrentScoreElement.textContent = currentScore;
        }

    } else {
        switchPlayer();
    }
} );

// Hold score and switch the user
btnHold.addEventListener( 'click', function () {

    // Do nothing if game is already ended.
    if ( ! isGameActive ) {
        return;
    }

    if ( currentPlayer === 0 ) {
        firstPlayerTotal += currentScore;
        firstScoreElement.textContent = firstPlayerTotal; // Add current score to the first player total score

        if ( firstPlayerTotal > winnerTarget ) {
            playerWon();
        }

    } else {
        secondPlayerTotal += currentScore;
        secondScoreElement.textContent = secondPlayerTotal; // Add current score to the second player total score

        if ( secondPlayerTotal > winnerTarget ) {
            playerWon();
        }
    }

    switchPlayer();
} );

// Start a new game
btnNew.addEventListener( 'click', startNewGame );

function switchPlayer() {

    // Do nothing if game is already ended.
    if ( ! isGameActive ) {
        return;
    }

    currentScore = 0; // Set the current score to 0

    if ( currentPlayer === 0 ) {
        firstPlayer.classList.remove( 'player--active' );
        secondPlayer.classList.add( 'player--active' );

        firstCurrentScoreElement.textContent = 0;
        currentPlayer                        = 1;
    } else {
        secondPlayer.classList.remove( 'player--active' );
        firstPlayer.classList.add( 'player--active' );

        secondCurrentScoreElement.textContent = 0;
        currentPlayer                         = 0;
    }
}

function playerWon() {

    if ( currentPlayer === 0 ) {
        firstPlayer.classList.remove( 'player--active' );
        firstPlayer.classList.add( 'player--winner' );
        firstCurrentScoreElement.textContent = 0;
    } else {
        secondPlayer.classList.remove( 'player--active' );
        secondPlayer.classList.add( 'player--winner' );
        secondCurrentScoreElement.textContent = 0;
    }

    diceImage.classList.add( 'hidden' ); // Hide the dice
    isGameActive = false; // End the game
}

function startNewGame() {

    isGameActive      = true;
    currentPlayer     = 0;
    currentScore      = 0;
    firstPlayerTotal  = 0;
    secondPlayerTotal = 0;

    firstScoreElement.textContent  = 0;
    secondScoreElement.textContent = 0;

    firstCurrentScoreElement.textContent  = 0;
    secondCurrentScoreElement.textContent = 0;

    firstPlayer.classList.remove( 'player--winner' );
    secondPlayer.classList.remove( 'player--winner' );

    secondPlayer.classList.remove( 'player--active' );
    firstPlayer.classList.add( 'player--active' );

    diceImage.classList.add( 'hidden' );

}