import { randomNumberFunc, guessComparison } from './utils.js'

// import functions and grab DOM elements
const guessButton = document.getElementById("guess-button");
const numberInput = document.getElementById("number-input");
const randomNumber = randomNumberFunc();
const feedbackArea = document.getElementById("user-feedback-area");
const guessesRemainingSpan = document.getElementById("guesses-remaining-span");


// initialize state
let guessesRemaining = 4;
    console.log(randomNumber);
    guessesRemainingSpan.textContent = guessesRemaining + ' guesses';

guessButton.addEventListener('click', () =>{
    guessesRemaining--;
    
    if (numberInput.value === randomNumber.value) {
        guessButton.disable = 'true';
        feedbackArea.textContent = 'Great job!';
    }
    else if (guessesRemaining <= 0) {
        guessButton.disable = 'true';
        feedbackArea.textContent = 'Sorry, you lose';
    }
    else {
        feedbackArea.textContent = guessComparison(numberInput.value, randomNumber);
        guessesRemainingSpan.textContent = guessesRemaining + ' guesses remaining';
    }
})