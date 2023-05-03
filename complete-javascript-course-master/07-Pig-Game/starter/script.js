'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condn
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');
let currentScore = 0;
//Rolling dice function
btnRoll.addEventListener('click', function () {
  //Generate a random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //Remove the hidden class
  diceEL.classList.remove('hidden');
  //Display the dice rolled
  diceEL.src = `dice-${dice}.png`;
  //Check for 1 if true switch player
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Switch player
  }
  //If false add the current score
});
