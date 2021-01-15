# Guess a Number App

## HTML setup
<!-- 1) Number input
    - Why? So user can add their guesses
2) Button
    - Why? For users to submit their guess and to trigger state changes
3) span for guesses remaining
    - Why? So users know how many more guesses they have
4) Too high/too low/Correct span
    - Why? SO users know where to guess their next number
5) Reset Button (stretch goal)
    - Why? So users can click to start a new game -->

## Steps
1) Grab DOM elements (with ids)
2) Initialize state 
    - random number: n   Math.ceil(Math.random() * 20) and round
    - Guesses remaining: 4
3) Add event listener to guess button  
    - on click
        1) STATE: remaining guesses decreases by 1 --
        2) Store guess in a variable (Number(someInput.value))
        3) Compare guess with random number
        4) VIEW: create a function compareNumbers with TDD
            a) if guess is greater than random number, change text content of Span to say "too high"
            b) if guess is less than random number, change text content of Span to say "too low"
            c) if guess = random number, change text content of Span to say "Correct!" and disable input
            d) VIEW: check if there are any guesses left. If not:
                - Disable input and add losing message
        5) VIEW: change remaining guesses
4) *STRETCH* Add another event listener to reset button
    - on click:
        1) STATE: Reset remaining guesses state to 4
        2) STATE: Create new random number
        3) VIEW: re-enable inputs if they were disabled and fix game text
5) *STRETCH* Move UI updates into their own functions
    1) View changes can be moved into functions that are called in the STATE event listeners. 
        a) Pull into new utils
        b) add imports for const
        c) export new function
        d) and put html variables into function as argument instead of using within function since we can't export STATE
