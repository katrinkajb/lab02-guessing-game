import { randomNumberFunc, guessComparison } from './utils.js'

const guessButton = document.getElementById("guess-button");
const numberInput = document.getElementById("number-input");
const randomNumber = randomNumberFunc();
const feedbackArea = document.getElementById("user-feedback-area");
const guessesRemainingSpan = document.getElementById("guesses-remaining-span");
const resetButton = document.getElementById('reset-button');


let guessesRemaining = 4;
    console.log(randomNumber);
    guessesRemainingSpan.textContent = guessesRemaining + ' guesses';

guessButton.addEventListener('click', () =>{
    guessesRemaining--;
    
    if (Number(numberInput.value) === randomNumber) {
        guessButton.disabled = 'true';
        feedbackArea.textContent = 'Great job!';
    }
    else if (guessesRemaining <= 0) {
        guessButton.disabled = 'true';
        feedbackArea.textContent = 'Sorry, you lose';
        guessesRemainingSpan.textContent = '';
    }
    else {
        feedbackArea.textContent = guessComparison(numberInput.value, randomNumber);
        guessesRemainingSpan.textContent = guessesRemaining + ' guesses remaining';
    }
})

// resetButton.addEventListener('click', () => {
//     guessesRemaining = 4;
//     randomNumberFunc();
//     guessesRemainingSpan.textContent = guessesRemaining + ' guesses';
//     guessButton.disabled = 'false';
//     numberInput.textContent = '';
// })