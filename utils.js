export function randomNumberFunc() {
    return Number(Math.ceil(Math.random() * 20));
}

export function guessComparison(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return "Too high. Guess again." ;
    }
    else if (firstNumber < secondNumber) {
        return "Too low. Guess again." ;
    }
    else {
        return "Correct!";
    }
}