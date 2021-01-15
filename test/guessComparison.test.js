// IMPORT MODULES under test here:
import { guessComparison } from '../utils.js';

const test = QUnit.test;

test('guessComparison', (expect) => {
    //Arrange
    // if numberInput is higher than randomNumber, return "too high"
    const expected = "Too high. Guess again." ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessComparison(15, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('guessComparison', (expect) => {
    //Arrange
    // if numberInput is lower than randomNumber, return "too low"
    const expected = "Too low. Guess again." ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessComparison(3, 19);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('guessComparison', (expect) => {
    //Arrange
    // if numberInput is higher than randomNumber, return "correct"
    const expected = "Correct!";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessComparison(7, 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});