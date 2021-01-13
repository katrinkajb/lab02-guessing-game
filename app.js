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


guessButton.addEventListener('click', () =>{
    guessesRemaining--;
    feedbackArea.textContent = guessComparison(numberInput.value, randomNumber);
    console.log(randomNumber);
    guessesRemainingSpan.textContent = guessesRemaining.value;
    console.log(guessesRemainingSpan.textContent);


// disable input if correct
//     d) VIEW: check if there are any guesses left. If not:
//         - Disable input and add losing message

// 5) VIEW: change remaining guesses

})

// guessesRemainingSpan.textContent = guessesRemaining;

// console.log(guessesRemainingSpan);